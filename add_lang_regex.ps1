$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path . -File -Filter "*.html" | Where-Object { 
    $_.FullName -notmatch '\\\.git\\' -and $_.Name -ne "index_clean.html"
}

$newSwitcherTemplate = @"
        <div class="header-lang">
            <button onclick="setLanguage('en')" id="lang-en" class="header-lang-btn">EN</button>
            <span class="divider">|</span>
            <button onclick="setLanguage('fr')" id="lang-fr" class="header-lang-btn">FR</button>
        </div>
"@

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $originalContent = $content

    # If it already has header-lang, skip
    if ($content -match 'class="header-lang"') {
        continue
    }

    # Match the book-btn-container open tag and then the inner link
    # We'll replace '<div class="book-btn-container">\s*<a' with `<div class="book-btn-container" style="display: flex; align-items: center; gap: 15px;">\n$newSwitcherTemplate\n        <a`
    $content = $content -replace '(?i)(<div class="book-btn-container">)\s*(<a\s+[^>]*class="btn btn-gold"[^>]*>)', "<div class=`"book-btn-container`" style=`"display: flex; align-items: center; gap: 15px;`">`n$newSwitcherTemplate`n        `$2"

    if ($originalContent -cne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($False)))
        Write-Output "Updated $($file.Name)"
    }
}
Write-Output "Done"
