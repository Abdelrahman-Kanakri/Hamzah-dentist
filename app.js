(() => {
  const ALL = window.TOPICS.map(([tier, en, ar]) => ({ tier, en, ar }));
  const MODES = [
    { key: 'all', label: 'All topics' },
    { key: 'g', label: 'General' },
    { key: 's', label: 'Specialized' },
    { key: 'h', label: 'Hard' },
  ];
  const TIMER_MS = 30000;
  const DANGER_AT = 7; // seconds left when the ring turns red
  const RING_C = 2 * Math.PI * 88;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const $ = (id) => document.getElementById(id);
  const box = $('box');
  const strip = $('strip');
  const status = $('status');
  const live = $('live');
  const ring = $('ring');
  const arc = $('arc');
  const count = $('count');
  const timerTopic = $('timerTopic');
  const pauseBtn = $('pause');
  const modePill = $('modePill');

  let modeIndex = 0;
  let deck = [];
  let last = null;       // last topic dealt
  let shown = [];        // the three rows currently on screen
  let current = null;    // the settled topic, if any
  let spinning = false;
  let dealt = 0;

  /* ---------- Deck: every topic once before any repeats ---------- */

  const pool = () => ALL.filter((t) => MODES[modeIndex].key === 'all' || t.tier === MODES[modeIndex].key);
  const randomOf = (list) => list[Math.floor(Math.random() * list.length)];

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function refill() {
    deck = shuffle(pool());
    dealt = 0;
    if (deck.length > 1 && deck[deck.length - 1] === last) deck.unshift(deck.pop());
  }

  function deal() {
    if (!deck.length) refill();
    dealt++;
    return (last = deck.pop());
  }

  /* ---------- Reel ---------- */

  function rowEl(t, isCurrent) {
    const row = document.createElement('div');
    row.className = 'row' + (isCurrent ? ' cur' : '');
    const en = document.createElement('div');
    en.className = 'en' + (t.en.length > 24 ? ' long' : '');
    en.textContent = t.en;
    const ar = document.createElement('div');
    ar.className = 'ar';
    ar.lang = 'ar';
    ar.dir = 'rtl';
    ar.textContent = t.ar;
    row.append(en, ar);
    return row;
  }

  function renderStatic(rows, centerIsCurrent) {
    strip.style.transition = 'none';
    strip.style.transform = 'translate3d(0,0,0)';
    strip.replaceChildren(...rows.map((t, i) => rowEl(t, centerIsCurrent && i === 1)));
    shown = rows;
    void strip.offsetHeight;
    strip.style.transition = '';
  }

  function spin() {
    if (spinning) return;
    spinning = true;
    closeInfo();
    closeTimer();

    const target = deal();
    const others = pool().filter((t) => t !== target);
    const fillers = reduceMotion.matches ? 3 : 32;
    const rows = [
      ...shown,
      ...Array.from({ length: fillers }, () => randomOf(others)),
      randomOf(others), target, randomOf(others),
    ];

    strip.style.transition = 'none';
    strip.style.transform = 'translate3d(0,0,0)';
    strip.replaceChildren(...rows.map((t) => rowEl(t, false)));
    void strip.offsetHeight;

    status.textContent = 'Shuffling…';
    live.textContent = '';

    const ms = reduceMotion.matches ? 350 : 5200;
    const shift = ((rows.length - 3) / rows.length) * 100;
    strip.style.transition = `transform ${ms}ms cubic-bezier(0.14, 0.8, 0.2, 1), filter 600ms cubic-bezier(0.23, 1, 0.32, 1)`;
    if (!reduceMotion.matches) strip.classList.add('blur');
    strip.style.transform = `translate3d(0, -${shift}%, 0)`;
    const unblur = setTimeout(() => strip.classList.remove('blur'), ms * 0.55);

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(unblur);
      strip.removeEventListener('transitionend', onEnd);
      strip.classList.remove('blur');
      settle(rows.slice(-3), target);
    };
    const onEnd = (e) => { if (e.target === strip && e.propertyName === 'transform') finish(); };
    strip.addEventListener('transitionend', onEnd);
    setTimeout(finish, ms + 300);
  }

  function settle(lastThree, target) {
    // Rebuild with just the three visible rows so the next spin continues from here.
    renderStatic(lastThree, false);
    current = target;
    requestAnimationFrame(() => strip.children[1].classList.add('cur'));
    status.textContent = `${dealt} of ${pool().length} this round`;
    live.textContent = `${target.en}. ${target.ar}`;
    spinning = false;
  }

  /* ---------- Timer ---------- */

  let timer = { raf: 0, elapsed: 0, lastTs: 0, running: false, done: false };

  function buildTicks() {
    const g = $('ticks');
    for (let i = 0; i < 12; i++) {
      const a = (i * 30 * Math.PI) / 180;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', 'tick');
      line.setAttribute('x1', 100 + 76 * Math.cos(a));
      line.setAttribute('y1', 100 + 76 * Math.sin(a));
      line.setAttribute('x2', 100 + 70 * Math.cos(a));
      line.setAttribute('y2', 100 + 70 * Math.sin(a));
      g.appendChild(line);
    }
  }

  function paintTimer() {
    const left = Math.max(0, (TIMER_MS - timer.elapsed) / 1000);
    count.textContent = String(Math.ceil(left));
    arc.style.strokeDashoffset = String(RING_C * (timer.elapsed / TIMER_MS));
    ring.dataset.state = timer.done ? 'done' : !timer.running ? 'paused' : left <= DANGER_AT ? 'danger' : 'run';
  }

  function tick(ts) {
    if (!timer.running) return;
    timer.elapsed += ts - timer.lastTs;
    timer.lastTs = ts;
    if (timer.elapsed >= TIMER_MS) {
      timer.elapsed = TIMER_MS;
      timer.running = false;
      timer.done = true;
      paintTimer();
      pauseBtn.textContent = 'Pause';
      live.textContent = 'Time is up';
      return;
    }
    paintTimer();
    timer.raf = requestAnimationFrame(tick);
  }

  function runTimer() {
    timer.running = true;
    timer.lastTs = performance.now();
    pauseBtn.textContent = 'Pause';
    timer.raf = requestAnimationFrame(tick);
  }

  function openTimer() {
    if (spinning) return;
    closeInfo();
    timerTopic.textContent = current ? current.en : 'Timer';
    cancelAnimationFrame(timer.raf);
    timer = { raf: 0, elapsed: 0, lastTs: 0, running: false, done: false };
    paintTimer();
    box.dataset.view = 'timer';
    $('viewTimer').inert = false;
    $('viewReel').inert = true;
    runTimer();
  }

  function closeTimer() {
    cancelAnimationFrame(timer.raf);
    timer.running = false;
    if (box.dataset.view === 'timer') {
      box.dataset.view = 'reel';
      $('viewTimer').inert = true;
      $('viewReel').inert = false;
    }
  }

  function togglePause() {
    if (timer.done) { openTimer(); return; }
    if (timer.running) {
      timer.running = false;
      cancelAnimationFrame(timer.raf);
      pauseBtn.textContent = 'Resume';
      paintTimer();
    } else {
      runTimer();
    }
  }

  const timerOpen = () => box.dataset.view === 'timer';

  /* ---------- Info, mode ---------- */

  function closeInfo() {
    box.dataset.info = 'false';
    $('info').inert = true;
  }

  function toggleInfo() {
    const open = box.dataset.info !== 'true';
    box.dataset.info = String(open);
    $('info').inert = !open;
  }

  function cycleMode() {
    modeIndex = (modeIndex + 1) % MODES.length;
    modePill.textContent = MODES[modeIndex].label;
    deck = [];
    last = null;
    refill();
    status.textContent = `${pool().length} topics. Press space to shuffle`;
  }

  /* ---------- Input ---------- */

  const isSpace = (e) => e.code === 'Space' || e.key === ' ';

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (isSpace(e)) {
      e.preventDefault();
      if (!e.repeat) spin();
      return;
    }
    if (e.repeat) return;
    const k = e.key.toLowerCase();
    if (k === 't') openTimerOrToggle();
    else if (k === 'i') toggleInfo();
    else if (k === 'm') cycleMode();
    else if (k === 'r' && timerOpen()) openTimer();
    else if (k === 'escape') { closeInfo(); closeTimer(); }
    else if (k === 'enter' && document.activeElement === $('reel')) spin();
  });

  // Space activates a focused button on keyup; swallow it so a shuffle doesn't also click.
  document.addEventListener('keyup', (e) => { if (isSpace(e)) e.preventDefault(); });

  function openTimerOrToggle() {
    if (timerOpen()) togglePause();
    else openTimer();
  }

  $('reel').addEventListener('click', spin);
  pauseBtn.addEventListener('click', togglePause);
  $('restart').addEventListener('click', openTimer);
  $('back').addEventListener('click', closeTimer);
  modePill.addEventListener('click', cycleMode);
  $('info').addEventListener('click', closeInfo);

  document.querySelectorAll('.key').forEach((btn) => {
    btn.addEventListener('click', () => {
      const act = btn.dataset.act;
      if (act === 'spin') spin();
      else if (act === 'timer') openTimerOrToggle();
      else if (act === 'mode') cycleMode();
      else if (act === 'info') toggleInfo();
      btn.blur();
    });
  });

  /* ---------- Init ---------- */

  buildTicks();
  refill();
  renderStatic([randomOf(ALL), randomOf(ALL), randomOf(ALL)], false);
})();
