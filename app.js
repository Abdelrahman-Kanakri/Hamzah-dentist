(() => {
  const TOPICS = window.TOPICS;
  const N = TOPICS.length;
  const SEG = 360 / N;
  const TIER = { g: 'General', s: 'Specialized', h: 'Hard' };
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const $ = (id) => document.getElementById(id);
  const rotor = $('rotor');
  const spinBtn = $('spin');
  const againBtn = $('again');
  const idle = $('idle');
  const result = $('result');
  const pointsEl = $('points');
  const toggleBtn = $('toggle');
  const timerBtn = $('timer');
  const live = $('live');

  // Flatten the bank and give every question a stable id.
  const BANK = [];
  TOPICS.forEach((topic, ti) => {
    topic.q.forEach(([tier, text, pts], qi) => {
      BANK.push({ id: `${ti}-${qi}`, ti, tier, text, pts });
    });
  });

  const used = new Set();
  let rotation = 0;
  let spinning = false;
  let timerId = null;
  let timerStart = 0;

  /* ---------- Wheel ---------- */

  const point = (r, deg) => {
    const a = (deg * Math.PI) / 180;
    return [200 + r * Math.sin(a), 200 - r * Math.cos(a)];
  };

  function buildWheel() {
    TOPICS.forEach((topic, i) => {
      const a0 = i * SEG;
      const a1 = (i + 1) * SEG;
      const [x0, y0] = point(190, a0);
      const [x1, y1] = point(190, a1);

      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', `M200 200 L${x0} ${y0} A190 190 0 0 1 ${x1} ${y1} Z`);
      path.setAttribute('class', 'seg');
      path.setAttribute('style', `--h:${topic.hue}`);
      path.dataset.index = i;
      rotor.appendChild(path);

      // Radial label, flipped on the left half so it never reads upside down.
      const mid = a0 + SEG / 2;
      const flip = mid > 180;
      const g = document.createElementNS(SVG_NS, 'g');
      g.setAttribute('transform', `rotate(${flip ? mid + 90 : mid - 90} 200 200)`);
      const text = document.createElementNS(SVG_NS, 'text');
      text.setAttribute('class', 'seg-label');
      text.setAttribute('style', `--h:${topic.hue}`);
      text.setAttribute('dominant-baseline', 'central');
      text.setAttribute('text-anchor', flip ? 'start' : 'end');
      text.setAttribute('x', flip ? 200 - 172 : 200 + 172);
      text.setAttribute('y', 200);
      text.textContent = topic.name;
      g.appendChild(text);
      rotor.appendChild(g);
    });

    const rim = document.createElementNS(SVG_NS, 'circle');
    rim.setAttribute('class', 'rim');
    rim.setAttribute('cx', 200);
    rim.setAttribute('cy', 200);
    rim.setAttribute('r', 197);
    rotor.appendChild(rim);
  }

  /* ---------- Picking ---------- */

  const mode = () => document.querySelector('input[name="mode"]:checked').value;

  const randomOf = (list) => list[Math.floor(Math.random() * list.length)];

  // The wheel only lands on topics that still have unasked questions in this mode.
  // Once everything in the mode has been asked, that mode's history starts over.
  function pickQuestion() {
    const m = mode();
    const inScope = BANK.filter((q) => m === 'mixed' || q.tier === m);
    let pool = inScope.filter((q) => !used.has(q.id));
    if (!pool.length) {
      inScope.forEach((q) => used.delete(q.id));
      pool = inScope;
    }
    const topics = [...new Set(pool.map((q) => q.ti))];
    const ti = randomOf(topics);
    return randomOf(pool.filter((q) => q.ti === ti));
  }

  /* ---------- Spin ---------- */

  function spin() {
    if (spinning) return;
    spinning = true;
    spinBtn.disabled = true;
    againBtn.disabled = true;
    stopTimer(true);

    result.dataset.show = 'false';
    rotor.querySelectorAll('.seg.is-win').forEach((s) => s.classList.remove('is-win'));

    const question = pickQuestion();
    const ti = question.ti;
    used.add(question.id);

    // Land the middle of segment `ti` under the pointer, with a little jitter inside the segment.
    const jitter = (Math.random() - 0.5) * SEG * 0.7;
    const landing = 360 - (ti + 0.5) * SEG + jitter;
    const turns = reduceMotion.matches ? 1 : 5;
    const base = rotation - (rotation % 360);
    rotation = base + turns * 360 + landing;
    if (rotation <= base + turns * 360) rotation += 360;

    const ms = reduceMotion.matches ? 500 : 4800;
    rotor.style.transitionDuration = `${ms}ms`;
    rotor.style.transform = `rotate(${rotation}deg)`;

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      rotor.removeEventListener('transitionend', onEnd);
      reveal(ti, question);
    };
    const onEnd = (e) => { if (e.propertyName === 'transform') finish(); };
    rotor.addEventListener('transitionend', onEnd);
    setTimeout(finish, ms + 250);
  }

  function reveal(ti, q) {
    rotor.querySelector(`.seg[data-index="${ti}"]`).classList.add('is-win');

    $('topic').textContent = TOPICS[ti].name;
    const badge = $('badge');
    badge.textContent = TIER[q.tier];
    badge.dataset.tier = q.tier;
    $('question').textContent = q.text;

    pointsEl.replaceChildren(...q.pts.map((p) => {
      const li = document.createElement('li');
      li.textContent = p;
      return li;
    }));
    pointsEl.hidden = true;
    toggleBtn.textContent = 'Show talking points';
    toggleBtn.setAttribute('aria-expanded', 'false');

    idle.hidden = true;
    result.hidden = false;
    void result.offsetWidth; // commit the hidden state so the entrance transitions
    result.dataset.show = 'true';

    live.textContent = `${TOPICS[ti].name}, ${TIER[q.tier]}: ${q.text}`;
    updateCount();

    spinning = false;
    spinBtn.disabled = false;
    againBtn.disabled = false;
  }

  /* ---------- Card controls ---------- */

  toggleBtn.addEventListener('click', () => {
    const open = pointsEl.hidden;
    pointsEl.hidden = !open;
    toggleBtn.textContent = open ? 'Hide talking points' : 'Show talking points';
    toggleBtn.setAttribute('aria-expanded', String(open));
  });

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  function stopTimer(clear) {
    clearInterval(timerId);
    timerId = null;
    if (clear) timerBtn.textContent = 'Start timer';
  }

  timerBtn.addEventListener('click', () => {
    if (timerId) { stopTimer(false); return; }
    timerStart = Date.now();
    timerBtn.textContent = '0:00';
    timerId = setInterval(() => {
      timerBtn.textContent = fmt(Math.floor((Date.now() - timerStart) / 1000));
    }, 250);
  });

  againBtn.addEventListener('click', () => {
    $('wheelWrap').scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
    spin();
  });

  spinBtn.addEventListener('click', spin);

  $('reset').addEventListener('click', () => {
    used.clear();
    updateCount();
  });

  function updateCount() {
    $('count').textContent = `${used.size} of ${BANK.length} asked`;
  }

  buildWheel();
  updateCount();
})();
