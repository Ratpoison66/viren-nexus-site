<#
  serve.ps1 - simple helper to install deps (if needed) and run `npm start`

  Usage: Open PowerShell in this folder and run:
    .\serve.ps1

  The script will:
  - install dependencies if `node_modules` is missing
  - run `npm start` (which uses npx fallback to run live-server)
#>

Write-Host "Serving VIREN NEXUS site from: $PSScriptRoot" -ForegroundColor Cyan
Push-Location $PSScriptRoot

try {
    if (-not (Test-Path .\node_modules)) {
        Write-Host "node_modules not found. Installing npm dependencies..." -ForegroundColor Yellow
        npm install | Out-Default
    }

    Write-Host "Starting dev server (npm start)..." -ForegroundColor Green
    npm start | Out-Default
}
finally {
    Pop-Location
}


