const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            if (fs.statSync(dirFile).isDirectory()) {
                if (file !== '.git' && file !== 'images' && file !== 'review-automation' && file !== 'whatsapp-automation') {
                    filelist = walkSync(dirFile, filelist);
                }
            } else if (file.endsWith('.html')) {
                filelist.push(dirFile);
            }
        } catch (err) { }
    });
    return filelist;
};

const htmlFiles = walkSync('.');

for (let file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // 1. Fix duplicate data-i18n in footer:
    content = content.replace(/<p data-i18n="footer-desc">\s*<span data-i18n="footer-desc">([\s\S]*?)<\/span>\s*<\/p>/gi, '<p data-i18n="footer-desc">$1</p>');
    content = content.replace(/<span data-i18n="footer-available">\s*<span data-i18n="footer-available">([\s\S]*?)<\/span>\s*<\/span>/gi, '<span data-i18n="footer-available">$1</span>');

    // 2. Fix FAQ accordion (add faq-answer under faq-question if not exists)
    // Only for faq-question that don't already have an answer right below them.
    // Actually, let's just use replace and add an empty answer div where there is none.
    // In index.html:
    /*
          <div class="faq-item" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div class="faq-question"
              style="padding: 15px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 500;" data-i18n="faq-1-q">How can I book a private driver?</span>
              <i class="fas fa-chevron-right text-gold"></i>
            </div>
          </div>
    */
    // Let's match `<div class="faq-question"[^>]*>...</div>\s*</div>` and inject the answer before the closing `</div>`.
    // Or simply replace the question block.
    content = content.replace(/(<div class="faq-question"[^>]*>[\s\S]*?data-i18n="faq-1-q"[\s\S]*?<\/div>)\s*(?!(<div class="faq-answer"))/g, `$1\n          <div class="faq-answer" style="display: none; padding: 0 15px 15px; color: var(--text-muted);"><p data-i18n="faq-1-a">You can easily book a driver via WhatsApp, phone, or our online form.</p></div>\n`);
    content = content.replace(/(<div class="faq-question"[^>]*>[\s\S]*?data-i18n="faq-2-q"[\s\S]*?<\/div>)\s*(?!(<div class="faq-answer"))/g, `$1\n          <div class="faq-answer" style="display: none; padding: 0 15px 15px; color: var(--text-muted);"><p data-i18n="faq-2-a">Yes, all our prices are fixed and shared with you before booking.</p></div>\n`);
    content = content.replace(/(<div class="faq-question"[^>]*>[\s\S]*?data-i18n="faq-3-q"[\s\S]*?<\/div>)\s*(?!(<div class="faq-answer"))/g, `$1\n          <div class="faq-answer" style="display: none; padding: 0 15px 15px; color: var(--text-muted);"><p data-i18n="faq-3-a">Absolutely. Our chauffeurs meet you right at the airport arrivals hall.</p></div>\n`);

    // 3. Merge duplicate JSON-LD schema blocks
    // Find LocalBusiness schema
    let phoneMatch = content.match(/"telephone":\s*"\+212[0-9\s-]+"/);
    let phone = phoneMatch ? phoneMatch[0].split('"')[3] : "+212663494405";

    // Here we'll do a string replacement for the entire old schema
    const mergedSchema = `<!-- SEO Schema: Merged -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TransportationService"],
    "name": "Safia Transfers & Private Driver",
    "image": "https://safia-transfers.com/images/hero_luxury_van.png",
    "@id": "https://safia-transfers.com",
    "url": "https://safia-transfers.com",
    "telephone": "${phone}",
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
      "https://www.facebook.com/safiatransfers",
      "https://www.instagram.com/safiatransfers"
    ]
  }
  </script>`;

    // Instead of complex logic, just replace the first script block containing LocalBusiness, and then strip out the TransportationService one.
    const hasLocalBusiness = content.includes('"@type": "LocalBusiness"');
    if (hasLocalBusiness) {
        // Replace the first block (LocalBusiness) with the merged block
        // Using a regex carefully
        content = content.replace(/<!-- SEO Schema: LocalBusiness.*?\+ Review -->\s*<script type="application\/ld\+json">[\s\S]*?"@type": "LocalBusiness"[\s\S]*?<\/script>/, mergedSchema);
        // Alternatively, if it didn't match exactly the comment:
        content = content.replace(/<script type="application\/ld\+json">\s*{\s*"@context": "https:\/\/schema\.org",\s*"@type": "LocalBusiness"[\s\S]*?<\/script>/, mergedSchema);

        // Delete the TransportationService block completely
        content = content.replace(/<!-- Schema Markup -->\s*<script type="application\/ld\+json">\s*{\s*"@context": "https:\/\/schema\.org",\s*"@type": "TransportationService"[\s\S]*?<\/script>/, '');
        content = content.replace(/<script type="application\/ld\+json">\s*{\s*"@context": "https:\/\/schema\.org",\s*"@type": "TransportationService"[\s\S]*?<\/script>/, '');
    }

    // 4. Fix hreflang and canonical URL conflict
    content = content.replace(/<link rel="canonical" href="https:\/\/safia-transfers\.com\/(?:en\/|fr\/)?index\.html">/gi, '<link rel="canonical" href="https://safia-transfers.com/">');

    // Note: For other pages, we can just replace index.html to / for the root.
    content = content.replace(/href="https:\/\/safia-transfers\.com\/(?:en\/)?index\.html"/gi, 'href="https://safia-transfers.com/"');
    content = content.replace(/href="https:\/\/safia-transfers\.com\/fr\/index\.html"/gi, 'href="https://safia-transfers.com/fr/"');

    content = content.replace(/content="https:\/\/safia-transfers\.com\/(?:en\/|fr\/)?index\.html"/gi, 'content="https://safia-transfers.com/"');

    // Let's make sure the specific `<head>` lines requested are perfectly matched. specially for index.html.
    if (file === 'index.html' || file === 'index_clean.html' || file === '.\\index.html') {
        content = content.replace(/<link rel="alternate" hreflang="en" href="https:\/\/safia-transfers\.com\/index\.html">/g, '<link rel="alternate" hreflang="en" href="https://safia-transfers.com/">');
        content = content.replace(/<link rel="alternate" hreflang="fr" href="https:\/\/safia-transfers\.com\/index\.html">/g, '<link rel="alternate" hreflang="fr" href="https://safia-transfers.com/fr/">');
    }

    // 5. Fix scroll-to-top button
    content = content.replace(/(<a[^>]*id="scroll-top"[^>]*>)\s*(?:UP|HAUT)\s*(<\/a>)/ig, '$1\n    <i class="fas fa-arrow-up"></i>\n  $2');

    // 6. Fix wrong anchor on Multi-day Booking card
    content = content.replace(/href="services\.html#driver-details"([^>]*>\s*<i class="fas fa-calendar-check"><\/i>\s*<h3[^>]*data-i18n="service-multi-t")/gi, 'href="services.html#multi-details"$1');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
    }
}

// Add script logic to script.js
let scriptContent = fs.readFileSync('script.js', 'utf8');
if (!scriptContent.includes('document.querySelectorAll(\'.faq-question\').forEach')) {
    scriptContent += `\n
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
`;
    fs.writeFileSync('script.js', scriptContent, 'utf8');
}
console.log("Done");


