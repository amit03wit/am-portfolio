# Portfolio Template (Terminal Style)

This project is a modular portfolio site in the same style as the reference you shared.

## 1) Edit your content

Update these files:

- `data/personal.js`
- `data/about.js`
- `data/skills.js`
- `data/projects.js`
- `data/experience.js`
- `data/education.js`

The terminal view (`cat about.md`, `ls projects/`, etc.) is auto-generated from those files via `data/terminal-fs.js`.

## 2) Run locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open: <http://localhost:8080>

## 3) Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In repository settings, enable **Pages**.
3. Select deployment from the main branch root.

Your site will be live at: `https://<your-username>.github.io/<repo-name>/`
