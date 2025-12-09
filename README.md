# Viren Nexus Site

Static research portal for VIREN with pages for answers, breakthroughs, research engines, and more.

## Structure
- `src/pages` – HTML pages (start at `index.html`).
- `src/assets/css` – styles.
- `src/assets/js` – interactivity (e.g., `main.js`, `scroll-animations.js`).
- `src/assets/libs` – vendor libs (Three.js + Vanta).
- `scripts/build-static.mjs` – builds a deployable `dist` folder.

## Scripts
- `npm start` / `npm run dev` – build then serve `dist` at `http://127.0.0.1:5173`.
- `npm run build` – create `dist` with corrected asset paths for hosting.
- `npm run preview` – serve the existing `dist` at `http://127.0.0.1:4173`.

## Local setup
1) Install Node.js LTS from https://nodejs.org.  
2) In PowerShell:
   ```powershell
   cd "C:\OneDrive\Desktop\Documents\viren vortex site\viren-nexus-site"
   npm install
   npm start
   ```
3) Edit files in `src/pages` and `src/assets`, then rerun `npm start` to rebuild/preview.

## Deployment (GitHub Pages)
Push to the `main` branch. The workflow at `.github/workflows/deploy.yml` runs `npm run build` and publishes `dist` to `gh-pages`. In GitHub → Settings → Pages, set source to `gh-pages`. The site will be available at `https://YOUR-USER.github.io/YOUR-REPO/`.

See `README_FOR_USER.md` for a simpler step-by-step guide.
