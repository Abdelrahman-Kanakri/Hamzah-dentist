# Dental Spin

Spin a wheel, get a random dental topic and question, explain it out loud, then reveal the talking points.

## Run

No build step. Open `index.html`, or serve the folder:

```
python3 -m http.server 8000
```

Any static host works (GitHub Pages, Vercel, Netlify): publish the repo root.

## Use

- Difficulty: **Mixed**, **General**, **Specialized**, or **Hard**.
- 12 topics on the wheel. The wheel only lands on topics that still have unasked questions in the chosen mode; history resets once a mode is exhausted (or via **Reset history**).
- **Show talking points** is hidden by default so you talk first. **Start timer** times your explanation.

## Edit the questions

All content lives in `questions.js`. Each question is `[tier, question, [talking points]]` with tier `g`, `s`, or `h`. Add a topic by adding an object with a `name`, `hue` (0–360) and `q` list; the wheel resizes itself.

Talking points are study prompts, not clinical guidance. Verify figures against current guidelines.

## Motion

Follows the principles in `emilkowalski/skills`: transform/opacity only, strong ease-out curves, UI transitions under 300 ms, press feedback on buttons, hover gated to fine pointers, and `prefers-reduced-motion` shortens the spin to a brief turn. The 4.8 s wheel spin is the one deliberate exception: it's an occasional, decorative moment, not a frequent action.
