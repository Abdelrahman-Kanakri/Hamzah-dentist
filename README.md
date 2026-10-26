# Dental Shuffle

One box that shuffles through dental topics like a slot reel, then a 30-second timer to explain the one it lands on.

## Run

No build step. Open `index.html`, or serve the folder:

```
python3 -m http.server 8000
```

Any static host works (GitHub Pages, Vercel, Netlify): publish the repo root.

## Keys

| Key | Action |
| --- | --- |
| Space | Reshuffle (also works from the timer) |
| T | Start the 30 s timer for the current topic; press again to pause/resume |
| R | Restart the timer |
| M | Cycle difficulty: All, General, Specialized, Hard |
| I | How-to-explain checklist |
| Esc | Back to the reel |

The key hints under the box are clickable for phones and tablets, and tapping the reel reshuffles.

## Topics

`topics.js` holds every topic as `[tier, English, Arabic]` with tier `g`, `s` or `h`. The shuffle deals every topic once before any repeat, then reshuffles. Add as many as you like. Have the Arabic reviewed by a native-speaking dentist before relying on it.

## Motion

Follows `emilkowalski/skills`: transform and opacity for movement, strong ease-out curves, UI transitions under 300 ms, press feedback on buttons, hover limited to fine pointers, and `prefers-reduced-motion` replaces the 5 s reel with a short scroll. The long reel is the one deliberate exception, since it is the feature.
