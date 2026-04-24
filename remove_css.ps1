$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|google647d' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace '(?i)\s*<link rel="stylesheet" href="style_additions\.css">\s*', "`r`n"
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    }
}
