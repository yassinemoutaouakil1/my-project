$cssFilePath = ".\style.css"
$css = Get-Content $cssFilePath -Raw

# This regex finds all basic class names in the CSS
$matches = [regex]::Matches($css, '\.([a-zA-Z0-9_-]+)')
$allClasses = @()
foreach ($m in $matches) {
    if ($m.Groups[1].Value -notin @("png", "jpg", "jpeg", "webp", "html", "js", "css")) {
        $allClasses += $m.Groups[1].Value
    }
}
$allClasses = $allClasses | Select-Object -Unique

Write-Host "Found $($allClasses.Count) distinct classes in CSS."

$htmlJsFiles = Get-ChildItem -Path . -Include *.html, *.js -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|\.git' }

$unusedClasses = @()
foreach ($class in $allClasses) {
    $found = $false
    # Ignore pseudo-classes and normal css values
    if ($class -match '^(active|hover|focus|visited|before|after|first-child|last-child|nth-child|root)$') { continue }
    
    foreach ($file in $htmlJsFiles) {
        $content = Get-Content $file.FullName -Raw
        if ($content -match "\b$class\b") {
            $found = $true
            break
        }
    }
    
    if (-not $found) {
        $unusedClasses += $class
    }
}

Write-Host "Unused classes: $($unusedClasses.Count)"
foreach ($u in $unusedClasses) { Write-Host $u }
