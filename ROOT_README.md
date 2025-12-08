VIREN NEXUS - Local development and deployment

Overview

This repository contains a static site for the VIREN NEXUS project. Pages are located in `src/pages/`. Assets are under `src/assets/`.

Quick start (Windows PowerShell)

1. Open PowerShell and navigate to the project folder:

```powershell
cd "C:\OneDrive\Desktop\Documents\viren vortex site\viren-nexus-site"
```

2. Install dependencies (only `live-server` is required for local dev):

```powershell
npm init -y
npm install --save-dev live-server
```

3. Start the dev server and open the site in your browser:

```powershell
npm start
```

The site will be served from the `src/pages` folder. If the browser doesn't open automatically, visit <http://127.0.0.1:5173> (or the port printed by live-server).

Project structure

- `src/pages/` — HTML pages (index, answers, ask, breakthroughs, research-engines, how-it-works, about)
- `src/assets/css/styles.css` — Global styles
- `src/assets/js/main.js` — Shared JavaScript utilities
- `src/assets/libs/` — Third-party libs (three.js, vanta)

Notes

- The pages already reference CDN versions of Tailwind, Font Awesome and Vanta/three where appropriate. Local copies are included in `src/assets/libs` for offline use in browsers that need them.
- There is no build pipeline; this is a static-site layout served directly from `src/pages`.

Next steps

- If you want a production build (bundle/minify), I can add a simple build step using `esbuild` or `vite` and wire that into `npm run build`.
- I can also deploy this to GitHub Pages or Netlify and add continuous deployment configuration.
