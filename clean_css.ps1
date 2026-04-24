$cssPath = ".\style.css"
$css = Get-Content $cssPath -Raw

$unusedClasses = @("3s", "85rem", "95", "6s", "5s", "95rem", "4rem", "25rem", "6rem", "98", "85", "05rem", "destinations-page-grid", "dest-page-card", "dest-img-box", "dest-content", "dest-subtitle", "dest-desc", "4s", "8s", "03", "08")

foreach ($class in $unusedClasses) {
    # Match block like: .classname { ... }
    # Let's target the exact blocks we know we can delete safely: destinations block
    if ($class -match "destinations-page-grid|dest-page-card|dest-img-box|dest-content|dest-subtitle|dest-desc") {
        $pattern = "(?ms)\.$class\s*\{[^}]+\}"
        $css = $css -replace $pattern, ""
    }
}

Set-Content $cssPath $css -Encoding UTF8
Write-Host "Cleaned up unused specific CSS blocks."
