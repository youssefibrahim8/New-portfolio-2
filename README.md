# New-portfolio-2

A personal portfolio styled as a dramatic RPG command menu: a fanned stack of serif menu words over a red and teal grunge background, thin white guide lines, and a floating character with a glowing eye.

## Features
- **Command menu**: Profile, Skills, Experience, Projects, Education, Hobbies, Contact, Résumé. Each word is fitted to the length, size and angle of a word in the reference menu.
- **Purple paint splatter** appears behind whichever option you hover or select with the keyboard.
- **Floating character** that bobs slowly up and down, with a subtle eye glow.
- **Thin white guide lines** (circles, diagonal, crosshair) that slowly rotate.
- **Section panels** with deep links (`#/projects`, `#/contact`, ...).
- **Q / E** switch to the previous / next section (on the menu they move the selection).
- Keyboard: ↑/↓ to move, Enter to open, Esc to go back.
- Precise hitboxes: every point on screen belongs to at most one menu word.
- Works on desktop and phones. No build step: plain HTML, CSS and JS.

## Make it yours
All content lives at the top of `script.js`:
- `PROFILE`: name, role, email, links, résumé path.
- `SECTIONS`: the text for each panel.
- `SLOTS`: the baseline, angle, length and letter heights of each menu word.

Put your CV at `assets/resume.pdf`.

## Run locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Deploy
On GitHub, go to Settings → Pages, set the source to the `main` branch with the root folder, and save.
