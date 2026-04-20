$ErrorActionPreference = "Stop"

$f = "fleet.html"
$content = [System.IO.File]::ReadAllText($f)
$originalContent = $content

$content = $content -replace '<span data-i18n="fleet-passengers">Up to 7\s+Passengers</span>', '<span data-i18n="fleet-passengers-7">Up to 7 Passengers</span>'
$content = $content -replace '<span data-i18n="fleet-passengers">Up to 8\s+Passengers</span>', '<span data-i18n="fleet-passengers-8">Up to 8 Passengers</span>'
$content = $content -replace '<span data-i18n="fleet-luggage">7 Large Bags</span>', '<span data-i18n="fleet-luggage-7">7 Large Bags</span>'
$content = $content -replace '<span data-i18n="fleet-luggage">8 Large Bags</span>', '<span data-i18n="fleet-luggage-8">8 Large Bags</span>'
$content = $content -replace '<span data-i18n="fleet-ac">Double A/C</span>', '<span data-i18n="fleet-ac-double">Double A/C</span>'
$content = $content -replace '<span data-i18n="fleet-ac">Fully Air Conditioned</span>', '<span data-i18n="fleet-ac-full">Fully Air Conditioned</span>'
$content = $content -replace '<span data-i18n="fleet-ac">Climate Control</span>', '<span data-i18n="fleet-ac">Climate Control</span>'

if ($originalContent -cne $content) {
    [System.IO.File]::WriteAllText($f, $content, (New-Object System.Text.UTF8Encoding($False)))
}

$s = "script.js"
$sContent = [System.IO.File]::ReadAllText($s)
$sContentOriginal = $sContent

$sContent = $sContent -replace '"fleet-passengers": "Passengers"', '"fleet-passengers-7": "Up to 7 Passengers",
        "fleet-passengers-8": "Up to 8 Passengers"'
$sContent = $sContent -replace '"fleet-luggage": "Luggage Space"', '"fleet-luggage-7": "7 Large Bags",
        "fleet-luggage-8": "8 Large Bags"'
$sContent = $sContent -replace '"fleet-ac": "Air Conditioning"', '"fleet-ac": "Climate Control",
        "fleet-ac-double": "Double A/C",
        "fleet-ac-full": "Fully Air Conditioned"'


$sContent = $sContent -replace '"fleet-passengers": "Passagers"', '"fleet-passengers-7": "Jusqu''Ã  7 Passagers",
        "fleet-passengers-8": "Jusqu''Ã  8 Passagers"'
$sContent = $sContent -replace '"fleet-luggage": "Espace Bagages"', '"fleet-luggage-7": "7 Grands Bagages",
        "fleet-luggage-8": "8 Grands Bagages"'
$sContent = $sContent -replace '"fleet-ac": "Climatisation"', '"fleet-ac": "Climatisation RÃ©versible",
        "fleet-ac-double": "Double Climatisation",
        "fleet-ac-full": "EntiÃ¨rement ClimatisÃ©"'

if ($sContentOriginal -cne $sContent) {
    [System.IO.File]::WriteAllText($s, $sContent, (New-Object System.Text.UTF8Encoding($False)))
}
Write-Output "Done"
