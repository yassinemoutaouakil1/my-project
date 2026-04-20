$replacements = @{
    ([char]0xC3 + [char]0xA9) = "é"
    ([char]0xC3 + [char]0xA0) = "à"
    ([char]0xC3 + [char]0xA2) = "â"
    ([char]0xC3 + [char]0xAA) = "ê"
    ([char]0xC3 + [char]0xA8) = "è"
    ([char]0xC3 + [char]0xA7) = "ç"
    ([char]0xC3 + [char]0xAE) = "î"
    ([char]0xC3 + [char]0xB4) = "ô"
    ([char]0xC3 + [char]0xBB) = "û"
    ([char]0xC3 + [char]0xB9) = "ù"
    ([char]0xC3 + [char]0x89) = "É"
    ([char]0xC3 + [char]0x80) = "À"
    ([char]0xC2 + [char]0xA9) = "©"
    ([char]0xE2 + [char]0x80 + [char]0x93) = "-" # en dash
    ([char]0xE2 + [char]0x80 + [char]0x94) = "-" # em dash
    "SalAc" = "Salé"
    "CafAc" = "Café"
    "SbaA\u00a1" = "Sbaâ"
}

$files = Get-ChildItem -Path "c:\Users\pc\.gemini\antigravity\scratch\safia-transfers" -Recurse -File -Include *.html, *.js, *.css

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $newContent = $content
    foreach ($key in $replacements.Keys) {
        $newContent = $newContent.Replace($key, $replacements[$key])
    }
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, (New-Object System.Text.UTF8Encoding($false)))
        Write-Host "Fixed: $($file.FullName)"
    }
}
