VIREN NEXUS - local dev and deploy

Quick start (Windows PowerShell)
1. Install Node.js LTS from https://nodejs.org.
2. Navigate to the project folder:
```powershell
cd "C:\OneDrive\Desktop\Documents\viren vortex site\viren-nexus-site"
```
3. Install deps: `npm install`
4. Serve locally (build + preview at http://127.0.0.1:5173): `npm start`
5. Stop with `Ctrl + C`. Re-run `npm start` after edits to rebuild.

Deploy (GitHub Pages)
- Push to `main`; the workflow at `.github/workflows/deploy.yml` runs `npm run build` and publishes `dist` to `gh-pages`.
- In GitHub → Settings → Pages, set source to `gh-pages`.
- Site will appear at `https://YOUR-USER.github.io/YOUR-REPO/`.

Folders
- `src/pages` – HTML pages
- `src/assets` – CSS/JS/vendor libs
- `dist` – generated output (not committed)
- `scripts/build-static.mjs` – build script that fixes asset paths for hosting
