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

$gifFallbacks = Get-ChildItem -Path ".\dist\assets\game" -Filter "*.gif" -File -ErrorAction SilentlyContinue
if ($gifFallbacks) {
  throw "dist still contains GIF fallbacks: $($gifFallbacks.Name -join ', ')"
}

npx wrangler pages deploy dist --project-name=jungmin-cha-portfolio
if ($LASTEXITCODE -ne 0) {
  throw "Cloudflare Pages deploy failed."
}

$index = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/" -UseBasicParsing
$activityImage = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/assets/activity/gstar-2025.png" -UseBasicParsing
$smilegateActivityImage = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/assets/activity/smilegate-prototyping-challenge.png" -UseBasicParsing

if ($index.Content -notmatch 'href="#activities"') {
  throw "pages.dev index.html does not include the Activities nav link."
}

$scriptPathMatch = [regex]::Match($index.Content, '\./script\.js\?v=[a-f0-9]{12}')
$stylesPathMatch = [regex]::Match($index.Content, '\./styles\.css\?v=[a-f0-9]{12}')

if (-not $scriptPathMatch.Success -or -not $stylesPathMatch.Success) {
  throw "pages.dev index.html does not include hashed script/style cache versions."
}

if ($index.Content -match "20260504-language-toggle-ui-fix") {
  throw "pages.dev index.html still contains the old fixed script cache version."
}

$scriptPath = $scriptPathMatch.Value -replace '^\./', ''
$stylesPath = $stylesPathMatch.Value -replace '^\./', ''
$script = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/$scriptPath" -UseBasicParsing
$styles = Invoke-WebRequest -Uri "https://jungmin-cha-portfolio.pages.dev/$stylesPath" -UseBasicParsing

if ($script.Content -match "\.gif") {
  throw "pages.dev script.js still references GIF fallbacks."
}

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

if ($script.Content -notmatch 'navActivities: "Activities"') {
  throw "pages.dev script.js does not keep the header activities nav label in English."
}

if ($script.Content -notmatch "showMoreMusic" -or $styles.Content -notmatch "work-more-button") {
  throw "pages.dev does not include the music compression toggle."
}

if ($script.Content -notmatch "setupActiveNav" -or $styles.Content -notmatch "\.nav a\.is-active") {
  throw "pages.dev does not include the active nav behavior."
}

if ($script.Content -notmatch "TEXT_EDIT_GATE_STORAGE_KEY") {
  throw "pages.dev text editor gate is missing."
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
