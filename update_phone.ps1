$oldDisplay = "600 000 000"
$newDisplay = "663 49 44 05"

$oldClean = "212600000000"
$newClean = "212663494405"

$files = Get-ChildItem -Path "c:\Users\pc\.gemini\antigravity\scratch\safia-transfers" -Recurse -File -Include *.html, *.js, *.json, *.xml, *.md

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $newContent = $content -replace $oldDisplay, $newDisplay
    $newContent = $newContent -replace $oldClean, $newClean
    
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding utf8
        Write-Host "Updated: $($file.FullName)"
    }
}
