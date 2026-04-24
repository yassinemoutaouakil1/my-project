$htmlFiles = Get-ChildItem -Path . -Filter *.html -Recurse -File

$totalIssues = 0
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches($content, '<img[^>]+>')
    
    foreach ($match in $matches) {
        $imgTag = $match.Value
        if ($imgTag -notmatch '(?i)width\s*=\s*["'']?\d+["'']?') {
            Write-Host "File: $($file.Name) - Missing width: $imgTag"
            $totalIssues++
        }
        elseif ($imgTag -notmatch '(?i)height\s*=\s*["'']?\d+["'']?') {
            Write-Host "File: $($file.Name) - Missing height: $imgTag"
            $totalIssues++
        }
    }
}
Write-Host "Total missing: $totalIssues"
