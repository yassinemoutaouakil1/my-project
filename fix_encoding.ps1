$files = Get-ChildItem -Path . -Recurse -Include *.html,*.js

$replacements = @{
    "Ã©" = "é"
    "Ã¨" = "è"
    "Ã " = "à"
    "Ã¢" = "â"
    "Ãª" = "ê"
    "Ã®" = "î"
    "Ã´" = "ô"
    "Ã»" = "û"
    "Ã§" = "ç"
    "Ã¯" = "ï"
    "Ã«" = "ë"
    "Ã‰" = "É"
    "Ãˆ" = "È"
    "Ã€" = "À"
    "Ã‡" = "Ç"
    "â€™" = "'"
    "â€œ" = '"'
    "â€" = '"'
    "Â" = ""
}

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $original = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content.Replace($key, $replacements[$key])
    }
    
    # Fix the double quotes issue where â€œ was replaced but we need standard quotes
    $content = $content.Replace('""', '"')
    
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed encoding in $($file.Name)"
    }
}
Write-Host "Done fixing encodings."
