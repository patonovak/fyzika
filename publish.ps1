param(
  [string]$Message = "Update content"
)

$ErrorActionPreference = "Stop"

Write-Host "Kontrolujem stav projektu..." -ForegroundColor Cyan

$status = git status --porcelain
if (-not $status) {
  Write-Host "Nie sú žiadne zmeny na publikovanie." -ForegroundColor Yellow
  exit 0
}

Write-Host "Spúšťam kontrolný build Quartz..." -ForegroundColor Cyan
npx.cmd quartz build

Write-Host "Pripravujem zmeny pre Git..." -ForegroundColor Cyan
git add -A

$statusAfterAdd = git status --porcelain
if (-not $statusAfterAdd) {
  Write-Host "Po pridaní súborov nie sú žiadne zmeny na commit." -ForegroundColor Yellow
  exit 0
}

Write-Host "Vytváram commit: $Message" -ForegroundColor Cyan
git commit -m $Message

Write-Host "Odosielam zmeny na GitHub..." -ForegroundColor Cyan
git push

Write-Host "Hotovo. GitHub Actions teraz nasadí stránku." -ForegroundColor Green
Write-Host "Adresa: https://patonovak.github.io/fyzika/" -ForegroundColor Green
