Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

node .\scripts\prepare-worker-assets.mjs
npx wrangler pages deploy dist --project-name=jungmin-cha-portfolio

$script = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/script.js" -UseBasicParsing
$styles = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/styles.css" -UseBasicParsing

if ($script.Content -match "Featured implementation") {
  throw "pages.dev still contains the removed featured badge text."
}

if ($styles.Content -notmatch "margin-top: auto") {
  throw "pages.dev styles.css does not include the tech card alignment rule."
}

Write-Host "Pages deploy verified: https://jungmin-cha-portfolio.pages.dev"
