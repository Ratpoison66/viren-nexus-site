VIREN NEXUS - quick start

1) Install Node.js LTS (https://nodejs.org). This gives you `node` and `npm`.

2) Open PowerShell and move into the project:
```powershell
cd "C:\OneDrive\Desktop\Documents\viren vortex site\viren-nexus-site"
```

3) Install the local dev tools (runs once):
```powershell
npm install
```

4) Run the site locally (builds then serves from `dist`):
```powershell
npm start
```
Your browser should open at `http://127.0.0.1:5173`. If it does not, copy that URL into the address bar. Stop the server with `Ctrl + C`.

5) Edit content:
- Pages live in `src/pages` (start with `index.html`).
- Shared assets live in `src/assets` (CSS/JS/libs).
- After edits, rerun `npm start` to rebuild and preview.

6) Build for deployment:
```powershell
npm run build
```
This creates a static `dist` folder with the correct paths for hosting.

Deploying to GitHub Pages (automatic)
-------------------------------------
1) Create an empty repo on GitHub (e.g., `viren-nexus-site`).
2) In PowerShell (inside this folder), run:
```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```
3) In GitHub → Settings → Pages: set Source = "Deploy from a branch", Branch = `gh-pages`.
4) Push any future changes to `main`. The workflow in `.github/workflows/deploy.yml` will run `npm run build` and publish `dist` to `gh-pages` automatically.

Need help? Tell me what you want changed (text, colors, sections), and I’ll update the files for you.
