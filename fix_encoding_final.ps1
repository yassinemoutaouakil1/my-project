# Fix encoding systematically using byte patterns
$targetDir = "c:\Users\pc\.gemini\antigravity\scratch\safia-transfers"

# We define the corrupted sequences as they appear in a UTF-8 file.
# For example, Ã© (interpreted as UTF-8) is C3 83 C2 A9.
# We want to replace it with é (which is C3 A9).

function Fix-FileEncoding($filePath) {
    try {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $content = [System.Text.Encoding]::UTF8.GetString($bytes)
        
        $replacements = @{
            "Ã©" = "é";
            "Ã\u00a0" = "à";
            "Ã¢" = "â";
            "Ã¹" = "ù";
            "Ãª" = "ê";
            "Ã¨" = "è";
            "Ã®" = "î";
            "Ã´" = "ô";
            "Ã»" = "û";
            "Ã§" = "ç";
            "Ã‰" = "É";
            "Ã€" = "À";
            "Â©" = "©";
            "Â«" = "«";
            "Â»" = "»";
            "â€™" = "'";
            "â€œ" = "“";
            "â€" = "”";
            "Ã«" = "ë";
            "SaA_ss" = "Saïss" # Special case for Fes airport
        }
        
        $newContent = $content
        foreach ($key in $replacements.Keys) {
            $newContent = $newContent.Replace($key, $replacements[$key])
        }
        
        if ($content -ne $newContent) {
            $newBytes = [System.Text.Encoding]::UTF8.GetBytes($newContent)
            [System.IO.File]::WriteAllBytes($filePath, $newBytes)
            Write-Host "Fixed: $filePath"
        }
    } catch {
        Write-Warning "Error processing $filePath : $($_.Exception.Message)"
    }
}

$files = Get-ChildItem -Path $targetDir -Recurse -File -Include *.html, *.js, *.css, *.json
foreach ($f in $files) {
    Fix-FileEncoding $f.FullName
}
