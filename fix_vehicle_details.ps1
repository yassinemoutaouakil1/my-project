$ErrorActionPreference = "Stop"

$vclass = "vehicle-mercedes-vclass.html"
$ford = "vehicle-ford-tourneo.html"
$renault = "vehicle-renault-trafic.html"

# Mercedes Fixes
$c = [System.IO.File]::ReadAllText($vclass)
$c = $c -replace '<h2>Premium VIP Chauffeur Service</h2>', '<h2 data-i18n="vclass-title">Premium VIP Chauffeur Service</h2>'
$c = $c -replace '<p class="lead-text">Travel in style, comfort, and absolute privacy\. The Mercedes-Benz V-Class is\s*the preferred choice for VIPs, executives, and families who refuse to compromise on quality\.</p>', '<p class="lead-text" data-i18n="vclass-desc-full">Travel in style, comfort, and absolute privacy. The Mercedes-Benz V-Class is the preferred choice for VIPs, executives, and families who refuse to compromise on quality.</p>'
$c = $c -replace '<p class="animate-up delay-1">The Definition of Luxury Travel</p>', '<p class="animate-up delay-1" data-i18n="vclass-sub">The Definition of Luxury Travel</p>'
$c = $c -replace '<span>7 Passengers</span>', '<span data-i18n="fleet-passengers-7">7 Passengers</span>'
$c = $c -replace '<span>7 Large Suitcases</span>', '<span data-i18n="fleet-luggage-7">7 Large Suitcases</span>'
$c = $c -replace '<span>Free Wi-Fi</span>', '<span data-i18n="fleet-wifi">Free Wi-Fi</span>'
$c = $c -replace '<span>Dual Zone A/C</span>', '<span data-i18n="fleet-ac-dual">Dual Zone A/C</span>'
$c = $c -replace '<span>Complimentary Water</span>', '<span data-i18n="fleet-water">Complimentary Water</span>'
$c = $c -replace '<span>Charging Ports</span>', '<span data-i18n="fleet-charging">Charging Ports</span>'

$c = $c -replace '<h3>Perfect For:</h3>', '<h3 data-i18n="perfect-for">Perfect For:</h3>'
$c = $c -replace '<strong>Airport Transfers:</strong> VIP meet & greet service\.', '<strong data-i18n="pf-air-t">Airport Transfers:</strong> <span data-i18n="pf-air-p">VIP meet & greet service.</span>'
$c = $c -replace '<strong>Business Travel:</strong> Mobile\s*office environment\.', '<strong data-i18n="pf-bus-t">Business Travel:</strong> <span data-i18n="pf-bus-p">Mobile office environment.</span>'
$c = $c -replace '<strong>Long Distance Touring:</strong>\s*Maximum comfort for city-to-city trips\.', '<strong data-i18n="pf-long-t">Long Distance Touring:</strong> <span data-i18n="pf-long-p">Maximum comfort for city-to-city trips.</span>'
$c = $c -replace '<strong>Events:</strong> Weddings and special\s*occasions\.', '<strong data-i18n="pf-event-t">Events:</strong> <span data-i18n="pf-event-p">Weddings and special occasions.</span>'

$c = $c -replace '<a href="booking\.html" class="btn btn-gold btn-large">Book This Vehicle</a>', '<a href="booking.html" class="btn btn-gold btn-large" data-i18n="btn-book-vehicle">Book This Vehicle</a>'
$c = $c -replace 'class="btn btn-outline"><i class="fab fa-whatsapp"></i> Chat Now</a>', 'class="btn btn-outline"><i class="fab fa-whatsapp"></i> <span data-i18n="btn-chat-now">Chat Now</span></a>'

[System.IO.File]::WriteAllText($vclass, $c, (New-Object System.Text.UTF8Encoding($False)))

# Ford Fixes
$c = [System.IO.File]::ReadAllText($ford)
$c = $c -replace '<p class="animate-up delay-1">Spacious\. Modern\. Reliable\.</p>', '<p class="animate-up delay-1" data-i18n="ford-sub">Spacious. Modern. Reliable.</p>'
$c = $c -replace '<h2>Superior Group Comfort</h2>', '<h2 data-i18n="ford-title">Superior Group Comfort</h2>'
$c = $c -replace '<p class="lead-text">The Ford Tourneo Custom sets the standard for group travel\. With its generous\s*interior space and flexible seating, it offers a first-class experience for families and larger\s*groups\.</p>', '<p class="lead-text" data-i18n="ford-desc-full">The Ford Tourneo Custom sets the standard for group travel. With its generous interior space and flexible seating, it offers a first-class experience for families and larger groups.</p>'

$c = $c -replace '<span>8 Passengers</span>', '<span data-i18n="fleet-passengers-8">8 Passengers</span>'
$c = $c -replace '<span>8 Large Suitcases</span>', '<span data-i18n="fleet-luggage-8">8 Large Suitcases</span>'
$c = $c -replace '<span>Air Conditioned</span>', '<span data-i18n="fleet-ac-gen">Air Conditioned</span>'
$c = $c -replace '<span>USB Ports</span>', '<span data-i18n="fleet-charging">USB Ports</span>'

$c = $c -replace '<h3>Why Choose This Vehicle\?</h3>', '<h3 data-i18n="why-choose">Why Choose This Vehicle?</h3>'
$c = $c -replace '<strong>Spacious Cabin:</strong> Ample legroom\s*for everyone\.', '<strong data-i18n="ford-f1-t">Spacious Cabin:</strong> <span data-i18n="ford-f1-p">Ample legroom for everyone.</span>'
$c = $c -replace '<strong>Luggage Capacity:</strong> Ideal for\s*airport transfers with lots of bags\.', '<strong data-i18n="ford-f2-t">Luggage Capacity:</strong> <span data-i18n="ford-f2-p">Ideal for airport transfers with lots of bags.</span>'
$c = $c -replace '<strong>Modern Safety:</strong> Equipped with\s*latest safety features\.', '<strong data-i18n="ford-f3-t">Modern Safety:</strong> <span data-i18n="ford-f3-p">Equipped with latest safety features.</span>'
$c = $c -replace '<strong>Smooth Ride:</strong> Advanced\s*suspension for long journeys\.', '<strong data-i18n="ford-f4-t">Smooth Ride:</strong> <span data-i18n="ford-f4-p">Advanced suspension for long journeys.</span>'

$c = $c -replace '<a href="booking\.html" class="btn btn-gold btn-large">Book This Vehicle</a>', '<a href="booking.html" class="btn btn-gold btn-large" data-i18n="btn-book-vehicle">Book This Vehicle</a>'
$c = $c -replace 'class="btn btn-outline"><i class="fab fa-whatsapp"></i> Chat Now</a>', 'class="btn btn-outline"><i class="fab fa-whatsapp"></i> <span data-i18n="btn-chat-now">Chat Now</span></a>'

[System.IO.File]::WriteAllText($ford, $c, (New-Object System.Text.UTF8Encoding($False)))

# Renault Fixes
$c = [System.IO.File]::ReadAllText($renault)
$c = $c -replace '<p class="animate-up delay-1">Perfect for groups and large families\.</p>', '<p class="animate-up delay-1" data-i18n="ren-sub">Perfect for groups and large families.</p>'
$c = $c -replace '<h2>Versatile Group Transport</h2>', '<h2 data-i18n="ren-title">Versatile Group Transport</h2>'
$c = $c -replace '<p class="lead-text">The Renault Trafic combines practicality with comfort\. It provides maximum\s*value without sacrificing the quality of your transfer experience\.</p>', '<p class="lead-text" data-i18n="ren-desc-full">The Renault Trafic combines practicality with comfort. It provides maximum value without sacrificing the quality of your transfer experience.</p>'

$c = $c -replace '<span>8 Passengers</span>', '<span data-i18n="fleet-passengers-8">8 Passengers</span>'
$c = $c -replace '<span>8 Travel Bags</span>', '<span data-i18n="fleet-luggage-8-bag">8 Travel Bags</span>'
$c = $c -replace '<span>Climate Control</span>', '<span data-i18n="fleet-ac">Climate Control</span>'
$c = $c -replace '<span>Roomy Interior</span>', '<span data-i18n="fleet-roomy">Roomy Interior</span>'

$c = $c -replace '<h3>Ideal for:</h3>', '<h3 data-i18n="ideal-for">Ideal for:</h3>'
$c = $c -replace '<strong>Family Excursions:</strong> Room for everyone and their belongings\.', '<strong data-i18n="ren-f1-t">Family Excursions:</strong> <span data-i18n="ren-f1-p">Room for everyone and their belongings.</span>'
$c = $c -replace '<strong>Group Airport Transfers:</strong> Cost-effective\s*transportation\.', '<strong data-i18n="ren-f2-t">Group Airport Transfers:</strong> <span data-i18n="ren-f2-p">Cost-effective transportation.</span>'
$c = $c -replace '<strong>Day Trips:</strong> Comfortable seating for exploring Morocco\.', '<strong data-i18n="ren-f3-t">Day Trips:</strong> <span data-i18n="ren-f3-p">Comfortable seating for exploring Morocco.</span>'

$c = $c -replace '<a href="booking\.html" class="btn btn-gold btn-large">Book This Vehicle</a>', '<a href="booking.html" class="btn btn-gold btn-large" data-i18n="btn-book-vehicle">Book This Vehicle</a>'
$c = $c -replace 'class="btn btn-outline"><i class="fab fa-whatsapp"></i> Chat Now</a>', 'class="btn btn-outline"><i class="fab fa-whatsapp"></i> <span data-i18n="btn-chat-now">Chat Now</span></a>'

[System.IO.File]::WriteAllText($renault, $c, (New-Object System.Text.UTF8Encoding($False)))

Write-Output "Done"
