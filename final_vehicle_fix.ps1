$ErrorActionPreference = "Stop"

# Update vehicle-renault-trafic.html
$ren = "vehicle-renault-trafic.html"
$c = [System.IO.File]::ReadAllText($ren)
$c = $c -replace '<p class="animate-up delay-1">Perfect for Groups & Families</p>', '<p class="animate-up delay-1" data-i18n="ren-sub">Perfect for Groups & Families</p>'
$c = $c -replace '<h2>Reliable Group Transport</h2>', '<h2 data-i18n="ren-title">Reliable Group Transport</h2>'
$c = $c -replace '<p class="lead-text">The Renault Trafic combines practicality with comfort\. It''s the smart choice\s*for larger groups looking for reliable transport across Morocco without breaking the bank\.</p>', '<p class="lead-text" data-i18n="ren-desc-full">The Renault Trafic combines practicality with comfort. It''s the smart choice for larger groups looking for reliable transport across Morocco without breaking the bank.</p>'

$c = $c -replace '<span>9 Passengers</span>', '<span data-i18n="fleet-passengers-9">9 Passengers</span>'
$c = $c -replace '<span>Big Luggage Space</span>', '<span data-i18n="fleet-luggage-big">Big Luggage Space</span>'
$c = $c -replace '<span>A/C System</span>', '<span data-i18n="fleet-ac-sys">A/C System</span>'
$c = $c -replace '<span>Comfort Seats</span>', '<span data-i18n="fleet-seats">Comfort Seats</span>'

$c = $c -replace '<h3>Key Features</h3>', '<h3 data-i18n="key-features">Key Features</h3>'
$c = $c -replace '<strong>Group Friendly:</strong> Accommodates\s*up to 9 people securely\.', '<strong data-i18n="ren-f1-t">Group Friendly:</strong> <span data-i18n="ren-f1-p">Accommodates up to 9 people securely.</span>'
$c = $c -replace '<strong>Versatile:</strong> Great for both\s*city transfers and excursions\.', '<strong data-i18n="ren-f2-t">Versatile:</strong> <span data-i18n="ren-f2-p">Great for both city transfers and excursions.</span>'
$c = $c -replace '<strong>Budget Friendly:</strong> Excellent\s*value for money\.', '<strong data-i18n="ren-f3-t">Budget Friendly:</strong> <span data-i18n="ren-f3-p">Excellent value for money.</span>'
$c = $c -replace '<strong>Safe:</strong> Regularly maintained\s*and inspected\.', '<strong data-i18n="ren-f4-t">Safe:</strong> <span data-i18n="ren-f4-p">Regularly maintained and inspected.</span>'

[System.IO.File]::WriteAllText($ren, $c, (New-Object System.Text.UTF8Encoding($False)))

# Update script.js with new keys
$s = "script.js"
$c = [System.IO.File]::ReadAllText($s)

$enNew = @"
        "vclass-title": "Premium VIP Chauffeur Service",
        "vclass-desc-full": "Travel in style, comfort, and absolute privacy. The Mercedes-Benz V-Class is the preferred choice for VIPs, executives, and families who refuse to compromise on quality.",
        "vclass-sub": "The Definition of Luxury Travel",
        "fleet-ac-dual": "Dual Zone A/C",
        "fleet-water": "Complimentary Water",
        "fleet-charging": "Charging Ports",
        "perfect-for": "Perfect For:",
        "pf-air-t": "Airport Transfers:",
        "pf-air-p": "VIP meet & greet service.",
        "pf-bus-t": "Business Travel:",
        "pf-bus-p": "Mobile office environment.",
        "pf-long-t": "Long Distance Touring:",
        "pf-long-p": "Maximum comfort for city-to-city trips.",
        "pf-event-t": "Events:",
        "pf-event-p": "Weddings and special occasions.",
        "btn-book-vehicle": "Book This Vehicle",
        "btn-chat-now": "Chat Now",
        "ford-sub": "Spacious. Modern. Reliable.",
        "ford-title": "Superior Group Comfort",
        "ford-desc-full": "The Ford Tourneo Custom sets the standard for group travel. With its generous interior space and flexible seating, it offers a first-class experience for families and larger groups.",
        "fleet-ac-gen": "Air Conditioned",
        "why-choose": "Why Choose This Vehicle?",
        "ford-f1-t": "Spacious Cabin:",
        "ford-f1-p": "Ample legroom for everyone.",
        "ford-f2-t": "Luggage Capacity:",
        "ford-f2-p": "Ideal for airport transfers with lots of bags.",
        "ford-f3-t": "Modern Safety:",
        "ford-f3-p": "Equipped with latest safety features.",
        "ford-f4-t": "Smooth Ride:",
        "ford-f4-p": "Advanced suspension for long journeys.",
        "ren-sub": "Perfect for Groups & Families",
        "ren-title": "Reliable Group Transport",
        "ren-desc-full": "The Renault Trafic combines practicality with comfort. It's the smart choice for larger groups looking for reliable transport across Morocco without breaking the bank.",
        "fleet-passengers-9": "9 Passengers",
        "fleet-luggage-big": "Big Luggage Space",
        "fleet-ac-sys": "A/C System",
        "key-features": "Key Features",
        "ren-f1-t": "Group Friendly:",
        "ren-f1-p": "Accommodates up to 9 people securely.",
        "ren-f2-t": "Versatile:",
        "ren-f2-p": "Great for both city transfers and excursions.",
        "ren-f3-t": "Budget Friendly:",
        "ren-f3-p": "Excellent value for money.",
        "ren-f4-t": "Safe:",
        "ren-f4-p": "Regularly maintained and inspected.",
"@

$frNew = @"
        "vclass-title": "Service Chauffeur VIP Premium",
        "vclass-desc-full": "Voyagez avec style, confort et en toute intimité. Le Mercedes-Benz Classe V est le choix de prédilection des VIP, des cadres et des familles qui refusent tout compromis sur la qualité.",
        "vclass-sub": "La Définition du Voyage de Luxe",
        "fleet-ac-dual": "Climatisation Bi-Zone",
        "fleet-water": "Eau Minérale Gratuite",
        "fleet-charging": "Ports de Recharge",
        "perfect-for": "Parfait Pour :",
        "pf-air-t": "Transferts Aéroport :",
        "pf-air-p": "Service d'accueil VIP.",
        "pf-bus-t": "Voyages d'Affaires :",
        "pf-bus-p": "Environnement de bureau mobile.",
        "pf-long-t": "Tourisme Longue Distance :",
        "pf-long-p": "Confort maximal pour les voyages interurbains.",
        "pf-event-t": "Événements :",
        "pf-event-p": "Mariages et grandes occasions.",
        "btn-book-vehicle": "Réserver ce Véhicule",
        "btn-chat-now": "Discuter Maintenant",
        "ford-sub": "Spacieux. Moderne. Fiable.",
        "ford-title": "Confort Supérieur en Groupe",
        "ford-desc-full": "Le Ford Tourneo Custom définit les normes du voyage en groupe. Avec son espace intérieur généreux et ses sièges modulables, il offre une expérience de première classe aux familles et aux grands groupes.",
        "fleet-ac-gen": "Climatisé",
        "why-choose": "Pourquoi Choisir ce Véhicule ?",
        "ford-f1-t": "Cabine Spacieuse :",
        "ford-f1-p": "Beaucoup d'espace pour les jambes pour tout le monde.",
        "ford-f2-t": "Capacité Bagages :",
        "ford-f2-p": "Idéal pour les transferts aéroport avec beaucoup de valises.",
        "ford-f3-t": "Sécurité Moderne :",
        "ford-f3-p": "Équipé des dernières fonctionnalités de sécurité.",
        "ford-f4-t": "Conduite Douce :",
        "ford-f4-p": "Suspension avancée pour les longs trajets.",
        "ren-sub": "Parfait pour les Groupes et Familles",
        "ren-title": "Transport de Groupe Fiable",
        "ren-desc-full": "Le Renault Trafic allie praticité et confort. C'est le choix intelligent pour les grands groupes à la recherche d'un transport fiable à travers le Maroc sans se ruiner.",
        "fleet-passengers-9": "9 Passagers",
        "fleet-luggage-big": "Grand Espace Bagages",
        "fleet-ac-sys": "Système de Climatisation",
        "key-features": "Caractéristiques Clés",
        "ren-f1-t": "Adapté aux Groupes :",
        "ren-f1-p": "Accueille jusqu'à 9 personnes en toute sécurité.",
        "ren-f2-t": "Polyvalent :",
        "ren-f2-p": "Idéal pour les transferts urbains et les excursions.",
        "ren-f3-t": "Économique :",
        "ren-f3-p": "Excellent rapport qualité-prix.",
        "ren-f4-t": "Sûr :",
        "ren-f4-p": "Régulièrement entretenu et inspecté.",
"@

# Clean up existing keys to avoid duplicates
$c = $c -replace '(?s)"vclass-title":.*?"btn-chat-now": "Chat Now",', ''
$c = $c -replace '(?s)"vclass-title":.*?"btn-chat-now": "Discuter Maintenant",', ''
$c = $c -replace '(?s)"ford-sub":.*?"ford-f4-p": "Advanced suspension for long journeys\.",', ''
$c = $c -replace '(?s)"ford-sub":.*?"ford-f4-p": "Suspension avancée pour les longs trajets\.",', ''
$c = $c -replace '(?s)"ren-sub":.*?"btn-inquire": "Inquire Now",', ''
$c = $c -replace '(?s)"ren-sub":.*?"btn-inquire": "Demande de Renseignement",', ''

# Insert English
$c = $c -replace '"btn-details": "View Details",', "`"btn-details`": `"View Details`",`n$enNew"

# Insert French
$c = $c -replace '"btn-details": "Voir en Détails",', "`"btn-details`": `"Voir en Détails`",`n$frNew"

[System.IO.File]::WriteAllText($s, $c, (New-Object System.Text.UTF8Encoding($False)))
Write-Output "Done"
