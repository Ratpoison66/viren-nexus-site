How to run and develop the VIREN NEXUS static site (step-by-step)

This short walkthrough will get your site running locally on Windows (PowerShell). Follow each step and you’ll have the site served and ready for edits.

1) Open PowerShell

2) Change into the project folder:

```powershell
cd "C:\OneDrive\Desktop\Documents\viren vortex site\viren-nexus-site"
```

3) Install dependencies:

```powershell
npm install
```

This installs `live-server` which is used to serve the static files during development.

4) Start the dev server:

```powershell
npm start
```

`live-server` will open your default browser and serve files from `src/pages`. If it doesn't open automatically, note the port printed in the terminal (default in the script is 5173) and open `http://127.0.0.1:5173`.

5) Edit files

- HTML pages are in `src/pages/` (open `index.html` to start).
- Shared CSS/JS are in `src/assets/css/` and `src/assets/js/`.

6) Test interactivity

- The site uses `main.js` and `scroll-animations.js`. After editing, refresh the browser to see changes.

Optional: Create a Windows helper script

If you'd like, I can add a `serve.ps1` script that runs `npm start` for you and prints the URL. Say the word and I'll add it.

<<<<<<< Updated upstream
Want a build pipeline or deployment? I can add a minimal `vite` setup and GitHub Pages deploy script or Netlify config. Tell me which you'd prefer and I’ll implement it.
=======
Want a build pipeline or deployment? I can add a minimal `vite` setup and GitHub Pages deploy script or Netlify config. Tell me which you'd prefer and I’ll implement it.
>>>>>>> Stashed changes
