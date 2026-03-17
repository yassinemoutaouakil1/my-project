$ErrorActionPreference = "Stop"

function Merge-Schema {
    param([string]$Content, [string]$Phone)
    
    $mergedSchema = @"
  <!-- SEO Schema: Merged -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TransportationService"],
    "name": "MouTaouakil Transfers & Private Driver",
    "image": "https://moutaouakil-transfers.com/images/hero_luxury_van.png",
    "@id": "https://moutaouakil-transfers.com",
    "url": "https://moutaouakil-transfers.com",
    "telephone": "$Phone",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Mohammed V",
      "addressLocality": "Marrakech",
      "postalCode": "40000",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.6295,
      "longitude": -7.9811
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Marrakech" },
      { "@type": "City", "name": "Casablanca" },
      { "@type": "City", "name": "Fes" },
      { "@type": "City", "name": "Rabat" },
      { "@type": "City", "name": "Tangier" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    },
    "sameAs": [
      "https://www.facebook.com/moutaouakiltransfers",
      "https://www.instagram.com/moutaouakiltransfers"
    ]
  }
  </script>
"@

    if ($Content -match '(?s)<!-- SEO Schema: LocalBusiness.*?<script type="application/ld\+json">.*?"@type": "LocalBusiness".*?</script>') {
        $Content = $Content -replace '(?s)<!-- SEO Schema: LocalBusiness.*?<script type="application/ld\+json">.*?"@type": "LocalBusiness".*?</script>', $mergedSchema
    } elseif ($Content -match '(?s)<script type="application/ld\+json">.*?"@type": "LocalBusiness".*?</script>') {
        $Content = $Content -replace '(?s)<script type="application/ld\+json">.*?"@type": "LocalBusiness".*?</script>', $mergedSchema
    }

    $Content = $Content -replace '(?s)<!-- Schema Markup -->\s*<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "TransportationService".*?</script>', ''
    $Content = $Content -replace '(?s)<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "TransportationService".*?</script>', ''
    
    return $Content
}

$files = Get-ChildItem -Path . -Recurse -File -Filter "*.html" | Where-Object { 
  $_.FullName -notmatch '\\\.git\\' -and $_.FullName -notmatch '\\images\\' -and $_.FullName -notmatch '\\whatsapp-automation\\' -and $_.FullName -notmatch '\\review-automation\\' 
}

foreach ($file in $files) {
    if ($file.Name -eq "index_clean.html") { continue }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $originalContent = $content

    # 1. Fix duplicate data-i18n in footer:
    $content = $content -replace '(?i)<p data-i18n="footer-desc">\s*<span data-i18n="footer-desc">([\s\S]*?)</span>\s*</p>', '<p data-i18n="footer-desc">$1</p>'
    $content = $content -replace '(?i)<p>\s*<span data-i18n="footer-desc">([\s\S]*?)</span>\s*</p>', '<p data-i18n="footer-desc">$1</p>'

    $content = $content -replace '(?i)<span data-i18n="footer-available">\s*<span data-i18n="footer-available">([\s\S]*?)</span>\s*</span>', '<span data-i18n="footer-available">$1</span>'
    $content = $content -replace '(?i)<p>\s*<span data-i18n="footer-available">([\s\S]*?)</span>\s*</p>', '<p><span data-i18n="footer-available">$1</span></p>'

    # 2. Fix FAQ accordion
    # Add an answer <div class="faq-answer"> underneath
    if ($file.Name -eq "index.html") {
        $content = $content -replace '(?s)(<div class="faq-question"[^>]*>.*?data-i18n="faq-1-q".*?</div>)\s*(?!(<div class="faq-answer"))', "`$1`n          <div class=`"faq-answer`" style=`"display: none; padding: 0 15px 15px; color: var(--text-muted);`"><p data-i18n=`"faq-1-a`">You can easily book a driver via WhatsApp, phone, or our online form.</p></div>"
        $content = $content -replace '(?s)(<div class="faq-question"[^>]*>.*?data-i18n="faq-2-q".*?</div>)\s*(?!(<div class="faq-answer"))', "`$1`n          <div class=`"faq-answer`" style=`"display: none; padding: 0 15px 15px; color: var(--text-muted);`"><p data-i18n=`"faq-2-a`">Yes, all our prices are fixed and shared with you before booking.</p></div>"
        $content = $content -replace '(?s)(<div class="faq-question"[^>]*>.*?data-i18n="faq-3-q".*?</div>)\s*(?!(<div class="faq-answer"))', "`$1`n          <div class=`"faq-answer`" style=`"display: none; padding: 0 15px 15px; color: var(--text-muted);`"><p data-i18n=`"faq-3-a`">Absolutely. Our chauffeurs meet you right at the airport arrivals hall.</p></div>"
    }

    # 3. Merge duplicate JSON-LD schema blocks
    $phone = "+212600000000"
    if ($content -match '(?:telephone|whatsapp)[^>]*\+212\s*6\d{2}\s*\d{2}\s*\d{2}\s*\d{2}') {
        $phone = $matches[0] -replace '[^\+0-9]',''
    } elseif ($content -match '"telephone":\s*"(\+212[0-9]{8,15})"') {
        $phone = $matches[1]
    }
    $content = Merge-Schema -Content $content -Phone $phone

    # 4. Fix hreflang and canonical URL conflict
    $content = $content -replace '(?i)<link rel="canonical" href="https://moutaouakil-transfers\.com/(?:en/|fr/)?index\.html">', '<link rel="canonical" href="https://moutaouakil-transfers.com/">'
    
    $content = $content -replace '(?i)<link rel="alternate" hreflang="en" href="https://moutaouakil-transfers\.com/(?:en/|fr/)?index\.html">', '<link rel="alternate" hreflang="en" href="https://moutaouakil-transfers.com/">'
    $content = $content -replace '(?i)<link rel="alternate" hreflang="fr" href="https://moutaouakil-transfers\.com/(?:en/|fr/)?index\.html">', '<link rel="alternate" hreflang="fr" href="https://moutaouakil-transfers.com/fr/">'
    
    $content = $content -replace '(?i)href="https://moutaouakil-transfers\.com/(?:en/)?index\.html"', 'href="https://moutaouakil-transfers.com/"'
    $content = $content -replace '(?i)href="https://moutaouakil-transfers\.com/fr/index\.html"', 'href="https://moutaouakil-transfers.com/fr/"'
    
    $content = $content -replace '(?i)content="https://moutaouakil-transfers\.com/(?:en/|fr/)?index\.html"', 'content="https://moutaouakil-transfers.com/"'

    # 5. Fix scroll-to-top button
    $content = $content -replace '(?i)(<a[^>]*id="scroll-top"[^>]*>)\s*(?:UP|HAUT)\s*(</a>)', '$1`n    <i class="fas fa-arrow-up"></i>`n  $2'

    # 6. Fix wrong anchor on Multi-day Booking card
    $content = $content -replace '(?s)href="services\.html#driver-details"([^>]*>\s*<i class="fas fa-calendar-check"[\s\S]*?Multi-day Booking<\/h3>)', 'href="services.html#multi-details"$1'
    $content = $content -replace '(?i)href="services\.html#driver-details"([^>]*>\s*<i class="fas fa-calendar-check"></i>\s*<h3[^>]*data-i18n="service-multi-t"([^>]*)>)', 'href="services.html#multi-details"$1'

    if ($originalContent -cne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($False)))
    }
}

# Update JS for FAQ 
$jsFile = "script.js"
if (Test-Path $jsFile) {
    $jsContent = [System.IO.File]::ReadAllText($jsFile)
    if ($jsContent -notmatch "const answer = button\.nextElementSibling;") {
        $jsBlock = @"

// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('i');
            if (answer && answer.classList.contains('faq-answer')) {
                if (answer.style.display === 'none' || !answer.style.display || getComputedStyle(answer).display === 'none') {
                    answer.style.display = 'block';
                    if (icon) {
                        icon.classList.remove('fa-chevron-right');
                        icon.classList.add('fa-chevron-down');
                    }
                } else {
                    answer.style.display = 'none';
                    if (icon) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-right');
                    }
                }
            }
        });
    });
});
"@
        [System.IO.File]::AppendAllText($jsFile, $jsBlock, (New-Object System.Text.UTF8Encoding($False)))
    }
}
Write-Output "Done"
