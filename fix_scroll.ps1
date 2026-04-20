$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path . -Recurse -File -Filter "*.html" | Where-Object { 
    $_.FullName -notmatch '\\\.git\\' -and $_.FullName -notmatch '\\images\\' -and $_.FullName -notmatch '\\whatsapp-automation\\' -and $_.FullName -notmatch '\\review-automation\\' 
}

foreach ($file in $files) {
    if ($file.Name -eq "index_clean.html") { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $originalContent = $content

    # Fix literal `n
    $content = $content -replace "\``n", ""

    if ($originalContent -cne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($False)))
    }
}
Write-Output "Done"
