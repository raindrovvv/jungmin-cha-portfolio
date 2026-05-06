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
$activityImage = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/assets/activity/gstar-2025.png" -UseBasicParsing
$smilegateActivityImage = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/assets/activity/smilegate-prototyping-challenge.png" -UseBasicParsing

if ($script.Content -match "Featured implementation") {
  throw "pages.dev still contains the removed featured badge text."
}

if ($script.Content -notmatch "플레이에 맞춰") {
  throw "pages.dev script.js does not include the updated contact headline."
}

if ($script.Content -notmatch "From sound creation to implementation and QA") {
  throw "pages.dev script.js does not include the translated strengths headline."
}

if ($script.Content -notmatch "Twelve Knights of Joseon" -or $script.Content -notmatch "Rainbow Guardian") {
  throw "pages.dev script.js does not include translated project titles."
}

if ($script.Content -notmatch "\[LP\] Flight Record" -or $script.Content -notmatch "Snacky Chan - Just a Number") {
  throw "pages.dev script.js does not include translated music titles."
}

if ($script.Content -notmatch "Public Activities" -or $script.Content -notmatch "Smilegate Indie Game Prototyping Challenge") {
  throw "pages.dev script.js does not include the public activities section."
}

if ($script.Content -notmatch "현장에서 검증한 제작 경험" -or $script.Content -notmatch "Production tested with real players") {
  throw "pages.dev script.js does not include the revised public activities headline."
}

if ($script.Content -notmatch "navActivities") {
  throw "pages.dev script.js does not include the activities nav label."
}

if ($script.Content -notmatch "page.onstove.com/devlog/kr/search/ALL/가디언") {
  throw "pages.dev script.js does not include the filtered Smilegate activity link."
}

if ($script.Content -notmatch "assets/activity/gstar-2025.png" -or $script.Content -notmatch "assets/activity/smilegate-prototyping-challenge.png" -or $script.Content -notmatch "assets/activity/gemini-3-seoul-hackathon.png" -or $script.Content -notmatch "assets/activity/sparta-gamejam.png") {
  throw "pages.dev script.js does not include the public activity images."
}

if ($styles.Content -notmatch "margin-top: auto") {
  throw "pages.dev styles.css does not include the tech card alignment rule."
}

if ($styles.Content -notmatch "@media \(max-width: 1180px\)") {
  throw "pages.dev styles.css does not include the medium-width card layout rule."
}

if ($styles.Content -notmatch "@media \(max-width: 1100px\)") {
  throw "pages.dev styles.css does not include the tablet contact layout rule."
}

if ($styles.Content -notmatch "activity-grid") {
  throw "pages.dev styles.css does not include the public activities layout."
}

if ($styles.Content -notmatch "activity-media") {
  throw "pages.dev styles.css does not include the public activity image layout."
}

if ($activityImage.RawContentLength -lt 1000 -or $smilegateActivityImage.RawContentLength -lt 1000) {
  throw "pages.dev public activity image asset is missing or too small."
}

Write-Host "Pages deploy verified: https://jungmin-cha-portfolio.pages.dev"
