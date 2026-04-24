$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|\.git|review-automation' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Determine the correct prefix based on file location
    $prefix = ""
    if ($file.DirectoryName -match '(\\|\/)(en|fr)$') {
        $prefix = "../"
    } else {
        $prefix = ""
    }
    
    # Standardize script paths
    # Match any script src to js/script.js or translations.js and replace with correct prefix
    $content = $content -replace 'src="(\.\./)?js/translations\.js"', "src=`"${prefix}js/translations.js`""
    $content = $content -replace 'src="(\.\./)?js/script\.js"', "src=`"${prefix}js/script.js`""
    
    # Also handle some edge cases where it might be missing the js/ folder in the path if I missed it before
    # But usually it's already there from previous steps. 
    # Let's check for src="../script.js" or "script.js" and fix them too.
    $content = $content -replace 'src="(\.\./)?script\.js"', "src=`"${prefix}js/script.js`""

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Fixed scripts in $($file.FullName)"
    }
}
Write-Host "Done fixing script paths"
