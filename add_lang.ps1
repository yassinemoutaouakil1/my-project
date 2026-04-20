$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path . -File -Filter "*.html" | Where-Object { 
    $_.FullName -notmatch '\\\.git\\' -and $_.Name -ne "index_clean.html"
}

$oldHTML = '(?i)<div class="book-btn-container">\s*<a href="booking\.html" class="btn btn-gold"><span data-i18n="btn-book-now">Book Now</span></a>\s*</div>'
$newHTML = @"
      <div class="book-btn-container" style="display: flex; align-items: center; gap: 15px;">
        <div class="header-lang">
            <button onclick="setLanguage('en')" id="lang-en" class="header-lang-btn">EN</button>
            <span class="divider">|</span>
            <button onclick="setLanguage('fr')" id="lang-fr" class="header-lang-btn">FR</button>
        </div>
        <a href="booking.html" class="btn btn-gold"><span data-i18n="btn-book-now">Book Now</span></a>
      </div>
"@

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $originalContent = $content

    $content = $content -replace $oldHTML, $newHTML

    if ($originalContent -cne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($False)))
        Write-Output "Updated $($file.Name)"
    }
}
Write-Output "Done"
