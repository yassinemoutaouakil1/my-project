$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|google647d' }

foreach ($file in $htmlFiles) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content $file.FullName -Raw

    # English flag
    $content = $content -replace '(<img src="https://flagcdn\.com/w20/gb\.png"\s+width="20")(\s+alt="English">)', '$1 height="15"$2'
    
    # French flag
    $content = $content -replace '(<img src="https://flagcdn\.com/w20/fr\.png"\s+width="20")(\s+alt="Français">)', '$1 height="15"$2'

    # Any img with .album-slide lacking width/height
    $content = [regex]::Replace($content, '(<img[^>]*class="album-slide[^>]*loading="lazy")>', {
        param($m)
        $tag = $m.Value
        if ($tag -notmatch 'width=') {
            return $tag.Substring(0, $tag.Length - 1) + ' width="800" height="600">'
        }
        return $tag
    })

    # Any img destination-card lacking width/height (from index.html/destinations)
    $content = [regex]::Replace($content, '(<img[^>]*onerror="[^"]*"[^>]*)>', {
        param($m)
        $tag = $m.Value
        if ($tag -notmatch 'width=') {
            return $tag.Substring(0, $tag.Length - 1) + ' width="600" height="400">'
        }
        return $tag
    })

    # Any img with src="images/*" or "../images/*" lacking width/height
    $content = [regex]::Replace($content, '(<img\s+[^>]*src="(?:\.\./)?images/[^"]*"[^>]*)>', {
        param($m)
        $tag = $m.Value
        if ($tag -notmatch 'width=') {
            # Let's add width="600" height="400" blindly for these images as they are mostly placeholders/hero/etc where css resizes them anyway
            return $tag.Substring(0, $tag.Length - 1) + ' width="600" height="400">'
        }
        return $tag
    })

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Done"
