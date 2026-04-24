$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|\.git' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Check images, scripts, links
    $matches = [regex]::Matches($content, '(href|src)=["'']([^"'']+)["'']')
    foreach ($match in $matches) {
        $path = $match.Groups[2].Value
        # Ignoring external links
        if ($path -match '^http|mailto:|tel:|#') { continue }
        
        # Combine relative path
        $absolutePath = Join-Path -Path $file.DirectoryName -ChildPath $path
        
        # Some are like src="js/script.js" when the page is in en/ ... wait! 
        # If the page is in en/, the path js/script.js points to en/js/script.js!
        
        if (-not (Test-Path $absolutePath)) {
            Write-Host "404 Error in $($file.FullName) -> $path"
        }
    }
}
Write-Host "Done scanning for 404s"
