$htmlFiles = Get-ChildItem -Path . -Recurse -Filter *.html

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $original = $content
    
    # 1. Add Language Switcher if missing
    if ($content -notmatch 'class="lang-switcher"') {
        $switcher = @"
    <!-- Language Switcher -->
    <div class="lang-switcher">
        <div class="lang-btn active" data-lang="en" onclick="setLanguage('en')">
            <img src="https://flagcdn.com/w20/gb.png" width="20" height="15" alt="English"> EN
        </div>
        <div class="lang-btn" data-lang="fr" onclick="setLanguage('fr')">
            <img src="https://flagcdn.com/w20/fr.png" width="20" height="15" alt="Français"> FR
        </div>
    </div>
"@
        if ($content -match '<canvas id="bg-canvas"></canvas>') {
            $content = $content -replace '(<canvas id="bg-canvas"></canvas>)', "`$1`n$switcher"
        } else {
            $content = $content -replace '(<body[^>]*>)', "`$1`n$switcher"
        }
    }

    # 2. Defer Scripts (simple replacement)
    $content = $content -replace '<script src="([^"]+)"(?!.*defer)[^>]*>', '<script src="$1" defer>'
    $content = $content -replace '<script src="([^"]+)" defer defer>', '<script src="$1" defer>'

    # 3. Font swap
    $content = $content -replace 'family=([^"&]+)(?<!display=swap)"', 'family=$1&display=swap"'
    $content = $content -replace '&display=swap&display=swap', '&display=swap'

    # 4. Images: add loading="lazy", width="600", height="400"
    $parts = $content -split '<img '
    if ($parts.Length -gt 1) {
        $newContent = $parts[0]
        for ($i = 1; $i -lt $parts.Length; $i++) {
            $part = $parts[$i]
            $tagEndPos = $part.IndexOf('>')
            if ($tagEndPos -ge 0) {
                $attrs = $part.Substring(0, $tagEndPos)
                $rest = $part.Substring($tagEndPos)
                
                if ($attrs -notmatch 'loading=') {
                    $attrs += ' loading="lazy"'
                }
                if ($attrs -match 'hero' -or $attrs -match 'flagcdn' -or $attrs -match 'logo') {
                    $attrs = $attrs -replace '\s*loading="lazy"', ''
                }
                
                if ($attrs -notmatch 'width=') {
                    $attrs += ' width="600"'
                }
                if ($attrs -notmatch 'height=') {
                    $attrs += ' height="400"'
                }
                
                if ($attrs -match 'flagcdn') {
                    $attrs = $attrs -replace 'width="600"', 'width="20"'
                    $attrs = $attrs -replace 'height="400"', 'height="15"'
                }
                
                $newContent += '<img ' + $attrs + $rest
            } else {
                $newContent += '<img ' + $part
            }
        }
        $content = $newContent
    }
    
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Done fixing HTML files."
