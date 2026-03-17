$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path . -File -Filter "*.html" | Where-Object { 
    $_.FullName -notmatch '\\\.git\\' -and $_.Name -ne "index_clean.html"
}

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $originalContent = $content

    $content = $content -replace '(?s)<div class="header-lang">.*?</div>\s*<a', '<a'
    $content = $content -replace 'style="display: flex; align-items: center; gap: 15px;"', ''

    if ($originalContent -cne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($False)))
        Write-Output "Reverted $($file.Name)"
    }
}
Write-Output "Done"
