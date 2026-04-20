$scriptContent = Get-Content "script.js"

$enKeys = @{}
$frKeys = @{}

$currentLang = ""
foreach ($line in $scriptContent) {
    if ($line -match '^(\s*)"(en|fr)":\s*\{') {
        $currentLang = $matches[2]
    }
    
    if ($line -match '^\s*"([^"]+)":') {
        $key = $matches[1]
        if ($currentLang -eq "en") {
            $enKeys[$key] = $true
        } elseif ($currentLang -eq "fr") {
            $frKeys[$key] = $true
        }
    }
}

$htmlFiles = Get-ChildItem -Filter "*.html"
$missingInEn = @{}
$missingInFr = @{}

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName
    foreach ($line in $content) {
        $matches = [regex]::Matches($line, 'data-i18n="([^"]+)"')
        foreach ($m in $matches) {
            $key = $m.Groups[1].Value
            if (-not $enKeys.ContainsKey($key)) {
                $missingInEn["$key (in $($file.Name))"] = $true
            }
            if (-not $frKeys.ContainsKey($key)) {
                $missingInFr["$key (in $($file.Name))"] = $true
            }
        }
    }
}

Write-Host "Missing in EN:"
$missingInEn.Keys | ForEach-Object { Write-Host $_ }

Write-Host "`nMissing in FR:"
$missingInFr.Keys | ForEach-Object { Write-Host $_ }
