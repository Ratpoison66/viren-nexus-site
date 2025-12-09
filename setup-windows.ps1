<#
setup-windows.ps1 - Windows helper to (optionally) install Node, install deps and build the site.

Usage (run in PowerShell as Administrator if you want winget to install Node):
  cd "C:\OneDrive\Desktop\Documents\viren vortex site\viren-nexus-site"
  .\setup-windows.ps1

What it does:
- Checks for node & npm.
- If missing, attempts to install Node LTS via winget (if winget is present).
- Runs `npm install --no-audit --no-fund`.
- Runs `npm run build` to produce ./dist.
- Optionally starts the preview server if -Preview switch is used.
#>

param(
    [switch]$Preview
)

function Write-Info { param($m) Write-Host $m -ForegroundColor Cyan }
function Write-Err { param($m) Write-Host $m -ForegroundColor Red }

$scriptRoot = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
Push-Location $scriptRoot

try {
    Write-Info "Checking Node.js / npm..."
    $node = & node -v 2>$null
    $npm  = & npm -v 2>$null

    if (-not $node -or -not $npm) {
        Write-Info "Node or npm not found."
        if (Get-Command winget -ErrorAction SilentlyContinue) {
            Write-Info "Attempting to install Node.js LTS via winget (requires admin)."
            Write-Host "Running: winget install OpenJS.NodeJS.LTS -s msstore" -ForegroundColor Yellow
            winget install --id OpenJS.NodeJS.LTS -e --accept-package-agreements --accept-source-agreements

            # refresh
            $node = & node -v 2>$null
            $npm  = & npm -v 2>$null

            if (-not $node -or -not $npm) {
                Write-Err "Automatic install via winget did not make node/npm available. Please install Node.js from https://nodejs.org and re-run this script."
                exit 1
            }
        } else {
            Write-Err "winget is not available. Please install Node.js from https://nodejs.org and re-run this script."
            exit 1
        }
    } else {
        Write-Info "Node: $node  |  npm: $npm"
    }

    if (-not (Test-Path .\node_modules)) {
        Write-Info "Installing npm dependencies... (this may take a minute)"
        npm install --no-audit --no-fund
        if ($LASTEXITCODE -ne 0) { Write-Err "npm install failed (exit $LASTEXITCODE)"; exit $LASTEXITCODE }
    } else {
        Write-Info "node_modules already present — skip install"
    }

    Write-Info "Running build (npm run build)"
    npm run build
    if ($LASTEXITCODE -ne 0) { Write-Err "npm run build failed (exit $LASTEXITCODE)"; exit $LASTEXITCODE }

    Write-Info "Build finished. ./dist should be available"

    if ($Preview) {
        Write-Info "Starting preview server (npm run preview)"
        npm run preview
    }
}
finally {
    Pop-Location
}
