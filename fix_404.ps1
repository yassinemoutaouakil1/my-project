$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File | Where-Object { $_.FullName -notmatch 'node_modules|\.git|review-automation' }

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    $prefix = ""
    if ($file.DirectoryName -match '(\\|\/)(en|fr)$') {
        $prefix = "../"
    } else {
        $prefix = ""
    }
    
    # Remove old `<script src="script.js" defer></script>` or `<script src="../script.js" defer></script>`
    $content = $content -replace '(?s)<script src="\.\.?/script\.js"[^>]*>.*?</script>', ''
    $content = $content -replace '(?s)<script src="script\.js"[^>]*>.*?</script>', ''

    # Wait, earlier I might have blindly deleted scripts! 
    # Let's ensure js is referenced perfectly everywhere.
    # What if I just rely on injecting at the end of the body? I'll do this carefully.
    
    # Actually, looking at the previous script, let's just fix the issues directly.
    $content = $content -replace 'renault_2_hd\.webp', 'renault_2_hd.png'
    $content = $content -replace 'renault_7\.webp', 'renault_7.jpg'
    $content = $content -replace 'renault_6\.webp', 'renault_6.jpg'
    $content = $content -replace 'vclass_8\.webp', 'vclass_8.jpg'
    $content = $content -replace 'vclass_3\.webp', 'vclass_3.jpg'
    $content = $content -replace 'ford_2\.webp', 'ford_2.jpg'
    $content = $content -replace 'hero_luxury_van\.webp', 'hero_luxury_van.png'
    
    # Script fixes
    $content = $content -replace 'src="../script\.js"', 'src="../js/script.js"'
    $content = $content -replace 'src="script\.js"', 'src="js/script.js"'
    # Note: earlier I renamed script.js to js/translations.js, so we need to add translations.js if it's missing!

    # A simpler way to enforce correct scripts:
    # First, make sure every file has both js/translations.js and js/script.js just before </body>
    if ($content -notmatch 'translations\.js') {
        $scripts = "<script src=`"${prefix}js/translations.js`" defer></script>`r`n  <script src=`"${prefix}js/script.js`" defer></script>`r`n</body>"
        $content = $content -replace '</body>', $scripts
    }
    
    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Fixed $($file.FullName)"
    }
}
