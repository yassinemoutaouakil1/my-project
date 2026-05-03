$files = Get-ChildItem -Path . -Recurse -Include *.html,*.js

$replacements = @{
    ([regex]::Unescape("\u00C3\u00A9")) = "é"
    ([regex]::Unescape("\u00C3\u00A8")) = "è"
    ([regex]::Unescape("\u00C3\u00A0")) = "à"
    ([regex]::Unescape("\u00C3\u00A2")) = "â"
    ([regex]::Unescape("\u00C3\u00AA")) = "ê"
    ([regex]::Unescape("\u00C3\u00AE")) = "î"
    ([regex]::Unescape("\u00C3\u00B4")) = "ô"
    ([regex]::Unescape("\u00C3\u00BB")) = "û"
    ([regex]::Unescape("\u00C3\u00A7")) = "ç"
    ([regex]::Unescape("\u00C3\u00AF")) = "ï"
    ([regex]::Unescape("\u00C3\u00AB")) = "ë"
    ([regex]::Unescape("\u00C3\u0089")) = "É"
    ([regex]::Unescape("\u00C3\u0088")) = "È"
    ([regex]::Unescape("\u00C3\u0080")) = "À"
    ([regex]::Unescape("\u00C3\u0087")) = "Ç"
    ([regex]::Unescape("\u00E2\u20AC\u2122")) = "'"
    ([regex]::Unescape("\u00E2\u20AC\u0153")) = '"'
    ([regex]::Unescape("\u00E2\u20AC\u009D")) = '"'
    ([regex]::Unescape("\u00C2\u00A0")) = " "
}

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $original = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content.Replace($key, $replacements[$key])
    }
    
    $content = $content.Replace('""', '"')
    
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed encoding in $($file.Name)"
    }
}
Write-Host "Done fixing encodings."
