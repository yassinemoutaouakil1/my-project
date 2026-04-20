$path = (Get-Location).Path
$files = Get-ChildItem -Path $path -Exclude *.ps1, *.png, *.jpg, *.jpeg, *.gif, *.webp, *.ico, *.pdf, *.zip, *.mp4 -Recurse | Where-Object { !($_.PSIsContainer) }

foreach ($file in $files) {
    if ($file.FullName -match "\\.git\\" -or $file.FullName -match "\\images\\" -or $file.FullName -match "\\assets\\img\\" -or $file.FullName -match "\\package-lock.json") {
        continue
    }

    try {
        # Read as UTF8
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        
        if ([string]::IsNullOrEmpty($content)) { continue }
        $newContent = $content

        # Page Titles / Headings / Text with correct caps
        $newContent = $newContent -creplace 'MouTaouakil Transfers', 'Safia Transfers'
        $newContent = $newContent -creplace 'Moutaouakil Transfers', 'Safia Transfers'
        $newContent = $newContent -creplace 'moutaouakil transfers', 'safia transfers'

        # Logo span
        $newContent = $newContent -creplace 'MouTaouakil<span>Transfers</span>', 'Safia<span>Transfers</span>'
        $newContent = $newContent -creplace 'Moutaouakil<span>Transfers</span>', 'Safia<span>Transfers</span>'
        $newContent = $newContent -creplace 'moutaouakil<span>transfers</span>', 'safia<span>transfers</span>'

        # Titles
        $newContent = $newContent -creplace '\| MouTaouakil</title>', '| Safia Transfers</title>'
        $newContent = $newContent -creplace '\| Moutaouakil</title>', '| Safia Transfers</title>'

        # Contacts specific match
        $newContent = $newContent -creplace 'Contact <span class="text-shine-gold">MouTaouakil', 'Contact <span class="text-shine-gold">Safia Transfers'
        $newContent = $newContent -creplace 'Contact <span class="text-shine-gold">Moutaouakil', 'Contact <span class="text-shine-gold">Safia Transfers'

        # Email replacements
        $newContent = $newContent -creplace '@moutaouakiltransfers\.com', '@safiatransfers.com'
        
        # Text Domain 
        $newContent = $newContent -creplace 'moutaouakiltransfers\.com', 'safiatransfers.com'
        $newContent = $newContent -creplace 'moutaouakil-transfers\.com', 'safia-transfers.com'

        # Social media
        $newContent = $newContent -creplace '@moutaouakiltransfers', '@safiatransfers'
        $newContent = $newContent -creplace '/moutaouakiltransfers', '/safiatransfers'
        $newContent = $newContent -creplace 'MouTaouakilTransfers', 'SafiaTransfers'

        # Catch-all remaining strings that start with MouTaouakil 
        $newContent = $newContent -creplace 'MouTaouakil', 'Safia'
        $newContent = $newContent -creplace 'Moutaouakil', 'Safia'
        $newContent = $newContent -creplace 'moutaouakil', 'safia'

        if ($content -cne $newContent) {
            $utf8NoBom = New-Object System.Text.UTF8Encoding $False
            [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
            Write-Host "Updated $($file.Name)"
        }
    } catch {
        Write-Host "Failed processing: $($file.FullName)"
    }
}
Write-Host "Done"
