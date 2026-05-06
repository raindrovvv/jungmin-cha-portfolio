Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
if ($PSVersionTable.PSVersion.Major -ge 7) {
  $PSNativeCommandUseErrorActionPreference = $true
}

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

node .\scripts\prepare-worker-assets.mjs
if ($LASTEXITCODE -ne 0) {
  throw "dist preparation failed."
}

npx wrangler pages deploy dist --project-name=jungmin-cha-portfolio
if ($LASTEXITCODE -ne 0) {
  throw "Cloudflare Pages deploy failed."
}

$script = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/script.js" -UseBasicParsing
$styles = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/styles.css" -UseBasicParsing

if ($script.Content -match "Featured implementation") {
  throw "pages.dev still contains the removed featured badge text."
}

if ($script.Content -notmatch "플레이에 맞춰") {
  throw "pages.dev script.js does not include the updated contact headline."
}

if ($script.Content -notmatch "From sound creation to implementation and QA") {
  throw "pages.dev script.js does not include the translated strengths headline."
}

if ($styles.Content -notmatch "margin-top: auto") {
  throw "pages.dev styles.css does not include the tech card alignment rule."
}

if ($styles.Content -notmatch "@media \(max-width: 1100px\)") {
  throw "pages.dev styles.css does not include the tablet contact layout rule."
}

Write-Host "Pages deploy verified: https://jungmin-cha-portfolio.pages.dev"
