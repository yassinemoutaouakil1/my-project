$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|\.git|review-automation' }

# Build a map of basename without extension -> full filename
$imageFiles = Get-ChildItem -Path .\images -File
$imageMap = @{}
foreach ($img in $imageFiles) {
    $basename = $img.BaseName
    $imageMap[$basename] = $img.Name
}

# Add some specific mappings that differ by more than just extension
$imageMap['rabat'] = 'rabat_hassan_tower.jpg'
$imageMap['tangier'] = 'tangier_view.jpg'
$imageMap['agadir'] = 'agadir_beach.jpg'

foreach ($file in $htmlFiles) {
    if ($file.DirectoryName -match "images$") { continue }
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # We want to replace anything like src="images/XXX.webp" or src="../images/XXX.webp"
    # Wait, the regex needs to capture the path prefix and the basename
    $content = [regex]::Replace($content, 'src="(\.\./)?images/([^.]+)\.webp"', {
        param($m)
        $prefix = $m.Groups[1].Value
        $basename = $m.Groups[2].Value
        
        if ($imageMap.ContainsKey($basename)) {
            $realName = $imageMap[$basename]
            return "src=`"$prefix`images/$realName`""
        } else {
            Write-Host "Warning: Could not find replacement for $basename in $($file.Name)"
            return $m.Value
        }
    })
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Fixed $($file.FullName)"
    }
}
Write-Host "Done fixing WebP 404s"
