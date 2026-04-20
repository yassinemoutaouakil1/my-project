// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-menu a');

// Language Management
// Language Management & Translation System
const translations = {
    en: {
        "nav-home": "Home",
        "nav-fleet": "Fleet",
        "nav-services": "Services",
        "nav-destinations": "Destinations",
        "nav-booking": "Booking",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "nav-contact": "Contact",
        "footer-explore": "Explore More Services",
        "page-title": "Safia Transfers | Private Driver Morocco & Luxury Transfers",
        "page-desc": "Premium private driver services and luxury transfers in Morocco (Marrakech, Casablanca, Fes, Rabat, Tangier). Professional chauffeurs at fixed rates.",
        "con-page-title": "Contact Safia Transfers | Book Your Private Driver Morocco",
        "con-page-desc": "Book your private driver and luxury transfers across Morocco. Contact us today for reliable and comfortable transport.",
        "aga-page-title": "Private Driver in Agadir | Luxury Transfers & Chauffeur Service",
        "aga-page-desc": "Professional private driver in Agadir offering airport transfers, beach resort transport, city tours, and luxury long-distance transfers to Marrakech and more.",
        "ess-page-title": "Private Driver in Essaouira | Luxury Transfers & Chauffeur Service",
        "ess-page-desc": "Professional private driver in Essaouira offering airport transfers, city rides, and coastal tours. Luxury chauffeur and transport to Marrakech.",
        "fez-page-title": "Private Driver in Fes | Luxury Transfers & Chauffeur Service",
        "fez-page-desc": "Book a professional private driver in Fes for airport transfers and city tours. Luxury chauffeur and transport to Meknes, Chefchaouen, and more.",
        "rak-page-title": "Private Driver in Marrakech | Luxury Transfers & Chauffeur Service",
        "rak-page-desc": "Book a professional private driver in Marrakech for airport transfers, city tours, and day trips. Luxury chauffeur and transport to Casablanca and more.",
        "cmn-page-title": "Private Driver in Casablanca | Luxury Transfers & Chauffeur Service",
        "cmn-page-desc": "Professional private driver in Casablanca for airport transfers and city tours. Luxury chauffeur and transport to Rabat, Marrakech, and more.",
        "tng-page-title": "Private Driver in Tangier | Luxury Transfers & Chauffeur Service",
        "tng-page-desc": "Book a professional private driver in Tangier for airport transfers and city tours. Luxury chauffeur and transport to Chefchaouen, Asilah, and more.",
        "che-page-title": "Private Driver to Chefchaouen | Luxury Transfers & Tours",
        "che-page-desc": "Book a private driver to the Blue Pearl of Morocco. Luxury chauffeur and transport to Chefchaouen from Fes, Tangier, and Casablanca.",
        "sah-page-title": "Private Driver for Sahara Desert Tours | Luxury Transfers",
        "sah-page-desc": "Embark on a luxury Sahara Desert tour with a professional private driver. Transfers to Merzouga and Zagora from Marrakech and Fes.",
        "fle-page-title": "Luxury Fleet | Mercedes V-Class & E-Class Morocco | Safia",
        "fle-page-desc": "Explore our luxury fleet for private transport in Morocco. Mercedes-Benz V-Class vans and VIP transport for ultimate comfort and style.",
        "ser-page-title": "Luxury Chauffeur Service Casablanca, Marrakech & Fes | Transfers",
        "ser-page-desc": "Premium chauffeur service in Casablanca, Marrakech, and Fes. We offer reliable airport transfers, city-to-city transport, and luxury private tours.",
        "des-page-title": "Morocco Tours & Destinations | Private Driver Fes, Rabat, Tangier",
        "des-page-desc": "Discover Morocco's top destinations with a private driver. Custom tours to Fes, Rabat, Tangier, Chefchaouen, and the Sahara Desert.",
        "boo-page-title": "Book Private Driver Morocco | Instant Quote | Safia Transfers",
        "boo-page-desc": "Book your private driver in Morocco easily. Get an instant quote for airport transfers or custom tours. Secure online reservation.",
        "btn-book-now": "Book Now",
        "hero-title": "<span class='text-shine-gold'>Private Driver</span> Morocco &<br>Luxury Transfers",
        "hero-subtitle": "Premium Chauffeur Service & Tourist Transport in Morocco",
        "hero-tagline": "“Moroccan roots. Global standards. Exceptional journeys.”",
        "hero-whatsapp": "Book on WhatsApp",
        "services-title": "Our Premium Services",
        "service-airport-t": "Airport Transfers",
        "service-airport-p": "Seamless pickups and drop-offs at all major Moroccan airports (CMN, RAK, FEZ).",
        "service-driver-t": "Private Chauffeur",
        "service-driver-p": "Professional drivers for your daily trips, business meetings, or leisure travel.",
        "service-city-t": "City Transfers",
        "service-city-p": "Comfortable inter-city transfers between Fes, Marrakech, Casablanca, and more.",
        "service-tour-t": "Luxury Tours",
        "service-tour-p": "Customized sightseeing tours to explore the beauty of Morocco in style.",
        "service-vip-t": "VIP & Business",
        "service-vip-p": "Discreet and reliable transport solutions for corporate clients and VIPs.",
        "service-multi-t": "Multi-day Booking",
        "service-multi-p": "Hire a vehicle and driver for your entire stay for ultimate freedom.",
        "philosophy-title": "Our Philosophy",
        "philosophy-quote": "“Rooted in Morocco, inspired by the world — we deliver journeys shaped by comfort, culture, and care.”",
        "fleet-title": "Our Luxury Fleet",
        "fleet-vclass-t": "Mercedes V-Class",
        "fleet-vclass-p": "Luxury VIP Van",
        "fleet-ford-t": "Ford Tourneo",
        "fleet-ford-p": "Spacious Group Van",
        "fleet-trafic-t": "Renault Trafic",
        "fleet-trafic-p": "Reliable Comfort",
        "btn-view-fleet": "View Full Fleet",
        "why-title": "Why Choose Us",
        "why-punctual-t": "Punctual & Reliable",
        "why-punctual-p": "We value your time. Our drivers are always on time, every time.",
        "why-luxury-t": "Luxury Fleet",
        "why-luxury-p": "Clean, modern, and air-conditioned Mercedes vehicles for maximum comfort.",
        "why-lang-t": "English Speaking",
        "why-lang-p": "Our drivers are fluent in English to ensure clear communication.",
        "why-price-t": "Fixed Prices",
        "why-price-p": "Transparent pricing with no hidden fees or surprises.",
        "destinations-title": "Top Destinations",
        "dest-fes": "Fes",
        "dest-marrakech": "Marrakech",
        "dest-chefchaouen": "Chefchaouen",
        "dest-casablanca": "Casablanca",
        "dest-essaouira": "Essaouira",
        "dest-sahara": "Sahara Desert",
        "dest-other": "Other Activities",
        "testimonials-title": "What Our Guests Say",
        "testimonial-1-text": "\"Our driver, Hassan, was amazing. He knew all the best hidden spots in Marrakech. The car was spotless and comfortable. Highly recommend!\"",
        "testimonial-1-author": "- Sarah & James, UK",
        "testimonial-2-text": "\"Reliable airport transfer at 3 AM. The driver was waiting for us with a sign. Smooth ride to our Riad. Excellent service.\"",
        "testimonial-2-author": "- Michael T., USA",
        "testimonial-3-text": "\"We booked a 3-day tour to the Sahara. The experience was magical. Our driver was safe, friendly, and very professional.\"",
        "testimonial-3-author": "- Emily R., Australia",
        "btn-google-review": "Review us on Google",
        "faq-title": "Common Questions",
        "faq-1-q": "How can I book a private driver?",
        "faq-2-q": "Are your prices fixed?",
        "faq-3-q": "Do you pick up from the airport?",
        "btn-all-faqs": "Read All FAQs",
        "trust-licensed": "Licensed Tourism Transport",
        "trust-verified": "Verified Professional Drivers",
        "trust-insured": "Fully Insured Vehicles",
        "trust-support": "24/7 Customer Support",
        "faq-page-title": "FAQ | Private Driver Morocco | Questions & Answers | Safia",
        "faq-page-desc": "Find answers about your private driver in Morocco. Luxury transfers, airport services in Marrakech, Casablanca, Fes, Rabat & Tangier. Book your chauffeur service today.",
        "faq-hero-title": "Frequently Asked <span class='text-shine-gold'>Questions</span> about Private Transfers",
        "faq-hero-subtitle": "Everything you need to know about your luxury travel experience in Morocco",
        "faq-cat-booking": "Booking & Airport Transfers",
        "faq-cat-fleet": "Fleet, Comfort & Drivers",
        "faq-cat-tours": "Tours, Pricing & Trust",
        "faq-p-q1": "How do I book a private transfer in Morocco?",
        "faq-p-a1": "Booking a <strong>private driver in Morocco</strong> is simple with Safia Transfers. You can book directly via WhatsApp for instant confirmation, or use our online booking page. We recommend reserving your luxury transfer at least 24 hours in advance.",
        "faq-p-q2": "Do you offer airport transfer services in Marrakech, Casablanca & Fes?",
        "faq-p-a2": "Yes, we provide reliable <strong>luxury airport transfers</strong> across all major Moroccan hubs, including Marrakech (RAK), Casablanca (CMN), Fes (FEZ), Rabat, and Tangier. Our drivers meet you at the arrivals hall with a name sign.",
        "faq-p-q3": "Is your private driver service Available 24/7?",
        "faq-p-a3": "Absolutely. Our <strong>tourist transport services</strong> operate 24 hours a day, 7 days a week. Whether you have a late-night flight arrival or need an early morning pickup, our team is always ready.",
        "faq-p-q4": "What vehicles are in your luxury fleet?",
        "faq-p-a4": "We offer a modern, high-end fleet. For solo travelers and couples, we use luxury sedans (Mercedes E-Class). For families and groups, we provide spacious Mercedes-Benz V-Class and Vito vans.",
        "faq-p-q5": "Are your drivers licensed and professional?",
        "faq-p-a5": "Yes, all our chauffeurs are fully licensed, vetted professionals. They are multilingual (English, French, Arabic) and act as knowledgeable local guides.",
        "faq-p-q6": "Is your service suitable for families and group travel?",
        "faq-p-a6": "We specialize in family travel. Our spacious vans provide ample room for luggage, and we offer complimentary baby seats and booster seats upon request.",
        "faq-p-q7": "Can I customize my tours and excursions?",
        "faq-p-a7": "Yes! We offer fully customized tours. Whether it's a desert trip to Merzouga or a tour of Imperial Cities, we tailor the itinerary to your pace.",
        "faq-p-q8": "Is your pricing transparent? Are there hidden fees?",
        "faq-p-a8": "We believe in 100% transparent pricing. The quote you receive includes vehicle, driver, fuel, and tolls. No hidden fees for luggage or delays.",
        "faq-p-q9": "Why choose Safia Transfers for my Morocco trip?",
        "faq-p-a9": "Safia Transfers offers peace of mind with punctual private drivers, immaculate luxury vehicles, 24/7 support, and deep local knowledge.",
        "faq-soft-cta": "Book your private driver via WhatsApp now",
        "faq-trust-title": "Reliability & Safety",
        "faq-trust-p": "We are committed to providing reliable, safe, and professional private driver services throughout Morocco.",
        "faq-cta-title": "Still have questions? Contact us anytime.",
        "faq-cta-btn": "Book on WhatsApp",
        "location-title": "Our Location",
        "cta-title": "Ready to Explore Morocco in Style?",
        "cta-p": "Book your private driver today and enjoy a hassle-free journey.",
        "cta-whatsapp": "Book via WhatsApp",
        "footer-desc": "Luxury Tourist Transport & Chauffeur Service in Morocco.",
        "footer-areas": "Service Areas",
        "footer-area-all": "All Morocco",
        "footer-area-cmn": "Casablanca Airport",
        "footer-area-rak": "Marrakech Airport",
        "footer-area-fez": "Fes Airport",
        "footer-contact-title": "Contact Us",
        "footer-available": "Available 24/7",
        "footer-copyright": "© 2026 Safia Transfers. All rights reserved.",
        "footer-follow": "Follow Us",
        // Fleet Page
        "fleet-hero-title": "<span class='text-shine-gold'>Luxury Fleet</span> & Private Transport",
        "fleet-hero-subtitle": "Comfort, Safety, and Elegance in every kilometer.",
        "fleet-vclass-desc": "Our top-of-the-line van, ideal for families and groups up to 7 passengers. Offers generous space and superior comfort.",
        "fleet-ford-desc": "A spacious and reliable luxury choice for group travel up to 8 passengers, combined with modern comfort.",
        "fleet-trafic-desc": "A versatile and roomy van, perfect for group transfers and long journeys in complete comfort.",
        "fleet-passengers": "7 Passengers",
        "fleet-luggage": "7 Large Suitcases",
        "fleet-wifi": "Free Wi-Fi",
        "fleet-ac": "Air Conditioning",
        "btn-details": "View Details",
        "btn-inquire": "Inquire Now",
        // Services Page
        "ser-hero-title": "Luxury Chauffeur Service & <span class='text-shine-gold'>Transport</span>",
        "ser-hero-subtitle": "Premium transport services designed for comfort, reliability, and elegance in Morocco",
        "ser-airport-t": "Airport Transfers",
        "ser-airport-p": "Professional and punctual transfers to and from all major Moroccan airports, ensuring a smooth start or end to your journey.",
        "ser-airport-det-h": "Airport Transfers in Morocco | Luxury Private Transport",
        "ser-airport-det-p1": "Arriving in a new country should be exciting, not stressful. Our <strong>Airport Transfers in Morocco</strong> service is designed to provide you with a seamless, comfortable, and professional start to your Moroccan adventure. Whether you are landing in bustling Marrakech, historic Fes, or dynamic Casablanca, our professional private drivers are ready to welcome you with the warmth and hospitality Morocco is famous for.",
        "ser-airport-det-incl-h": "What This Service Includes",
        "ser-airport-det-incl-1-h": "Meet & Greet:",
        "ser-airport-det-incl-1-p": "Your driver awaits you at the arrival terminal with a personalized name sign.",
        "ser-airport-det-incl-2-h": "Luggage Assistance:",
        "ser-airport-det-incl-2-p": "We take care of your bags, so you don't have to lift a finger.",
        "ser-airport-det-incl-3-h": "Private Comfort:",
        "ser-airport-det-incl-3-p": "Travel in a clean, air-conditioned, and spacious luxury vehicle exclusively for you.",
        "ser-airport-det-incl-4-h": "Direct Transfer:",
        "ser-airport-det-incl-4-p": "No stops, no sharing. We drive you directly to your hotel, Riad, or next destination.",
        "ser-airport-det-cov-h": "Airports Covered",
        "ser-airport-det-cov-p": "We provide reliable <strong>private airport transfers</strong> across the entire Kingdom of Morocco. Our network covers all major international and regional airports, ensuring you can reach any city or remote destination with ease.",
        "ser-who-h": "Who Is This Service For?",
        "ser-who-p": "Our service caters to a wide range of travelers seeking reliability and comfort:",
        "ser-who-1-h": "Tourists:",
        "ser-who-1-p": "Start your holiday the right way without navigating public transport maps or haggling with taxis.",
        "ser-who-2-h": "Families:",
        "ser-who-2-p": "Safe and spacious vehicles perfectly suited for families with children and extra luggage.",
        "ser-who-3-h": "Couples:",
        "ser-who-3-p": "Begin your romantic getaway with a private, stress-free drive to your Riad.",
        "ser-who-4-h": "Business Travelers:",
        "ser-who-4-p": "Punctual and discreet service allowing you to relax or work on the go.",
        "ser-why-h": "Why Choose Our Airport Transfers?",
        "ser-why-1-h": "English-Speaking Drivers:",
        "ser-why-1-p": "Clear communication and helpful local tips.",
        "ser-why-2-h": "Fixed Prices:",
        "ser-why-2-p": "What you see is what you pay. No hidden costs or surprises.",
        "ser-why-3-h": "24/7 Availability:",
        "ser-why-3-p": "Late-night flight? Early morning departure? We are always available.",
        "ser-why-4-h": "Local Expertise:",
        "ser-why-4-p": "Our drivers know the best routes to avoid traffic and get you there safely.",
        "ser-airport-cta-p": "Start your journey in Morocco with comfort and peace of mind.",
        "ser-airport-btn": "Book Your Airport Transfer",
        "ser-btn-expand": "View More Details",
        "ser-driver-t": "Private Driver Service",
        "ser-driver-p": "Flexible private chauffeur service available hourly, daily, or for multi-day trips, offering comfort and complete freedom.",
        "ser-driver-det-h": "Private Chauffeur Service | Freedom & Flexibility",
        "ser-driver-det-p": "Experience Morocco at your own pace. Our <strong>Private Driver Service</strong> gives you total freedom to explore cities, attend meetings, or go on shopping sprees without worrying about parking or navigation. Your professional chauffeur is at your disposal for as long as you need—whether it's a few hours, a full day, or an entire week.",
        "ser-driver-det-perf-h": "Perfect For:",
        "ser-driver-det-perf-1": "Business Meetings:",
        "ser-driver-det-perf-1-p": "Arrive relaxed and on time to multiple appointments.",
        "ser-driver-det-perf-2": "Shopping Trips:",
        "ser-driver-det-perf-2-p": "Visit souks and malls with a driver waiting to load your bags.",
        "ser-driver-det-perf-3": "Custom Sightseeing:",
        "ser-driver-det-perf-3-p": "Create your own itinerary in Marrakech, Fes, or Casablanca.",
        "ser-driver-det-perf-4": "Events & Weddings:",
        "ser-driver-det-perf-4-p": "Elegant transport for you and your guests.",
        "ser-driver-det-opt-h": "Pricing Options",
        "ser-driver-det-opt-1": "Hourly Rental",
        "ser-driver-det-opt-2": "Full Day Disposal (8-10 Hours)",
        "ser-driver-det-opt-3": "Multi-Day Packages",
        "ser-driver-cta-p": "Need a driver for the day?",
        "ser-driver-btn": "Book Your Chauffeur",
        "ser-city-t": "City-to-City Transfers",
        "ser-city-p": "Reliable and comfortable long-distance transfers between cities such as Fes, Marrakech, Essaouira, Casablanca, Rabat, and more.",
        "ser-city-det-h": "City-to-City Transfers | Comfortable Long-Distance Travel",
        "ser-city-det-p": "Skip the crowded trains and buses. Travel between Morocco's imperial cities in the comfort of a private luxury vehicle. Our <strong>City-to-City Transfer</strong> service connects all major destinations with door-to-door convenience, allowing you to relax and enjoy the changing landscapes of Morocco.",
        "ser-city-det-pop-h": "Popular Connections",
        "ser-city-det-why-h": "Why Book a Private Transfer?",
        "ser-city-det-why-1-h": "Door-to-Door:",
        "ser-city-det-why-1-p": "Pick up from your hotel lobby and drop off at your next accommodation.",
        "ser-city-det-why-2-h": "Comfort Stops:",
        "ser-city-det-why-2-p": "Stop for coffee, photos, or a break whenever you want.",
        "ser-city-det-why-3-h": "Safe & Fast:",
        "ser-city-det-why-3-p": "Our drivers are experienced on Moroccan highways and mountain roads.",
        "ser-city-cta-p": "Planning a trip to another city?",
        "ser-city-btn": "Get a Quote",
        "ser-tour-t": "Luxury Tourist Tours",
        "ser-tour-p": "Tailor-made sightseeing tours allowing travelers to explore Morocco's cultural and natural highlights with a private driver.",
        "ser-tour-det-h": "Luxury Tourist Tours | Explore Morocco in Style",
        "ser-tour-det-p": "Discover the magic of Morocco with our <strong>Tailor-Made Tourist Tours</strong>. Whether you dream of riding camels in the Sahara, getting lost in the blue streets of Chefchaouen, or exploring the ancient medinas of Fes and Marrakech, we create personalized itineraries just for you. With a private driver, you explore at your own rhythm—no rushed bus schedules, just pure discovery.",
        "ser-tour-det-pop-h": "Popular Experiences",
        "ser-tour-det-pop-1": "Atlas Mountains Day Trip",
        "ser-tour-det-pop-2": "Sahara Desert Adventure (Merzouga)",
        "ser-tour-det-pop-3": "Imperial Cities Tour",
        "ser-tour-det-pop-4": "Chefchaouen Blue City Tour",
        "ser-tour-det-pop-5": "Ouzoud Waterfalls Excursion",
        "ser-tour-det-why-h": "Why Choose a Private Tour?",
        "ser-tour-det-why-1-h": "Custom Itinerary:",
        "ser-tour-det-why-1-p": "We stop where you want. Want to take a photo? Just ask.",
        "ser-tour-det-why-2-h": "Local Knowledge:",
        "ser-tour-det-why-2-p": "Discover hidden gems and authentic restaurants recommended by locals.",
        "ser-tour-det-why-3-h": "Comfortable Travel:",
        "ser-tour-det-why-3-p": "Long journeys are a breeze in our spacious, air-conditioned vans.",
        "ser-tour-cta-p": "Ready to design your dream tour?",
        "ser-tour-btn": "Plan My Trip",
        "ser-vip-t": "Business & VIP Transport",
        "ser-vip-p": "Discreet, high-end transport services for executives, business travelers, and VIP clients.",
        "ser-vip-det-h": "Business & VIP Transport | Professionalism & Discretion",
        "ser-vip-det-p": "For those who demand the highest standards of service, our <strong>Business & VIP Transport</strong> is the ultimate choice. We understand the unique needs of corporate executives, diplomats, and VIP clients who require efficiency, discretion, and absolute comfort. Our fleet of premium vehicles (including the Mercedes V-Class) ensures you travel in style.",
        "ser-vip-det-why-h": "Why Corporate Clients Trust Us:",
        "ser-vip-det-why-1-h": "Punctuality Guaranteed:",
        "ser-vip-det-why-1-p": "We value your time. Our drivers arrive early and monitor flight/traffic statuses in real-time.",
        "ser-vip-det-why-2-h": "Discretion:",
        "ser-vip-det-why-2-p": "Our chauffeurs are trained to respect your privacy and confidentiality at all times.",
        "ser-vip-det-why-3-h": "Immaculate Vehicles:",
        "ser-vip-det-why-3-p": "Every car is thoroughly cleaned and inspected before your ride.",
        "ser-vip-det-why-4-h": "Wi-Fi Included:",
        "ser-vip-det-why-4-p": "Stay connected and productive while on the move.",
        "ser-offered-h": "Services Offered",
        "ser-offered-1": "Corporate Events & Conferences",
        "ser-offered-2": "Executive Airport Transfers",
        "ser-offered-3": "VIP Delegation Transport",
        "ser-offered-4": "Cinema & Media Production Logistics",
        "ser-vip-cta-p": "Require executive transport services?",
        "ser-vip-btn": "Contact Our VIP Desk",
        "ser-expect-h": "What You Can Expect",
        "ser-expect-1": "Professional and experienced chauffeur",
        "ser-expect-2": "Clean, comfortable, and well-maintained vehicles",
        "ser-expect-3": "English-speaking service",
        "ser-expect-4": "Fixed pricing with no hidden fees",
        "ser-expect-5": "24/7 availability",
        // Destinations Page
        "des-hero-title": "Private Driver Morocco <span class='text-shine-gold'>Destinations</span> & Tours",
        "des-hero-subtitle": "Private Transfers & Chauffeur Services Across the Kingdom. Whether you need a seamless airport transfer, comfortable city-to-city travel, or a custom private tour, our professional drivers are ready to take you there in style.",
        "des-btn-book": "Book Transfer",
        "des-btn-guide": "Explore City Guide",
        "des-mar-t": "Private Driver in Marrakech",
        "des-mar-p1": "Experience the Red City with the ultimate comfort and convenience. Our <strong>private driver Marrakech</strong> service ensures you navigate the bustling streets with ease. Whether you are arriving at Menara Airport or heading to a luxury Riad in the Medina, our chauffeurs provide a punctual and safe journey.",
        "des-mar-p2": "We offer tailored <strong>Marrakech airport transfers</strong>, day trips to the Atlas Mountains, and inter-city transfers. Enjoy the flexibility of having a dedicated vehicle at your disposal for shopping, dining, or exploring the Majorelle Garden. Choose our <strong>luxury transport Marrakech</strong> for a stress-free and elegant travel experience.",
        "des-cas-t": "Private Driver in Casablanca",
        "des-cas-p1": "As Morocco's economic hub, Casablanca demands efficiency and style. Our <strong>private driver Casablanca</strong> service is perfectly suited for business travelers and tourists alike. We specialize in reliable <strong>Casablanca airport transfers</strong> from Mohammed V International Airport (CMN) to your hotel or corporate meeting.",
        "des-cas-p2": "Avoid the hassle of taxis and navigate the city's busy avenues in a premium, air-conditioned vehicle. Whether you need <strong>business transport Casablanca</strong> for a day of meetings or a transfer to Rabat or Marrakech, our professional drivers guarantee punctuality and discretion.",
        "des-fes-t": "Private Driver in Fes",
        "des-fes-p1": "Step back in time in the spiritual capital of Morocco. Our <strong>private driver Fes</strong> service allows you to explore this ancient city with modern comfort. From <strong>Fes airport transfers</strong> (Saïss Airport) to navigating the complex outskirts of the Medina, we ensure a smooth ride.",
        "des-fes-p2": "We also offer <strong>cultural tours Fes</strong>, taking you to nearby Volubilis and Meknes, or providing a comfortable transfer to the Blue City, Chefchaouen. With a knowledgeable local driver, your journey becomes as enriching as the destination itself.",
        "des-rab-t": "Private Driver in Rabat",
        "des-rab-p1": "Visit the political capital of Morocco with elegance. Our <strong>private driver Rabat</strong> service offers <strong>executive transport Rabat</strong> for diplomats, officials, and leisure travelers. We prioritize safety, protocol, and timeliness in all our transfers.",
        "des-rab-p2": "Whether you need a <strong>VIP chauffeur Rabat</strong> for an embassy visit or a transfer to the Sale Airport, our fleet of luxury vehicles ensures you make the right impression. Enjoy a serene drive along the Atlantic coast or a quick transfer to Casablanca.",
        "des-tng-t": "Private Driver in Tangier",
        "des-tng-p1": "Gateway to Africa, Tangier is a vibrant mix of cultures. Our <strong>private driver Tangier</strong> service welcomes you right at the port or Ibn Battouta Airport with our premier <strong>Tangier airport transfer</strong>. Start your Moroccan journey without the chaos of public terminals.",
        "des-tng-p2": "We provide <strong>private transport Tangier</strong> for city tours, excursions to Cape Spartel, or transfers to the blue streets of Chefchaouen. Trust our experienced drivers to navigate the coastal roads tailored to your schedule.",
        "des-ess-t": "Private Driver in Essaouira",
        "des-ess-p1": "Enjoy the laid-back vibes of the Atlantic coast. Our <strong>private driver Essaouira</strong> service connects you effortlessly to Marrakech and Agadir. Perfect for <strong>coastal transfers Morocco</strong>, our vehicles offer a relaxing environment to enjoy the stunning ocean views.",
        "des-ess-p2": "Opt for <strong>Essaouira private tours</strong> to explore the Argan region or the historic Medina at your own pace. Whether for a day trip or a long stay, we ensure your transport needs are met with style.",
        "des-aga-t": "Private Driver in Agadir",
        "des-aga-p1": "For sun-seekers and surfers, Agadir is the top destination. Our <strong>private driver Agadir</strong> service provides seamless <strong>Agadir airport transfers</strong> to your resort or hotel. Skip the shuttle buses and start your vacation immediately.",
        "des-aga-p2": "We specialize in <strong>tourist transport Agadir</strong>, offering trips to Paradise Valley, Taghazout, or long-distance transfers back to Marrakech. Travel in air-conditioned comfort suitable for the warm southern climate.",
        "des-sah-t": "Merzouga & Sahara Desert",
        "des-sah-p1": "The adventure of a lifetime awaits in the dunes. Hiring a <strong>Sahara desert tour driver</strong> is essential for a safe journey to Merzouga. We provide reliable <strong>Merzouga private transfers</strong> from Fes or Marrakech, handling the long drive while you relax.",
        "des-sah-p2": "Experience a <strong>luxury desert tour Morocco</strong> with a driver who knows the terrain. We ensure frequent stops for photos and refreshments, making the journey to the Golden Dunes as memorable as the destination itself.",
        "des-sah-btn-book": "Book Desert Transfer",
        "des-sah-btn-guide": "Explore Desert Guide",
        "des-city-h": "City-to-City Transfers",
        "des-city-p": "Morocco is a land of diverse landscapes, best explored on the road. We specialize in long-distance private transfers between all major cities. Whether you need to travel from <strong>Marrakech ↔ Fes</strong>, commute between <strong>Casablanca ↔ Marrakech</strong>, embark on an adventure from <strong>Marrakech ↔ Merzouga</strong>, or connect the north with <strong>Rabat ↔ Tangier</strong>, our fleet ensures a comfortable, safe, and scenic journey door-to-door.",
        "des-why-h": "Why Choose Us",
        "des-why-1": "Professional licensed drivers",
        "des-why-2": "Modern & luxury vehicles",
        "des-why-3": "24/7 availability",
        "des-why-4": "Customized itineraries",
        "des-why-5": "Local expertise",
        "des-cta-h": "Book your private transfer anywhere in Morocco with comfort and confidence.",
        "des-cta-btn": "Book Your Destination Now",
        // Booking Page
        "btn-submit-booking": "Confirm Booking Request",
        // Contact Page (CON)
        "con-hero-title": "Contact <span class='text-shine-gold'>Safia Transfers</span>",
        "con-hero-subtitle": "Book your private driver and luxury transfers across Morocco — fast, easy, and reliable.",
        "con-info-title": "Get in Touch",
        "con-info-p": "Looking for a private driver in Morocco? Safia Transfers provides luxury airport transfers, city rides, and long-distance chauffeur services in Marrakech, Casablanca, Rabat, Fes, and Tangier. Contact us today for fast booking and premium service.",
        "con-wa-title": "WhatsApp (Quick Response)",
        "con-phone-title": "Phone Call",
        "con-email-title": "Email",
        "con-form-title": "Request Your Ride",
        "con-label-name": "Full Name *",
        "con-label-email": "Email *",
        "con-label-phone": "Phone / WhatsApp *",
        "con-label-pickup": "Pickup Location *",
        "con-label-destination": "Destination *",
        "con-label-date": "Date & Time *",
        "con-label-message": "Message (Optional)",
        "con-placeholder-name": "Your Name",
        "con-placeholder-email": "Your Email",
        "con-placeholder-phone": "+212...",
        "con-placeholder-pickup": "Hotel, Airport, Address",
        "con-placeholder-destination": "City or Specific Place",
        "con-placeholder-message": "Flight details, number of passengers, special requests...",
        "con-btn-submit": "Request Your Ride",
        "con-gdpr": "I accept to subscribe to the newsletter to receive exclusive offers. My data will be processed in accordance with GDPR.",
        "con-follow": "Follow Us",
        // Booking Page (BOO)
        "boo-hero-title": "Book Your <span class='text-shine-gold'>Private Driver</span>",
        "boo-hero-subtitle": "Simple, fast, and secure booking in just a few steps",
        "boo-form-title": "Booking Form",
        "boo-label-name": "Full Name *",
        "boo-label-email": "Email *",
        "boo-label-phone": "Phone / WhatsApp *",
        "boo-label-pickup": "Pickup Location *",
        "boo-label-destination": "Destination *",
        "boo-label-date": "Date and Time *",
        "boo-label-gdpr": "I agree to the processing of my data for booking purposes.",
        "boo-btn-submit": "Confirm Booking",
        "boo-placeholder-name": "Your name",
        "boo-placeholder-email": "your@email.com",
        "boo-placeholder-phone": "+212...",
        "boo-placeholder-pickup": "Airport, Hotel, Address...",
        "boo-placeholder-destination": "City or specific place",
        "boo-why-title": "Why It's Easy",
        "boo-why-fast-t": "Fast Response",
        "boo-why-fast-p": "Quick replies on WhatsApp.",
        "boo-why-price-t": "Fixed Pricing",
        "boo-why-price-p": "Transparent rates, no surprises.",
        "boo-why-avail-t": "24/7 Availability",
        "boo-why-avail-p": "We are always here for you.",
        "boo-why-secure-t": "Secure & Private",
        "boo-why-secure-p": "Your safety and privacy are our priority.",
        "boo-cta-title": "Ready to book your private driver in Morocco?",
        "boo-cta-btn": "Book Now on WhatsApp",
        "fleet-usb": "USB Ports",
        "fleet-seats": "Comfortable Seating",
        // Marrakech (RAK)
        "rak-page-title": "Private Driver in Marrakech | Luxury Transfers & Chauffeur Service | Safia",
        "rak-page-desc": "Professional private driver in Marrakech offering airport transfers, city tours, and long-distance luxury transfers across Morocco.",
        "rak-hero-title": "Private Driver in <span class='text-shine-gold'>Marrakech</span>",
        "rak-hero-subtitle": "Luxury chauffeur and transfer services in Marrakech, Morocco",
        "rak-intro-title": "Experience Marrakech in Luxury and Comfort",
        "rak-intro-p1": "Welcome to <strong>Safia Transfers</strong>, your premier choice for a <strong>private driver in Marrakech</strong>. Known as the Red City, Marrakech is a vibrant tapestry of history, culture, and sensory experiences. Navigating its bustling streets and surrounding wonders requires not just a vehicle, but a professional chauffeur who understands the nuances of local travel.",
        "rak-intro-p2": "We specialize in providing high-end <strong>chauffeur services in Marrakech</strong> for discerning travelers who value punctuality, safety, and comfort. Whether you are visiting for business, a family vacation, or a romantic getaway, our fleet of luxury vehicles ensures that your journey is as memorable as the destination itself. Forget the hassle of haggling with taxis or navigating public transport; with our <strong>private transport Marrakech</strong> service, you travel on your own terms, with a dedicated driver at your disposal.",
        "rak-intro-p3": "Our commitment to excellence means you receive personalized attention from the moment you book. We offer valuable advice on local attractions, assistance with luggage, and the flexibility to adjust your itinerary as you wish. Choose the best <strong>luxury driver Marrakech</strong> has to offer and elevate your Moroccan adventure.",
        "rak-why-title": "Why Choose a Private Driver vs. Taxi in Marrakech?",
        "rak-why-p": "Travelers often wonder about the best way to get around. While &lsquo;Petit Taxis&rsquo; are common, they can be unpredictable regarding pricing and comfort. Here is why a <strong>private driver in Marrakech</strong> is the superior choice for your peace of mind:",
        "p-fixed-prices": "Fixed Prices:",
        "desc-fixed-prices": "No bargaining or unexpected surcharges. Our rates for <strong>Marrakech airport transfers</strong> and city tours are agreed upon in advance.",
        "p-comfort-ac": "Comfort & Air Conditioning:",
        "desc-comfort-ac": "Marrakech can get very hot. Our luxury fleet (Mercedes V-Class, Vito, E-Class) guarantees a cool, dust-free environment.",
        "p-safety": "Safety & Reliability:",
        "desc-safety": "Our drivers are vetted professionals who follow strict safety protocols. You avoid the erratic driving often associated with public transport.",
        "p-door-to-door": "Door-to-Door Service:",
        "desc-door-to-door": "We pick you up from your Riad or Hotel and drop you off exactly where you need to be, handling your luggage with care.",
        "rak-airport-title": "Marrakech Menara Airport Transfers (RAK)",
        "rak-airport-p1": "Arriving in a new city can be stressful, but our <strong>Marrakech airport transfer</strong> service is designed to make your arrival seamless. Our professional drivers track your flight status in real-time to ensure they are there when you land, regardless of delays.",
        "rak-airport-p2": "Upon arrival at Marrakech Menara Airport (RAK), your private chauffeur will greet you at the arrivals hall with a personalized sign. We provide full luggage assistance and escort you directly to your waiting luxury vehicle. No waiting in long taxi queues, no hidden fees—just a smooth, air-conditioned ride directly to your hotel, Riad in the Medina, or resort in the Palmeraie.",
        "rak-airport-p3": "For departures, we ensure you arrive at the airport with ample time for check-in, allowing you to relax and enjoy your final moments in the city. Our reliable <strong>airport shuttle Marrakech</strong> service operates 24/7, accommodating early morning flights and late-night arrivals with equal professionalism.",
        "rak-exp-title": "Top 5 Luxury Experiences with Your Private Driver",
        "rak-exp-p": "Unlock the secrets of the Red City with our curated list of must-visit locations, easily accessible with your <strong>luxury transport Marrakech</strong>:",
        "rak-exp-1-t": "Majorelle Garden & YSL Museum:",
        "rak-exp-1-d": "Beat the crowds with an early morning drop-off at this botanical masterpiece.",
        "rak-exp-2-t": "Agafay Desert Dinner:",
        "rak-exp-2-d": "Experience a magical sunset dinner in the stone desert, just 45 minutes from the city center.",
        "rak-exp-3-t": "Private Shopping in the Souks:",
        "rak-exp-3-d": "Let us drop you at the most convenient gates for a hassle-free shopping spree.",
        "rak-exp-4-t": "Golf Transfers:",
        "rak-exp-4-d": "We provide spacious vans for your clubs and transport you to top courses.",
        "rak-exp-5-t": "Atlas Mountains Day Trip:",
        "rak-exp-5-d": "Escape the heat with a private day trip to Ourika Valley or Imlil.",
        "rak-city-title": "City-to-City Transfers from Marrakech",
        "rak-city-p": "Marrakech is the perfect gateway to the rest of Morocco. We offer premium <strong>long-distance transfers</strong> to all major cities and destinations. Travel in the comfort of a high-end Mercedes-Benz van or sedan, enjoying the changing landscapes of Morocco without the stress of driving yourself.",
        "rak-city-1-t": "Marrakech to Casablanca:",
        "rak-city-1-d": "A smooth 2.5-hour highway transfer.",
        "rak-city-2-t": "Marrakech to Essaouira:",
        "rak-city-2-d": "A scenic 3-hour drive to the coastal windy city.",
        "rak-city-3-t": "Marrakech to Fes:",
        "rak-city-3-d": "Journey through the Middle Atlas mountains (approx. 6-7 hours).",
        "rak-city-4-t": "Marrakech to Agadir:",
        "rak-city-4-d": "Travel south (3 hours) via the highway.",
        "rak-city-5-t": "Marrakech to Sahara Desert:",
        "rak-city-5-d": "Embark on an adventure to Merzouga or Zagora. We recommend a 3-day tour to fully enjoy this experience.",
        "rak-why-title-2": "Why Choose Our Private Driver in Marrakech?",
        "rak-faq-title": "Frequently Asked Questions (Marrakech FAQ)",
        "rak-faq-1-q": "How much does a private driver cost in Marrakech?",
        "rak-faq-1-a": "Prices vary based on the chosen luxury vehicle and the duration of your trip. A simple <strong>Marrakech airport transfer (RAK)</strong> starts from a fixed competitive rate, while a full-day disposal of a <strong>private driver</strong> (8 hours) is priced to offer great value for premium luxury service. Contact us via WhatsApp for an instant custom quote for your transportation.",
        "rak-faq-2-q": "Can your private driver pick me up directly from the Medina?",
        "rak-faq-2-a": "Yes. However, since luxury cars and vans cannot enter the narrowest streets of the <strong>Marrakech Medina</strong>, our chauffeur will meet you at the nearest accessible \"Bab\" (Gate) or parking area to your Riad. We can also coordinate directly with your Riad staff to help with luggage porter service for a seamless experience.",
        "rak-faq-3-q": "Do I need to book my transfer in advance?",
        "rak-faq-3-a": "We highly recommend booking your <strong>VIP transfer service</strong> at least 24 hours in advance, especially during peak tourist seasons in Morocco (Spring and Autumn), to guarantee the availability of your preferred high-end vehicle from our luxury fleet.",
        "rak-faq-4-q": "Is it safe to hire a private driver in Morocco?",
        "rak-faq-4-a": "Absolutely. It is the safest and most comfortable way to travel. All our <strong>drivers in Morocco</strong> are professional, background-checked, and highly experienced. Our luxury vehicles are regularly inspected. You avoid the risks of fatigue driving or navigating chaotic traffic yourself, ensuring a relaxing journey.",
        "rak-cta-title": "Travel Marrakech with Comfort and Confidence",
        "rak-cta-subtitle": "Ready to book your private transfer?",
        "rak-btn-quote": "Get Your Quote Now",
        "btn-book-intercity": "Book Inter-City Transfer",
        // Casablanca (CMN)
        "cmn-hero-title": "Private Driver in <span class='text-shine-gold'>Casablanca</span>",
        "cmn-hero-subtitle": "Luxury chauffeur and transfer services in Casablanca, Morocco",
        "cmn-intro-title": "Professional Business & Leisure Transport",
        "cmn-intro-p1": "As the economic heartbeat of Morocco, Casablanca demands a level of transport service that mirrors its dynamism and sophistication. <strong>Safia Transfers</strong> provides a premier <strong>private driver in Casablanca</strong> service, tailored for business professionals, diplomats, and leisure travelers who refuse to compromise on quality.",
        "cmn-intro-p2": "Navigating Morocco's largest city can be challenging for the uninitiated. Traffic congestion and unfamiliar routes can cause unnecessary stress. Our <strong>chauffeur service Casablanca</strong> offers the perfect antidote: a reliable, comfortable, and efficient travel experience.",
        "cmn-intro-p3": "We understand that for our clients, time is luxury. That's why punctual pickup, discreet service, and route optimization are the pillars of our offering. With a <strong>luxury driver Casablanca</strong> at your service, your vehicle becomes a mobile office or a sanctuary of relaxation amidst the city's energy.",
        "cmn-airport-title": "Casablanca Mohammed V Airport Transfers",
        "cmn-airport-p1": "Start your trip right with our seamless <strong>Casablanca airport transfer</strong> service. Mohammed V International Airport (CMN) is the busiest gateway to Morocco, but your arrival doesn't have to be chaotic.",
        "cmn-airport-p2": "Your private driver will monitor your flight in real-time and greet you at the arrivals terminal with a personalized name board. We assist with your luggage and guide you swiftly to your waiting Mercedes-Benz vehicle. From there, enjoy a smooth transfer to your hotel, corporate office, or any destination in the city center.",
        "cmn-airport-p3": "Forget the hassle of airport taxis or ride-hailing app uncertainties. Our <strong>VIP airport shuttle</strong> assures privacy, supreme comfort, and fixed pricing agreed upon in advance.",
        "cmn-city-title": "Private Chauffeur for City & Business Travel",
        "cmn-city-p1": "Maximize your productivity or leisure time with a dedicated <strong>private chauffeur for city tours and business</strong>. Casablanca is not just a business hub; it boasts architectural marvels like the <strong>Hassan II Mosque</strong>, the Art Deco district, and the vibrant Habous Quarter.",
        "cmn-city-p2": "For business travelers, our service offers the reliability you need. Keep your belongings safe in the vehicle between meetings, charge your devices on the go, and prepare for your next appointment in a quiet, air-conditioned environment. We cater to corporate roadshows, embassy visits, and executive logistics with absolute discretion.",
        "cmn-city-p3": "For leisure travelers, explore the incredible <strong>Corniche Ain Diab</strong>, visit the Morocco Mall, or discover the Old Medina. Your driver stays at your disposal, eliminating waiting times and ensuring you move effortlessly from one landmark to the next.",
        "cmn-intercity-title": "City-to-City Transfers from Casablanca",
        "cmn-intercity-p": "Casablanca's central location makes it the ideal starting point for exploring the Kingdom. We offer comfortable <strong>long-distance transfers</strong> to all major Moroccan cities, providing a stress-free alternative to trains or domestic flights.",
        "cmn-to-rak-t": "Casablanca to Marrakech:",
        "cmn-to-rak-d": "A quick highway transfer to the Red City.",
        "cmn-to-rba-t": "Casablanca to Rabat:",
        "cmn-to-rba-d": "Commute to the capital in under an hour.",
        "cmn-to-fes-t": "Casablanca to Fes:",
        "cmn-to-fes-d": "Travel to the spiritual capital through internal landscapes.",
        "cmn-to-tng-t": "Casablanca to Tangier:",
        "cmn-to-tng-d": "Head north to the gateway of Europe.",
        "cmn-landmark-title": "Key Landmarks & Travel Times in Casablanca",
        "cmn-landmark-p": "Maximize your time in the city with our efficient <strong>private driver service</strong>. Here are estimated travel times from the city center in our luxury vehicles:",
        "cmn-cmn": "Mohammed V Airport (CMN)",
        "cmn-mosque": "Hassan II Mosque",
        "cmn-mall": "Morocco Mall",
        "cmn-twin": "Twin Center / Maarif",
        "cmn-local-title": "Curated Local Experiences in Casablanca",
        "cmn-local-p": "Beyond business, let your <strong>private chauffeur</strong> introduce you to the hidden gems of the White City:",
        "cmn-local-1-t": "Rick's Café:",
        "cmn-local-1-d": "Relive the classic movie atmosphere.",
        "cmn-local-2-t": "Habous Quarter:",
        "cmn-local-2-d": "Discover traditional crafts and pastries.",
        "cmn-local-3-t": "Corniche Ain Diab:",
        "cmn-local-3-d": "Enjoy a sunset drive along the coast.",
        "cmn-faq-title": "Frequently Asked Questions (Casablanca FAQ)",
        "cmn-faq-1-q": "Where does the private driver pick me up at Casablanca Airport?",
        "cmn-faq-1-a": "Your <strong>private driver in Casablanca</strong> will be waiting for you just outside the customs exit in the arrivals hall of Terminal 1 or 2, prominently holding a sign with your name on it. We track your flight in real-time, so any delays are easily handled.",
        "cmn-faq-2-q": "Can I book a driver for a full day of meetings?",
        "cmn-faq-2-a": "Absolutely. Our \"Daily Disposal\" <strong>business transport Casablanca</strong> service is highly popular for corporate travelers. You get a dedicated luxury vehicle (Mercedes E-Class or V-Class) and driver for 8-12 hours to smoothly take you between your appointments.",
        "cmn-faq-3-q": "Is it faster to take the train to Marrakech?",
        "cmn-faq-3-a": "While the train takes about 2h 40m, it requires extra logistics from stations. A direct <strong>private transfer Casablanca to Marrakech</strong> takes roughly 2h 30m door-to-door, offering supreme privacy, comfort, and zero luggage hassle.",
        "cmn-faq-4-q": "Do your drivers speak English?",
        "cmn-faq-4-a": "Yes, all our chauffeurs providing <strong>VIP transport Morocco</strong> in the Casablanca region are fluent in English, French, and Arabic. This ensures seamless communication and a personalized experience for international clients.",
        "cmn-cta-title": "Travel Casablanca with Comfort and Professionalism",
        "cmn-cta-subtitle": "Secure your luxury transfer today.",
        "cmn-time-cmn": "35 - 45 Minutes",
        "cmn-time-mosque": "15 - 20 Minutes",
        "cmn-time-mall": "25 - 30 Minutes",
        "cmn-time-twin": "5 - 10 Minutes",
        "btn-book-tour": "Book Your City Tour",
        "cmn-why-title": "Why Choose Our Private Driver in Casablanca?",
        "f-professionalism-t": "Professionalism",
        "f-professionalism-d": "Our English-speaking drivers are trained to serve an international clientele.",
        "f-pricing-t": "Fixed Transparent Pricing",
        "f-pricing-d": "Corporate accounting made easy. Clear quotes with no hidden costs.",
        "f-luxury-t": "Luxury Comfort",
        "f-luxury-d": "Our fleet features the latest Mercedes-Benz models.",
        "f-available-t": "24/7 Availability",
        "f-available-d": "We operate around the clock to support your schedule.",
        "nav-booking-process": "Booking Process",
        "nav-contact-us": "Contact Us",
        // Agadir (AGA)
        "aga-page-title": "Private Driver in Agadir | Luxury Transfers & Chauffeur Service",
        "aga-page-desc": "Professional private driver in Agadir offering airport transfers, beach resort transport, city tours, and luxury long-distance transfers to Marrakech and more.",
        "aga-hero-title": "Private Driver in <span class='text-shine-gold'>Agadir</span>",
        "aga-hero-subtitle": "Luxury chauffeur and transfer services in Agadir, Morocco",
        "aga-intro-title": "Sun, Sea, and Seamless Transport",
        "aga-intro-p1": "<strong>Safia Transfers</strong> welcomes you to Agadir, the jewel of Morocco's southern coast. Famous for its golden crescent beach and year-round sunshine, Agadir is a premier destination for relaxation. Our <strong>private driver in Agadir</strong> service ensures that your holiday begins the moment you land, offering a stress-free alternative to crowded buses and taxis.",
        "aga-intro-p2": "Whether you are heading to a resort on the promenade, searching for the perfect wave in Taghazout, or exploring the Souss-Massa region, our <strong>chauffeur service Agadir</strong> provides the comfort and flexibility you deserve. We understand that leisure travelers value convenience and reliability.",
        "aga-intro-p3": "With our <strong>luxury transport Agadir</strong> solutions, you can explore the Kasbah, the Souk El Had, and the marina in style. Our air-conditioned Mercedes-Benz vehicles provide a cool haven from the southern sun, driven by professional chauffeurs dedicated to your safety.",
        "aga-airport-title": "Agadir Al Massira Airport Transfers",
        "aga-airport-p1": "Arrive at your resort refreshed with our exclusive <strong>Agadir airport transfer</strong> service. Agadir Al Massira Airport (AGA) is located about 25km from the city center, and finding reliable ground transport can be hectic.",
        "aga-airport-p2": "We offer a premium meet-and-greet service. Your driver will be waiting in the arrivals hall with a nameplate, ready to assist with your luggage and sports equipment (golf clubs, surfboards). Enjoy a direct, comfortable ride to your hotel door in Agadir, Taghazout, or Taroudant.",
        "aga-airport-p3": "Flight delays happen. We monitor your flight status in real-time, so your driver is always there when you actually land. For departures, we ensure ample time for check-in, taking the worry out of your travel logistics.",
        "aga-tour-title": "Private Chauffeur for Day Trips & Surfing",
        "aga-tour-p1": "Agadir is the perfect base for exploring the diverse landscapes of southern Morocco. With a <strong>private chauffeur for day trips</strong>, you can discover hidden gems at your own pace.",
        "aga-tour-p2": "Take a scenic drive to <strong>Paradise Valley</strong>, an oasis in the High Atlas mountains perfect for swimming and hiking. Visit <strong>Taghazout</strong>, the world-renowned surf village, without the hassle of public transport. Our spacious vehicles can easily accommodate your surf gear.",
        "aga-tour-p3": "Explore the ancient walled city of <strong>Taroudant</strong>, often called \"Little Marrakech,\" or venture into the Souss-Massa National Park to see unique wildlife. Your private driver acts as your personal guide to the region, offering local insights and stopping whenever you wish to take photos of the famous Argan tree-climbing goats.",
        "aga-intercity-title": "City-to-City Transfers from Agadir",
        "aga-intercity-p": "Need to travel beyond the coast? We provide safe and comfortable <strong>long-distance transfers</strong> from Agadir to key destinations across Morocco.",
        "aga-to-rak-t": "Agadir to Marrakech:",
        "aga-to-rak-d": "A smooth highway transfer to the Red City, connecting the beach to the Medina.",
        "aga-to-ess-t": "Agadir to Essaouira:",
        "aga-to-ess-d": "A breathtaking coastal drive north to the Wind City.",
        "aga-to-cmn-t": "Agadir to Casablanca:",
        "aga-to-cmn-d": "A reliable long-distance transfer to the business hub or CMN Airport.",
        "aga-landmark-title": "Agadir Landmarks & Resort Travel Times",
        "aga-aga": "Al Massira Airport (AGA)",
        "aga-tagh": "Taghazout Bay",
        "aga-paradise": "Paradise Valley",
        "aga-kasbah": "Agadir Oufella (Kasbah)",
        "aga-faq-title": "Frequently Asked Questions (Agadir FAQ)",
        "aga-faq-1-q": "Can your vehicles accommodate surfboards?",
        "aga-faq-1-a": "Yes, our premium <strong>luxury transport Agadir</strong> fleet includes spacious large Mercedes V-Class vans expertly equipped with roof racks or sufficient interior space to safely and comfortably transport surfboards and kite-surfing gear to Taghazout or Imsouane.",
        "aga-faq-2-q": "How far is Taghazout from Agadir Airport?",
        "aga-faq-2-a": "The swift transfer from AGA Airport to Taghazout takes approximately 50-60 minutes, depending on local traffic. Our transparent fixed-rate service ensures you have a globally competitive price agreed upon before you ever land.",
        "aga-faq-3-q": "Do you offer transfers to Taroudant?",
        "aga-faq-3-a": "Yes. The pleasant drive to \"Little Marrakech\" (Taroudant) takes about 1 hour and 15 minutes. It is a highly popular and convenient day trip for our many guests currently staying in Agadir.",
        "aga-cta-title": "Enjoy Agadir with Premium Private Transport",
        "aga-why-title": "Why Choose Our Private Driver in Agadir?",
        "f-experts-t": "Tourism Experts",
        "f-experts-d": "We understand the needs of beach-goers, golfers, and outdoor adventurers.",
        "f-climate-t": "Climate-Controlled Luxury",
        "f-climate-d": "Stay cool in the Agadir heat with our latest, air-conditioned Mercedes-Benz fleet.",
        "f-capacity-t": "Large Capacity",
        "f-capacity-d": "No extra charge for golf bags or extra luggage. Perfect for families and groups.",
        "btn-book-tour-wa": "Book Your Southern Tour",
        "aga-local-title": "Argan & Coastal Experiences",
        "aga-local-p": "Explore the diverse Souss-Massa region with your <strong>private driver in Agadir</strong>:",
        "aga-local-1-t": "Argan Oil Cooperatives:",
        "aga-local-1-d": "Visit authentic cooperatives in the hinterland and see the famous tree-climbing goats.",
        "aga-local-2-t": "Souss-Massa National Park:",
        "aga-local-2-d": "Spot Bald Ibises and flamingos in this bird-watcher's paradise.",
        "aga-local-3-t": "Legzira Beach:",
        "aga-local-3-d": "A full-day trip to see the massive natural stone arches, 2.5 hours south.",
        "aga-local-4-t": "Golf Transfers:",
        "aga-local-4-d": "Door-to-door service to Golf du Soleil or Golf Les Dunes with full luggage support.",
        // Shared feature cards
        "f-lang-fr-t": "French-Speaking Chauffeur",
        "f-lang-fr-d": "Clear communication is essential. Our chauffeurs are fluent in French and English, ensuring your needs are fully understood.",
        "f-safe-t": "Reliable & Safe",
        "f-safe-d": "Your safety is our priority. Our chauffeurs are licensed professionals with extensive experience on Moroccan roads.",
        "btn-book-whatsapp": "Book Your Private Driver on WhatsApp",
        "nav-booking-process": "Booking Process",
        // ------------- ADDED MISSING ENGLISH CITIES (Fes, Chefchaouen, Sahara, Tangier, Rabat, Essaouira) -------------
        // Fes (FEZ)
        "fez-hero-title": "Private Driver in <span class='text-shine-gold'>Fes</span>",
        "fez-hero-subtitle": "Luxury chauffeur and transfer services in Fes, Morocco",
        "fez-intro-title": "Discover Fes in Luxury and Comfort",
        "fez-intro-p1": "<strong>Safia Transfers</strong> invites you to explore the spiritual heart of Morocco with our exclusive <strong>private driver in Fes</strong> service.",
        "fez-intro-p2": "Our mission is to offer premium <strong>chauffeur services in Fes</strong> that prioritize your comfort. Avoid the confusion of public transport and the hassle of taxis.",
        "fez-intro-p3": "Our drivers are local experts who can assist with luggage. Choose the finest <strong>luxury driver Fes</strong> has to offer for an unforgettable experience.",
        "fez-airport-title": "Fes Saïss Airport Transfers",
        "fez-airport-p1": "Start your visit with ease using our professional <strong>Fes airport transfer</strong> service. We monitor your flight schedule meticulously.",
        "fez-airport-p2": "You will be welcomed by your private driver holding a personalized sign. We provide full assistance with your luggage and escort you to your vehicle.",
        "fez-airport-p3": "Our reliable service operates 24/7, ready to handle flight delays or early morning departures with the same level of excellence.",
        "fez-tour-title": "Private Chauffeur for City Tours",
        "fez-tour-p1": "Uncover the secrets of the Medina and beyond with our <strong>private chauffeur for city tours</strong>. Move between the historic sites with ease and comfort.",
        "fez-tour-p2": "Your dedicated driver can take you to the magnificent <strong>Royal Palace</strong> gates, the panoramic <strong>Merinid Tombs</strong>, and the famous <strong>Chouara Tannery</strong>.",
        "fez-tour-p3": "Our private service offers the flexibility to linger at sites. Enjoy the authentic atmosphere of Fes with the modern luxury of our fleet.",
        "fez-intercity-title": "City-to-City Transfers from Fes",
        "fez-intercity-p": "Fes serves as a central hub for exploring northern and central Morocco. We provide top-tier <strong>city-to-city transfers</strong> in premium vehicles.",
        "fez-to-chf-t": "Fes to Chefchaouen:",
        "fez-to-chf-d": "A popular transfer to the Blue Pearl.",
        "fez-to-rak-t": "Fes to Marrakech:",
        "fez-to-rak-d": "A scenic journey through the Middle Atlas.",
        "fez-to-cmn-t": "Fes to Casablanca:",
        "fez-to-cmn-d": "Efficient transfer to the business capital.",
        "fez-to-mek-t": "Fes to Meknes:",
        "fez-to-mek-d": "Short trips to the nearby imperial city.",
        "fez-landmark-title": "Fes Landmarks & Cultural Travel Times",
        "fez-fez": "Fes Saïss Airport (FEZ)",
        "fez-gate": "Bab Boujloud (Blue Gate)",
        "fez-tombs": "Merinid Tombs",
        "fez-volubilis": "Volubilis Roman Ruins",
        "fez-exp-title": "Spiritual & Artistic Experiences in Fes",
        "fez-exp-1-t": "Ceramic District:",
        "fez-exp-1-d": "Visit the famous Zellige workshops.",
        "fez-exp-2-t": "Royal Palace Doors:",
        "fez-exp-2-d": "Photoshoot at the Seven Gates.",
        "fez-exp-3-t": "Borj Nord:",
        "fez-exp-3-d": "Explore the fortress overlooking the city.",
        "fez-faq-title": "Frequently Asked Questions (Fes FAQ)",
        "fez-faq-1-q": "Can your private driver enter the Fes Medina?",
        "fez-faq-1-a": "The Fes Medina is car-free. Our <strong>private driver in Fes</strong> will drop you off safely at the nearest gate (Bab) to your Riad.",
        "fez-faq-2-q": "Do you offer private day trips to Chefchaouen from Fes?",
        "fez-faq-2-a": "Yes. Our <strong>private transport Fes</strong> service provides a highly comfortable, air-conditioned ride there and back.",
        "fez-faq-3-q": "Are child safety seats available for longer inter-city transfers?",
        "fez-faq-3-a": "Absolutely. For <strong>long-distance transfers</strong>, we provide complimentary child safety seats upon request.",
        "fez-cta-title": "Discover Fes with Comfort and Elegance",
        
        // Chefchaouen (CHE)
        "che-hero-title": "Private Driver to <span class='text-shine-gold'>Chefchaouen</span>",
        "che-hero-subtitle": "Explore the Blue Pearl of Morocco with total peace of mind",
        "che-intro-title": "Discover the Magic of the Blue City",
        "che-intro-p1": "<strong>Safia Transfers</strong> offers premium private transport to Chefchaouen, the famous 'Blue Pearl' nestled in the Rif Mountains.",
        "che-intro-p2": "Chefchaouen is a photographer's paradise. With a <strong>private driver</strong>, you can enjoy the scenic drive and arrive refreshed.",
        "che-routes-title": "Popular Routes",
        "che-route-fes": "Fes to Chefchaouen: A beautiful 4-hour drive. An optional stop at Volubilis ruins is available.",
        "che-route-tng": "Tangier to Chefchaouen: A short 2-hour drive, perfect for a day trip.",
        "che-why-title": "Why Book a Private Driver?",
        "che-why-safety": "Safety & Comfort: Experienced drivers familiar with mountain roads.",
        "che-why-flex": "Flexibility: Stop for photos or a coffee break whenever you wish.",
        "che-why-door": "Door-to-Door Service: We drop you off as close as possible to Medina gates.",

        // Sahara Desert (SAH)
        "sah-hero-title": "Private Driver to the <span class='text-shine-gold'>Sahara Desert</span>",
        "sah-hero-subtitle": "Travel to the golden dunes of Merzouga and Zagora",
        "sah-intro-title": "Discover the Majesty of the Dunes",
        "sah-intro-p1": "<strong>Safia Transfers</strong> provides <strong>Sahara transfers</strong> and luxury circuits to Merzouga (Erg Chebbi) and Zagora.",
        "sah-intro-p2": "The journey to the Sahara is long but spectacular. Our luxury 4x4s and vans guarantee absolute comfort through the High Atlas.",
        "sah-routes-title": "Routes to the Desert",
        "sah-route-rak": "Marrakech to Merzouga: A 3-day journey traversing the Dades Valley.",
        "sah-route-fes": "Fes to Merzouga: A scenic route via the Middle Atlas and the Ziz Valley.",
        "sah-faq-title": "Sahara Travel FAQ",
        "sah-faq-1-q": "How long is the trip from Marrakech to Merzouga?",
        "sah-faq-1-a": "Around 9 hours. We highly recommend a multi-day tour with an overnight stop at Ait Benhaddou.",
        "sah-cta-title": "Embark on your Sahara Adventure",

        // Tangier (TNG)
        "tng-hero-title": "Private Driver in <span class='text-shine-gold'>Tangier</span>",
        "tng-hero-subtitle": "Luxury chauffeur and transfer services in Tangier, Morocco",
        "tng-intro-title": "Your Gateway to Africa in Comfort",
        "tng-intro-p1": "<strong>Safia Transfers</strong> welcomes you to Tangier, the glamorous gateway between Europe and Africa. Our <strong>private driver in Tangier</strong> service is dedicated to your comfort.",
        "tng-intro-p2": "Tangier is a city of stunning views. Navigating its streets requires local expertise. Our <strong>chauffeur service Tangier</strong> eliminates all stress.",
        "tng-intro-p3": "With our <strong>luxury chauffeur Tangier</strong> services, punctuality and discretion are guaranteed. Our drivers adapt to your specific needs.",
        "tng-airport-title": "Tangier Airport & Port Transfers",
        "tng-airport-p1": "Arriving in Tangier should be a pleasure. Our <strong>Tangier airport transfer</strong> covers Ibn Battouta Airport (TNG) with flight tracking.",
        "tng-airport-p2": "We are experts in <strong>Tangier Port transfers</strong>. Whether it's Tangier Ville or the giant Tangier Med port, we will be there.",
        "tng-airport-p3": "No haggling, no waiting—just immediate, comfortable transport in an air-conditioned Mercedes-Benz.",
        "tng-city-title": "Private Chauffeur for Business & Tours",
        "tng-city-p1": "Discover the charm of the White City with a <strong>private chauffeur</strong>. Visit the <strong>Caves of Hercules</strong>, <strong>Cape Spartel</strong>, or the American Legation.",
        "tng-city-p2": "Your driver remains available all day. Enjoy a lunch at Cafe Hafa without worrying about the return trip.",
        "tng-city-p3": "For corporate clients, we offer a mobile lounge and reliable transport to Free Zones and business centers.",
        "tng-intercity-title": "City-to-City Transfers from Tangier",
        "tng-intercity-p": "Tangier is the perfect base to explore northern Morocco. We offer premium <strong>intercity transfers</strong>.",
        "tng-to-chf-t": "Tangier to Chefchaouen:",
        "tng-to-chf-d": "A beautiful drive to the Blue Pearl.",
        "tng-to-asi-t": "Tangier to Asilah:",
        "tng-to-asi-d": "A short getaway to the artistic coastal town.",
        "tng-to-rak-t": "Tangier to Marrakech:",
        "tng-to-rak-d": "The grand North-South connection.",
        "tng-to-fes-t": "Tangier to Fes:",
        "tng-to-fes-d": "A journey to the spiritual capital.",
        "tng-landmark-title": "Tangier Landmarks & Coastal Travel Times",
        "tng-landmark-p": "Easily reach key spots around Tangier with our transport services.",
        "tng-tng": "Ibn Battouta Airport (TNG)",
        "tng-med": "Tangier Med Port",
        "tng-hercules": "Caves of Hercules / Cape Spartel",
        "tng-asilah": "Asilah (City of Arts)",
        "tng-exp-title": "Premium Experiences in Tangier",
        "tng-exp-1-t": "Old Medina Stroll:",
        "tng-exp-1-d": "Drop-off right at the Kasbah gates.",
        "tng-exp-2-t": "Cap Spartel Lighthouse:",
        "tng-exp-2-d": "Where the Atlantic meets the Mediterranean.",
        "tng-exp-3-t": "Tangier Marina Bay:",
        "tng-exp-3-d": "Luxury transport to yacht clubs and elite dining.",
        "tng-faq-title": "Frequently Asked Questions (Tangier FAQ)",
        "tng-faq-1-q": "Where does the driver pick me up at Tangier Med Port?",
        "tng-faq-1-a": "Your <strong>private driver</strong> will be waiting at the passenger exit with a personalized sign.",
        "tng-faq-2-q": "Do you offer transfers from Tangier to Chefchaouen?",
        "tng-faq-2-a": "Yes, we offer <strong>private trips from Tangier to Chefchaouen</strong> with full door-to-door service.",
        "tng-faq-3-q": "Is Wi-Fi available in the vehicle?",
        "tng-faq-3-a": "Yes, all our premium vehicles in Tangier come equipped with free high-speed Wi-Fi.",
        "tng-cta-title": "Travel in Tangier with Comfort and Professionalism",

        // Rabat (RBA)
        "rba-hero-title": "Private Driver in <span class='text-shine-gold'>Rabat</span>",
        "rba-hero-subtitle": "Luxury chauffeur and transfer services in Rabat, Morocco",
        "rba-intro-title": "Executive Transport & Chauffeur Services",
        "rba-intro-p1": "<strong>Safia Transfers</strong> is proud to offer <strong>private driver services in Rabat</strong>, tailored to the needs of the Kingdom's capital.",
        "rba-intro-p2": "Whether visiting an embassy or historic sites, our <strong>Rabat chauffeur service</strong> ensures your mobility with utmost professionalism.",
        "rba-intro-p3": "With our <strong>executive transport Rabat</strong> solutions, expect an immaculate vehicle and a polite driver at your disposal.",
        "rba-airport-title": "Rabat–Salé Airport Transfers",
        "rba-airport-p1": "Experience a smooth arrival with our premium <strong>Rabat airport transfer</strong>. Skip the taxi lines.",
        "rba-airport-p2": "We offer a personalized greeting in the terminal. We also provide seamless connections from Casablanca Mohamed V Airport.",
        "rba-airport-p3": "Our flight tracking system guarantees our presence exactly when you land.",
        "rba-city-title": "Private Chauffeur for Business & Tours",
        "rba-city-p1": "Navigate the capital with ease. Visit the <strong>Royal Palace</strong>, Hassan Tower, or the Chellah Necropolis.",
        "rba-city-p2": "For our corporate clients, our vehicles provide a quiet workspace. We are well-versed in diplomatic protocols.",
        "rba-city-p3": "Leisure travelers can enjoy a relaxed tour of the <strong>Oudayas Kasbah</strong> and the Grand Theatre.",
        "rba-intercity-title": "City-to-City Transfers from Rabat",
        "rba-intercity-p": "Rabat is perfectly positioned for exploring the rest of Morocco. We offer <strong>long-distance luxury transfers</strong>.",
        "rba-to-cmn-t": "Rabat to Casablanca:",
        "rba-to-cmn-d": "A quick connection to the economic center.",
        "rba-to-tng-t": "Rabat to Tangier:",
        "rba-to-tng-d": "Travel north with total peace of mind.",
        "rba-to-fes-t": "Rabat to Fes:",
        "rba-to-fes-d": "Cross the agricultural plains to the spiritual capital.",
        "rba-to-rak-t": "Rabat to Marrakech:",
        "rba-to-rak-d": "A comfortable drive down to the Red City.",
        "rba-landmark-title": "Rabat Landmarks & Executive Travel Times",
        "rba-rba": "Rabat–Salé Airport (RBA)",
        "rba-riad": "Hay Riad / Technopolis",
        "rba-hassan": "Hassan Tower & Mausoleum",
        "rba-cmn-b": "Casablanca (Business District)",
        "rba-exp-title": "Corporate & Diplomatic Logistics",
        "rba-exp-1-t": "Embassy Transfers",
        "rba-exp-1-d": "Wait-and-return diplomatic service.",
        "rba-exp-2-t": "Golf Royal Dar Essalam",
        "rba-exp-2-d": "Luxury transport for a premium golf experience.",
        "rba-faq-title": "Frequently Asked Questions (Rabat FAQ)",
        "rba-faq-1-q": "Do you provide drivers for diplomatic visits?",
        "rba-faq-1-a": "Yes, our drivers are trained in professional etiquette and discretion for officials and delegations.",
        "rba-faq-2-q": "How far is Rabat from Casablanca Airport (CMN)?",
        "rba-faq-2-a": "The <strong>Rabat to Casablanca CMN transfer</strong> takes approximately 1h15 via the A1 highway.",
        "rba-faq-3-q": "Can the driver help with restaurant reservations?",
        "rba-faq-3-a": "Absolutely. Your <strong>Rabat luxury chauffeur</strong> knows the best dining spots in Agdal and the Marina.",
        "rba-cta-title": "Discover Rabat with Comfort and Professionalism",

        // Essaouira (ESU)
        "ess-hero-title": "Private Driver in <span class='text-shine-gold'>Essaouira</span>",
        "ess-hero-subtitle": "Luxury chauffeur and transfer services in Essaouira, Morocco",
        "ess-intro-title": "Relax and Explore the Windy City",
        "ess-intro-p1": "<strong>Safia Transfers</strong> offers the ultimate comfort for your coastal travels with our <strong>private driver in Essaouira</strong> service.",
        "ess-intro-p2": "Our <strong>Essaouira chauffeur service</strong> provides a dedicated vehicle and local driver to explore the ramparts and the art scene.",
        "ess-intro-p3": "We welcome couples, families, and solo travelers prioritizing safety and comfort. Our fleet is ideal for coastal roads.",
        "ess-airport-title": "Essaouira Mogador Airport Transfers",
        "ess-airport-p1": "Start your stay stress-free with our <strong>Essaouira airport transfer</strong> service from Mogador Airport (ESU).",
        "ess-airport-p2": "We organize your pickup and track your flight for a personalized welcome and direct transfer to your Riad or hotel.",
        "ess-airport-p3": "We also provide direct transfers from Marrakech Menara Airport (RAK) to Essaouira (a 2.5-hour drive).",
        "ess-tour-title": "Private Chauffeur for Touring & Leisure",
        "ess-tour-p1": "Optimize your time with a <strong>private chauffeur for tours</strong>. Discover the Sqala port or the ruins of Diabat.",
        "ess-tour-p2": "A private driver allows you to visit <strong>Sidi Kaouki</strong>, a surfer's paradise, or Argan oil cooperatives easily.",
        "ess-tour-p3": "Enjoy the freedom to stop and see the tree-climbing goats or watch the sunset over the Atlantic.",
        "ess-intercity-title": "City-to-City Transfers from Essaouira",
        "ess-to-rak-t": "Essaouira to Marrakech:",
        "ess-to-rak-d": "Our most popular route, a smooth journey to the Red City.",
        "ess-to-aga-t": "Essaouira to Agadir:",
        "ess-to-aga-d": "A magnificent coastal drive along the Atlantic.",
        "ess-to-cmn-t": "Essaouira to Casablanca:",
        "ess-to-cmn-d": "A comfortable coastal route up to the economic capital.",
        "ess-landmark-title": "Essaouira Landmarks & Travel Times",
        "ess-esu": "Essaouira Mogador Airport (ESU)",
        "ess-kaouki": "Sidi Kaouki (Surf & Camels)",
        "ess-rak": "Marrakech (The Red City)",
        "ess-imsouane": "Imsouane (The Longest Wave)",
        "ess-faq-title": "Frequently Asked Questions (Essaouira FAQ)",
        "ess-faq-1-q": "Where does the driver drop me off in the Essaouira Medina?",
        "ess-faq-1-a": "We drop you off at the closest gates (Bab Sbaa or Bab Marrakech) and coordinate with your Riad for luggage assistance.",
        "ess-faq-2-q": "Is it better to fly into Marrakech or Essaouira?",
        "ess-faq-2-a": "Landing at ESU is quicker, but RAK offers more international flights. We provide a swift 2h30 transfer between the two.",
        "ess-faq-3-q": "Can we stop for photos on the way to Marrakech?",
        "ess-faq-3-a": "Yes! Our private transfers are fully flexible, allowing photo stops at the Argan trees and scenic viewpoints.",
        
        // Forms & Booking
        "booking-title": "Booking Request",
        "booking-subtitle": "Secure your luxury transfer.",
        "form-name": "Your Name",
        "form-phone": "Your Phone / WhatsApp",
        "form-pickup": "Pickup Location",
        "form-destination": "Destination",
        "form-date": "Date & Time",
        "form-message": "Additional Details / Flight Number",
        "form-gdpr": "I consent to the use of my data for this booking.",

    },

    fr: {
        "nav-home": "Accueil",
        "nav-fleet": "Flotte",
        "nav-services": "Services",
        "nav-destinations": "Destinations",
        "nav-booking": "Réservation",
        "nav-faq": "FAQ",
        "nav-contact": "Contact",
        "nav-contact": "Contact",
        "footer-explore": "Explorez Plus de Services",
        "page-title": "Safia Transfers | Chauffeur Privé Maroc & Transferts de Luxe",
        "page-desc": "Services de chauffeur privé premium et transferts de luxe au Maroc (Marrakech, Casablanca, Fès, Rabat, Tanger). Chauffeurs professionnels à prix fixes.",
        "con-page-title": "Contacter Safia Transfers | Réserver votre Chauffeur au Maroc",
        "con-page-desc": "Réservez votre chauffeur privé et vos transferts de luxe au Maroc. Contactez-nous pour un transport fiable et confortable.",
        "aga-page-title": "Chauffeur Privé à Agadir | Transferts de Luxe & Service de Chauffeur",
        "aga-page-desc": "Chauffeur privé professionnel à Agadir proposant des transferts aéroport, transport vers les stations balnéaires, excursions en ville et transferts longue distance.",
        "ess-page-title": "Chauffeur Privé à Essaouira | Transferts de Luxe & Service de Chauffeur",
        "ess-page-desc": "Chauffeur privé professionnel à Essaouira proposant des transferts aéroport, des trajets en ville et des circuits côtiers. Chauffeur de luxe vers Marrakech.",
        "fez-page-title": "Chauffeur Privé à Fès | Transferts de Luxe & Service de Chauffeur",
        "fez-page-desc": "Réservez un chauffeur privé professionnel à Fès pour vos transferts aéroport et vos visites de la ville. Chauffeur de luxe vers Meknès et Chefchaouen.",
        "rak-page-title": "Chauffeur Privé à Marrakech | Transferts de Luxe & Service de Chauffeur",
        "rak-page-desc": "Réservez un chauffeur privé à Marrakech pour vos transferts aéroport, excursions en ville et excursions d'une journée. Chauffeur de luxe vers Casablanca.",
        "cmn-page-title": "Chauffeur Privé à Casablanca | Transferts de Luxe & Service de Chauffeur",
        "cmn-page-desc": "Chauffeur privé professionnel à Casablanca pour vos transferts aéroport et excursions en ville. Chauffeur de luxe vers Rabat et Marrakech.",
        "tng-page-title": "Chauffeur Privé à Tanger | Transferts de Luxe & Service de Chauffeur",
        "tng-page-desc": "Réservez un chauffeur privé à Tanger pour vos transferts aéroport et visites de la ville. Chauffeur de luxe vers Chefchaouen et Asilah.",
        "che-page-title": "Chauffeur Privé vers Chefchaouen | Transferts & Excursions de Luxe",
        "che-page-desc": "Réservez un chauffeur privé vers la Perle Bleue du Maroc. Chauffeur de luxe et transport vers Chefchaouen depuis Fès, Tanger et Casablanca.",
        "sah-page-title": "Chauffeur Privé pour le Désert du Sahara | Transferts de Luxe",
        "sah-page-desc": "Embarquez pour un circuit de luxe dans le Sahara avec un chauffeur privé professionnel. Transferts vers Merzouga et Zagora.",
        "fle-page-title": "Flotte de Luxe | Mercedes Classe V & Classe E Maroc | Safia",
        "fle-page-desc": "Explorez notre flotte de luxe pour le transport privé au Maroc. Vans Mercedes-Benz Classe V et transport VIP pour un confort et un style ultimes.",
        "ser-page-title": "Service de Chauffeur de Luxe Casablanca, Marrakech & Fès | Transferts",
        "ser-page-desc": "Service de chauffeur premium à Casablanca, Marrakech et Fès. Nous proposons des transferts aéroport fiables et des circuits de luxe.",
        "des-page-title": "Circuits & Destinations au Maroc | Chauffeur Privé Fès, Rabat, Tanger",
        "des-page-desc": "Découvrez les meilleures destinations du Maroc avec un chauffeur privé. Circuits sur mesure à Fès, Rabat, Tanger, Chefchaouen et le Sahara.",
        "btn-book-now": "Réserver",
        "hero-title": "<span class='text-shine-gold'>Chauffeur Privé</span> Maroc &<br>Transferts de Luxe",
        "hero-subtitle": "Service de Chauffeur Premium & Transport Touristique au Maroc",
        "hero-tagline": "“Racines marocaines. Standards mondiaux. Voyages exceptionnels.”",
        "hero-whatsapp": "Réserver sur WhatsApp",
        "services-title": "Nos Services Premium",
        "service-airport-t": "Transferts Aéroport",
        "service-airport-p": "Accueil et transferts fluides depuis tous les grands aéroports marocains (CMN, RAK, FEZ).",
        "service-driver-t": "Chauffeur Privé",
        "service-driver-p": "Des chauffeurs professionnels pour vos trajets quotidiens, réunions d'affaires ou loisirs.",
        "service-city-t": "Transferts Inter-villes",
        "service-city-p": "Transferts confortables entre Fès, Marrakech, Casablanca, et bien d'autres.",
        "service-tour-t": "Circuits de Luxe",
        "service-tour-p": "Excursions personnalisées pour explorer la beauté du Maroc avec élégance.",
        "service-vip-t": "VIP & Affaires",
        "service-vip-p": "Solutions de transport discrètes et fiables pour les clients corporate et VIP.",
        "service-multi-t": "Réservation Multi-jours",
        "service-multi-p": "Louez un véhicule avec chauffeur pour toute la durée de votre séjour.",
        "philosophy-title": "Notre Philosophie",
        "philosophy-quote": "“Enracinés au Maroc, inspirés par le monde — nous offrons des voyages façonnés par le confort, la culture et l'attention.”",
        "fleet-title": "Notre Flotte de Luxe",
        "fleet-vclass-t": "Mercedes Classe V",
        "fleet-vclass-p": "Van VIP Luxe",
        "fleet-ford-t": "Ford Tourneo",
        "fleet-ford-p": "Van Spacieux",
        "fleet-trafic-t": "Renault Trafic",
        "fleet-trafic-p": "Confort Fiable",
        "btn-view-fleet": "Voir toute la flotte",
        "why-title": "Pourquoi Nous Choisir",
        "why-punctual-t": "Ponctuel & Fiable",
        "why-punctual-p": "Nous valorisons votre temps. Nos chauffeurs sont toujours à l'heure.",
        "why-luxury-t": "Flotte de Luxe",
        "why-luxury-p": "Véhicules Mercedes propres et modernes pour un confort maximum.",
        "why-lang-t": "Chauffeurs Bilingues",
        "why-lang-p": "Nos chauffeurs parlent couramment anglais et français.",
        "why-price-t": "Prix Fixes",
        "why-price-p": "Tarification transparente sans frais cachés.",
        "destinations-title": "Top Destinations",
        "dest-fes": "Fès",
        "dest-marrakech": "Marrakech",
        "dest-chefchaouen": "Chefchaouen",
        "dest-casablanca": "Casablanca",
        "dest-essaouira": "Essaouira",
        "dest-sahara": "Désert du Sahara",
        "dest-other": "Autres Activités",
        "testimonials-title": "Ce que disent nos clients",
        "testimonial-1-text": "\"Notre chauffeur, Hassan, était incroyable. Il connaissait tous les meilleurs coins de Marrakech. La voiture était impeccable. Je recommande vivement !\"",
        "testimonial-1-author": "- Sarah & James, UK",
        "testimonial-2-text": "\"Transfert aéroport fiable à 3h du matin. Le chauffeur nous attendait avec une pancarte. Excellent service.\"",
        "testimonial-2-author": "- Michael T., USA",
        "testimonial-3-text": "\"Nous avons réservé un circuit de 3 jours dans le Sahara. L'expérience était magique. Notre chauffeur était prudent et professionnel.\"",
        "testimonial-3-author": "- Emily R., Australie",
        "btn-google-review": "Donnez votre avis sur Google",
        "faq-title": "Questions Fréquentes",
        "faq-1-q": "Comment réserver un chauffeur ?",
        "faq-2-q": "Les prix sont-ils fixes ?",
        "faq-3-q": "Faites-vous les transferts aéroport ?",
        "btn-all-faqs": "Lire toutes les FAQ",
        "trust-licensed": "Transport Touristique Agréé",
        "trust-verified": "Chauffeurs Professionnels Vérifiés",
        "trust-insured": "Véhicules Entièrement Assurés",
        "trust-support": "Support Client 24/7",
        "faq-page-title": "FAQ | Chauffeur Privé Maroc | Questions & Réponses | Safia",
        "faq-page-desc": "Trouvez des réponses sur votre chauffeur privé au Maroc. Transferts de luxe, services aéroport à Marrakech, Casablanca, Fès, Rabat & Tanger.",
        "faq-hero-title": "Questions <span class='text-shine-gold'>Fréquentes</span> sur les Transferts Privés",
        "faq-hero-subtitle": "Tout ce que vous devez savoir sur votre expérience de voyage de luxe au Maroc",
        "faq-cat-booking": "Réservation & Transferts Aéroport",
        "faq-cat-fleet": "Flotte, Confort & Chauffeurs",
        "faq-cat-tours": "Circuits, Tarification & Confiance",
        "faq-p-q1": "Comment réserver un transfert privé au Maroc ?",
        "faq-p-a1": "Réserver un <strong>chauffeur privé au Maroc</strong> est simple avec Safia Transfers. Vous pouvez réserver directement via WhatsApp pour une confirmation instantanée, ou utiliser notre page de réservation en ligne. Nous recommandons de réserver au moins 24 heures à l'avance.",
        "faq-p-q2": "Proposez-vous des transferts aéroport à Marrakech, Casablanca & Fès ?",
        "faq-p-a2": "Oui, nous fournissons des transferts aéroport de luxe fiables dans tous les grands centres marocains, notamment Marrakech (RAK), Casablanca (CMN), Fès (FEZ), Rabat et Tanger. Nos chauffeurs vous accueillent avec une pancarte.",
        "faq-p-q3": "Votre service de chauffeur est-il disponible 24h/24 et 7j/7 ?",
        "faq-p-a3": "Absolument. Nos services de transport touristique fonctionnent 24 heures sur 24, 7 jours sur 7. Que vous ayez un vol de nuit ou besoin d'une prise en charge tôt le matin, notre équipe est prête.",
        "faq-p-q4": "Quels véhicules compose votre flotte de luxe ?",
        "faq-p-a4": "Nous proposons une flotte moderne et haut de gamme. Pour les voyageurs solo et les couples, nous utilisons des berlines de luxe (Mercedes Classe E). Pour les familles et groupes, nous fournissons des vans spacieux Mercedes-Benz Classe V et Vito.",
        "faq-p-q5": "Vos chauffeurs sont-ils agréés et professionnels ?",
        "faq-p-a5": "Oui, tous nos chauffeurs sont des professionnels agréés et vérifiés. Ils sont multilingues (anglais, français, arabe) et agissent comme des guides locaux experts.",
        "faq-p-q6": "Votre service est-il adapté aux familles et aux groupes ?",
        "faq-p-a6": "Nous sommes spécialisés dans les voyages en famille. Nos vans spacieux offrent beaucoup d'espace pour les bagages, et nous proposons des sièges bébé gratuits sur demande.",
        "faq-p-q7": "Puis-je personnaliser mes circuits et excursions ?",
        "faq-p-a7": "Oui ! Nous proposons des circuits entièrement personnalisés. Qu'il s'agisse d'un voyage dans le désert à Merzouga ou d'un tour des villes impériales, nous adaptons l'itinéraire à votre rythme.",
        "faq-p-q8": "Votre tarification est-elle transparente ? Y a-t-il des frais cachés ?",
        "faq-p-a8": "Nous croyons en une tarification 100% transparente. Le devis inclut le véhicule, le chauffeur, le carburant et les péages. Pas de frais cachés pour les bagages ou les retards.",
        "faq-p-q9": "Pourquoi choisir Safia Transfers pour mon voyage au Maroc ?",
        "faq-p-a9": "Safia Transfers offre la tranquillité d'esprit avec des chauffeurs privés ponctuels, des véhicules de luxe impeccables, un support 24/7 et une connaissance locale approfondie.",
        "faq-soft-cta": "Réservez votre chauffeur privé via WhatsApp dès maintenant",
        "faq-trust-title": "Fiabilité & Sécurité",
        "faq-trust-p": "Nous nous engageons à fournir des services de chauffeur privé fiables, sûrs et professionnels dans tout le Maroc.",
        "faq-cta-title": "Vous avez encore des questions ? Contactez-nous à tout moment.",
        "faq-cta-btn": "Réserver sur WhatsApp",
        "location-title": "Notre Emplacement",
        "cta-title": "Prêt à Explorer le Maroc avec Élégance ?",
        "cta-p": "Réservez votre chauffeur privé dès aujourd'hui.",
        "cta-whatsapp": "Réserver via WhatsApp",
        "footer-desc": "Transport Touristique de Luxe & Service de Chauffeur au Maroc.",
        "footer-areas": "Zones de Service",
        "footer-area-all": "Tout le Maroc",
        "footer-area-cmn": "Aéroport de Casablanca",
        "footer-area-rak": "Aéroport de Marrakech",
        "footer-area-fez": "Aéroport de Fès",
        "footer-contact-title": "Contact",
        "footer-available": "Disponible 24/7",
        "footer-copyright": "© 2026 Safia Transfers. Tous droits réservés.",
        "footer-follow": "Suivez-nous",
        // Fleet Page
        "fleet-hero-title": "<span class='text-shine-gold'>Flotte de Luxe</span> & Transport Privé",
        "fleet-hero-subtitle": "Confort, Sécurité et Élégance à chaque kilomètre.",
        "fleet-vclass-desc": "Notre van haut de gamme, idéal pour les familles et les groupes jusqu'à 7 passagers. Offre un espace généreux et un confort supérieur.",
        "fleet-ford-desc": "Un choix de luxe spacieux et fiable pour les voyages de groupe jusqu'à 8 passagers, allié au confort moderne.",
        "fleet-trafic-desc": "Un van polyvalent et spacieux, parfait pour les transferts de groupe et les longs trajets en tout confort.",
        "fleet-passengers": "7 Passagers",
        "fleet-luggage": "7 Grands Bagages",
        "fleet-wifi": "Wi-Fi Gratuit",
        "fleet-ac": "Climatisation",
        "btn-details": "Voir Détails",
        "btn-inquire": "S'informer",
        "fleet-usb": "Ports USB",
        "fleet-seats": "Sièges Confortables",
        // Services Page
        "ser-hero-title": "Service de Chauffeur de Luxe & <span class='text-shine-gold'>Transport</span>",
        "ser-hero-subtitle": "Services de transport premium conçus pour le confort, la fiabilité et l'élégance au Maroc",
        "ser-airport-t": "Transferts Aéroport",
        "ser-airport-p": "Transferts professionnels et ponctuels de et vers tous les principaux aéroports marocains, garantissant un début ou une fin de voyage en douceur.",
        "ser-airport-det-h": "Transferts Aéroport au Maroc | Transport Privé de Luxe",
        "ser-airport-det-p1": "Arriver dans un nouveau pays doit être excitant, pas stressant. Notre service de <strong>Transferts Aéroport au Maroc</strong> est conçu pour vous offrir un début d'aventure marocaine fluide, confortable et professionnel. Que vous atterrissiez à Marrakech, Fès ou Casablanca, nos chauffeurs privés professionnels sont prêts à vous accueillir avec la chaleur et l'hospitalité qui font la renommée du Maroc.",
        "ser-airport-det-incl-h": "Ce que ce service inclut",
        "ser-airport-det-incl-1-h": "Accueil & Rencontre :",
        "ser-airport-det-incl-1-p": "Votre chauffeur vous attend au terminal des arrivées avec une pancarte personnalisée.",
        "ser-airport-det-incl-2-h": "Assistance Bagages :",
        "ser-airport-det-incl-2-p": "Nous nous occupons de vos valises pour que vous n'ayez rien à porter.",
        "ser-airport-det-incl-3-h": "Confort Privé :",
        "ser-airport-det-incl-3-p": "Voyagez dans un véhicule de luxe propre, climatisé et spacieux, exclusivement pour vous.",
        "ser-airport-det-incl-4-h": "Transfert Direct :",
        "ser-airport-det-incl-4-p": "Pas d'arrêts, pas de partage. Nous vous conduisons directement à votre hôtel, Riad ou destination suivante.",
        "ser-airport-det-cov-h": "Aéroports Desservis",
        "ser-airport-det-cov-p": "Nous proposons des <strong>transferts aéroport privés</strong> fiables dans tout le Royaume du Maroc. Notre réseau couvre tous les principaux aéroports internationaux et régionaux.",
        "ser-who-h": "À qui s'adresse ce service ?",
        "ser-who-p": "Notre service s'adresse à un large éventail de voyageurs recherchant fiabilité et confort :",
        "ser-who-1-h": "Touristes :",
        "ser-who-1-p": "Commencez vos vacances du bon pied sans naviguer dans les transports en commun ou négocier avec les taxis.",
        "ser-who-2-h": "Familles :",
        "ser-who-2-p": "Des véhicules sûrs et spacieux parfaitement adaptés aux familles avec enfants et bagages supplémentaires.",
        "ser-who-3-h": "Couples :",
        "ser-who-3-p": "Commencez votre escapade romantique par un trajet privé et sans stress vers votre Riad.",
        "ser-who-4-h": "Voyageurs d'Affaires :",
        "ser-who-4-p": "Un service ponctuel et discret vous permettant de vous détendre ou de travailler en déplacement.",
        "ser-why-h": "Pourquoi choisir nos transferts aéroport ?",
        "ser-why-1-h": "Chauffeurs Bilingues :",
        "ser-why-1-p": "Une communication claire et des conseils locaux utiles.",
        "ser-why-2-h": "Prix Fixes :",
        "ser-why-2-p": "Ce que vous voyez est ce que vous payez. Pas de frais cachés ni de surprises.",
        "ser-why-3-h": "Disponibilité 24/7 :",
        "ser-why-3-p": "Vol de nuit ? Départ tôt le matin ? Nous sommes toujours disponibles.",
        "ser-why-4-h": "Expertise Locale :",
        "ser-why-4-p": "Nos chauffeurs connaissent les meilleurs itinéraires pour éviter le trafic en toute sécurité.",
        "ser-airport-cta-p": "Commencez votre voyage au Maroc avec confort et tranquillité d'esprit.",
        "ser-airport-btn": "Réserver votre transfert aéroport",
        "ser-btn-expand": "Voir plus de détails",
        "ser-driver-t": "Service de Chauffeur Privé",
        "ser-driver-p": "Service de chauffeur privé flexible disponible à l'heure, à la journée ou pour plusieurs jours, offrant confort et liberté totale.",
        "ser-driver-det-h": "Service de Chauffeur Privé | Liberté & Flexibilité",
        "ser-driver-det-p": "Découvrez le Maroc à votre rythme. Notre <strong>Service de Chauffeur Privé</strong> vous donne une liberté totale pour explorer les villes, assister à des réunions ou faire du shopping sans vous soucier du stationnement ou de la navigation. Votre chauffeur professionnel est à votre disposition aussi longtemps que nécessaire.",
        "ser-driver-det-perf-h": "Parfait pour :",
        "ser-driver-det-perf-1": "Réunions d'Affaires :",
        "ser-driver-det-perf-1-p": "Arrivez détendu et à l'heure à vos différents rendez-vous.",
        "ser-driver-det-perf-2": "Virées Shopping :",
        "ser-driver-det-perf-2-p": "Visitez les souks et les centres commerciaux avec un chauffeur qui attend pour charger vos sacs.",
        "ser-driver-det-perf-3": "Visites sur Mesure :",
        "ser-driver-det-perf-3-p": "Créez votre propre itinéraire à Marrakech, Fès ou Casablanca.",
        "ser-driver-det-perf-4": "Événements & Mariages :",
        "ser-driver-det-perf-4-p": "Un transport élégant pour vous et vos invités.",
        "ser-driver-det-opt-h": "Options de Tarification",
        "ser-driver-det-opt-1": "Location à l'Heure",
        "ser-driver-det-opt-2": "Mise à Disposition Journée (8-10 Heures)",
        "ser-driver-det-opt-3": "Forfaits Plusieurs Jours",
        "ser-driver-cta-p": "Besoin d'un chauffeur pour la journée ?",
        "ser-driver-btn": "Réserver votre chauffeur",
        "ser-city-t": "Transferts Inter-villes",
        "ser-city-p": "Transferts longue distance fiables et confortables entre des villes comme Fès, Marrakech, Essaouira, Casablanca, Rabat, et plus encore.",
        "ser-city-det-h": "Transferts Inter-villes | Voyage Longue Distance Confortable",
        "ser-city-det-p": "Évitez les trains et bus bondés. Voyagez entre les villes impériales du Maroc dans le confort d'un véhicule privé de luxe. Notre service de <strong>Transfert Inter-villes</strong> relie toutes les destinations majeures.",
        "ser-city-det-pop-h": "Liaisons Populaires",
        "ser-city-det-why-h": "Pourquoi réserver un transfert privé ?",
        "ser-city-det-why-1-h": "Porte-à-Porte :",
        "ser-city-det-why-1-p": "Prise en charge à votre hôtel et dépose à votre prochain hébergement.",
        "ser-city-det-why-2-h": "Arrêts Confort :",
        "ser-city-det-why-2-p": "Arrêtez-vous pour un café, des photos ou une pause quand vous le souhaitez.",
        "ser-city-det-why-3-h": "Sûr & Rapide :",
        "ser-city-det-why-3-p": "Nos chauffeurs sont expérimentés sur les autoroutes et routes de montagne marocaines.",
        "ser-city-cta-p": "Vous prévoyez un voyage dans une autre ville ?",
        "ser-city-btn": "Obtenir un devis",
        "ser-tour-t": "Circuits Touristiques de Luxe",
        "ser-tour-p": "Circuits sur mesure permettant aux voyageurs d'explorer les points forts culturels et naturels du Maroc avec un chauffeur privé.",
        "ser-tour-det-h": "Circuits Touristiques de Luxe | Explorez le Maroc avec Style",
        "ser-tour-det-p": "Découvrez la magie du Maroc avec nos <strong>Circuits Touristiques sur Mesure</strong>. Que vous rêviez de monter à chameau dans le Sahara ou d'explorer les anciennes médinas, nous créons des itinéraires personnalisés juste pour vous.",
        "ser-tour-det-pop-h": "Expériences Populaires",
        "ser-tour-det-pop-1": "Excursion d'une journée dans l'Atlas",
        "ser-tour-det-pop-2": "Aventure dans le désert du Sahara (Merzouga)",
        "ser-tour-det-pop-3": "Tour des Villes Impériales",
        "ser-tour-det-pop-4": "Visite de la Ville Bleue de Chefchaouen",
        "ser-tour-det-pop-5": "Excursion aux cascades d'Ouzoud",
        "ser-tour-det-why-h": "Pourquoi choisir un circuit privé ?",
        "ser-tour-det-why-1-h": "Itinéraire Personnalisé :",
        "ser-tour-det-why-1-p": "Nous nous arrêtons où <em>vous</em> voulez. Vous voulez prendre une photo ? Demandez simplement.",
        "ser-tour-det-why-2-h": "Connaissance Locale :",
        "ser-tour-det-why-2-p": "Découvrez des joyaux cachés et des restaurants authentiques recommandés par les locaux.",
        "ser-tour-det-why-3-h": "Voyage Confortable :",
        "ser-tour-det-why-3-p": "Les longs trajets sont un plaisir dans nos vans spacieux et climatisés.",
        "ser-tour-cta-p": "Prêt à concevoir votre circuit de rêve ?",
        "ser-tour-btn": "Planifier mon voyage",
        "ser-vip-t": "Transport VIP & Affaires",
        "ser-vip-p": "Services de transport haut de gamme et discrets pour les cadres, les voyageurs d'affaires et les clients VIP.",
        "ser-vip-det-h": "Transport VIP & Affaires | Professionnalisme & Discrétion",
        "ser-vip-det-p": "Pour ceux qui exigent les plus hauts standards de service, notre <strong>Transport VIP & Affaires</strong> est le choix ultime. Nous comprenons les besoins des cadres, diplomates et clients VIP.",
        "ser-vip-det-why-h": "Pourquoi les clients corporate nous font confiance :",
        "ser-vip-det-why-1-h": "Ponctualité Garantie :",
        "ser-vip-det-why-1-p": "Nous apprécions votre temps. Nos chauffeurs arrivent en avance et suivent le trafic en temps réel.",
        "ser-vip-det-why-2-h": "Discrétion :",
        "ser-vip-det-why-2-p": "Nos chauffeurs sont formés pour respecter votre vie privée et votre confidentialité.",
        "ser-vip-det-why-3-h": "Véhicules Impeccables :",
        "ser-vip-det-why-3-p": "Chaque voiture est soigneusement nettoyée et inspectée avant votre trajet.",
        "ser-vip-det-why-4-h": "Wi-Fi Inclus :",
        "ser-vip-det-why-4-p": "Restez connecté et productif pendant vos déplacements.",
        "ser-offered-h": "Services Proposés",
        "ser-offered-1": "Événements Corporate & Conférences",
        "ser-offered-2": "Transferts Aéroport Exécutifs",
        "ser-offered-3": "Transport de Délégation VIP",
        "ser-offered-4": "Logistique Production Cinéma & Médias",
        "ser-vip-cta-p": "Besoin de services de transport exécutif ?",
        "ser-vip-btn": "Contacter notre bureau VIP",
        // Destinations Page
        "des-hero-title": "Chauffeur Privé Maroc <span class='text-shine-gold'>Destinations</span> & Circuits",
        "des-hero-subtitle": "Transferts privés et services de chauffeur dans tout le Royaume. Que vous ayez besoin d'un transfert aéroport fluide ou d'un circuit privé sur mesure, nos chauffeurs professionnels sont prêts à vous y conduire avec style.",
        "des-btn-book": "Réserver le transfert",
        "des-btn-guide": "Explorer le guide de la ville",
        "des-mar-t": "Chauffeur Privé à Marrakech",
        "des-mar-p1": "Découvrez la Ville Rouge avec un confort et une commodité ultimes. Notre service de <strong>chauffeur privé à Marrakech</strong> vous assure de naviguer dans les rues animées avec facilité. Que vous arriviez à l'aéroport de Ménara ou que vous vous rendiez dans un Riad de luxe dans la Médina, nos chauffeurs assurent un voyage ponctuel et sûr.",
        "des-mar-p2": "Nous proposons des <strong>transferts aéroport de Marrakech</strong> sur mesure, des excursions d'une journée dans les montagnes de l'Atlas et des transferts inter-villes. Profitez de la flexibilité d'avoir un véhicule dédié à votre disposition pour le shopping, les dîners ou l'exploration du jardin Majorelle.",
        "des-cas-t": "Chauffeur Privé à Casablanca",
        "des-cas-p1": "En tant que centre économique du Maroc, Casablanca exige efficacité et style. Notre service de <strong>chauffeur privé à Casablanca</strong> est parfaitement adapté aux voyageurs d'affaires et aux touristes. Nous sommes spécialisés dans les <strong>transferts aéroport de Casablanca</strong> fiables depuis l'aéroport Mohammed V (CMN).",
        "des-cas-p2": "Évitez les tracas des taxis et naviguez sur les grandes avenues de la ville dans un véhicule premium climatisé. Que vous ayez besoin d'un transport d'affaires à Casablanca pour une journée de réunions ou d'un transfert vers Rabat ou Marrakech.",
        "des-fes-t": "Chauffeur Privé à Fès",
        "des-fes-p1": "Remontez le temps dans la capitale spirituelle du Maroc. Notre service de <strong>chauffeur privé à Fès</strong> vous permet d'explorer cette ville antique avec un confort moderne. Des <strong>transferts aéroport de Fès</strong> (Aéroport Saïss) à la navigation dans les environs complexes de la Médina.",
        "des-fes-p2": "Nous proposons également des <strong>circuits culturels à Fès</strong>, vous emmenant à Volubilis et Meknès, ou assurant un transfert confortable vers la Ville Bleue, Chefchaouen. Avec un chauffeur local chevronné, votre voyage devient aussi enrichissant que la destination elle-même.",
        "des-rab-t": "Chauffeur Privé à Rabat",
        "des-rab-p1": "Visitez la capitale politique du Maroc avec élégance. Notre service de <strong>chauffeur privé à Rabat</strong> propose un <strong>transport exécutif à Rabat</strong> pour les diplomates, les officiels et les voyageurs de loisirs. Nous priorisons la sécurité, le protocole et la ponctualité.",
        "des-rab-p2": "Que vous ayez besoin d'un <strong>chauffeur VIP à Rabat</strong> pour une visite d'ambassade ou d'un transfert vers l'aéroport de Salé, notre flotte de véhicules de luxe garantit une excellente impression.",
        "des-tng-t": "Chauffeur Privé à Tanger",
        "des-tng-p1": "Porte de l'Afrique, Tanger est un mélange vibrant de cultures. Notre service de <strong>chauffeur privé à Tanger</strong> vous accueille dès le port ou à l'aéroport Ibn Battouta avec notre <strong>transfert aéroport de Tanger</strong> de premier plan.",
        "des-tng-p2": "Nous fournissons un <strong>transport privé à Tanger</strong> pour des visites de la ville, des excursions au Cap Spartel ou des transferts vers Chefchaouen. Faites confiance à nos chauffeurs expérimentés pour naviguer sur les routes côtières selon votre emploi du temps.",
        "des-ess-t": "Chauffeur Privé à Essaouira",
        "des-ess-p1": "Profitez de l'ambiance décontractée de la côte atlantique. Notre service de <strong>chauffeur privé à Essaouira</strong> vous connecte sans effort à Marrakech et Agadir. Parfait pour les <strong>transferts côtiers au Maroc</strong>.",
        "des-ess-p2": "Optez pour des <strong>circuits privés à Essaouira</strong> pour explorer la région de l'Arganier ou la Médina historique à votre propre rythme. Que ce soit pour une journée ou un long séjour, nous répondons à vos besoins avec style.",
        "des-aga-t": "Chauffeur Privé à Agadir",
        "des-aga-p1": "Pour les amateurs de soleil et les surfeurs, Agadir est la destination phare. Notre service de <strong>chauffeur privé à Agadir</strong> assure des <strong>transferts aéroport d'Agadir</strong> fluides vers votre complexe ou hôtel. Évitez les navettes et commencez vos vacances immédiatement.",
        "des-aga-p2": "Nous sommes spécialisés dans le <strong>transport touristique à Agadir</strong>, proposant des excursions à Paradise Valley, Taghazout, ou des transferts longue distance vers Marrakech. Voyagez dans le confort de la climatisation.",
        "des-sah-t": "Merzouga & Désert du Sahara",
        "des-sah-p1": "L'aventure d'une vie vous attend dans les dunes. Engager un <strong>chauffeur de circuit désert</strong> est essentiel pour un voyage en toute sécurité vers Merzouga. Nous proposons des <strong>transferts privés vers Merzouga</strong> depuis Fès ou Marrakech.",
        "des-sah-p2": "Vivez un <strong>circuit désert de luxe au Maroc</strong> avec un chauffeur qui connaît le terrain. Nous assurons des arrêts fréquents pour des photos et des rafraîchissements, rendant le voyage vers les dunes dorées mémorable.",
        "des-sah-btn-book": "Réserver transfert désert",
        "des-sah-btn-guide": "Explorer le guide du désert",
        "des-city-h": "Transferts Inter-villes",
        "des-city-p": "Le Maroc est une terre de paysages diversifiés, à explorer au mieux par la route. Nous sommes spécialisés dans les transferts privés longue distance entre toutes les grandes villes. Que vous voyagiez de <strong>Marrakech ↔ Fès</strong>, entre <strong>Casablanca ↔ Marrakech</strong>, vers <strong>Merzouga</strong>, ou entre <strong>Rabat ↔ Tanger</strong>, notre flotte assure un voyage confortable et sûr de porte à porte.",
        "des-why-h": "Pourquoi nous choisir",
        "des-why-1": "Chauffeurs licenciés professionnels",
        "des-why-2": "Véhicules modernes et de luxe",
        "des-why-3": "Disponibilité 24/7",
        "des-why-4": "Itinéraires personnalisés",
        "des-why-5": "Expertise locale",
        "des-cta-h": "Réservez votre transfert privé partout au Maroc avec confort et confiance.",
        "des-cta-btn": "Réserver ma destination maintenant",
        // Booking Page
        "booking-title": "Réservez votre Chauffeur Privé",
        "booking-subtitle": "Service Sûr, Fiable et Professionnel",
        "form-name": "Nom Complet",
        "form-phone": "Numéro de Téléphone",
        "form-pickup": "Lieu de Prise en Charge",
        "form-destination": "Destination",
        "form-date": "Date et Heure",
        "form-message": "Demandes Particulières (Optionnel)",
        "form-gdpr": "J'accepte le traitement de mes données pour la réservation.",
        "btn-submit-booking": "Confirmer la Réservation",
        // Marrakech (RAK)
        "rak-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Marrakech</span>",
        "rak-hero-subtitle": "Services de chauffeur de luxe et transferts à Marrakech, Maroc",
        "rak-intro-title": "Vivez Marrakech dans le Luxe et le Confort",
        "rak-intro-p1": "Bienvenue chez <strong>Safia Transfers</strong>, votre premier choix pour un <strong>chauffeur privé à Marrakech</strong>. Connue sous le nom de Ville Rouge, Marrakech est une tapisserie vibrante d'histoire, de culture et d'expériences sensorielles.",
        "rak-intro-p2": "Nous sommes spécialisés dans la fourniture de <strong>services de chauffeur haut de gamme à Marrakech</strong> pour les voyageurs exigeants qui apprécient la ponctualité, la sécurité et le confort. Que vous visitiez pour affaires, des vacances en famille ou une escapade romantique.",
        "rak-intro-p3": "Notre engagement envers l'excellence signifie que vous recevez une attention personnalisée dès votre réservation. Nous offrons des conseils précieux sur les attractions locales, une assistance avec les bagages et la flexibilité d'ajuster votre itinéraire.",
        "rak-why-title": "Pourquoi Choisir un Chauffeur Privé vs Taxi à Marrakech ?",
        "rak-why-p": "Les voyageurs se demandent souvent quel est le meilleur moyen de se déplacer. Bien que les 'Petits Taxis' soient courants, ils peuvent être imprévisibles en termes de prix et de confort. Voici pourquoi un <strong>chauffeur privé à Marrakech</strong> est le choix supérieur :",
        "rak-airport-title": "Transferts Aéroport Marrakech Ménara (RAK)",
        "rak-airport-p1": "Arriver dans une nouvelle ville peut être stressant, mais notre service de <strong>transfert aéroport Marrakech</strong> est conçu pour rendre votre arrivée fluide. Nos chauffeurs suivent le statut de votre vol en temps réel.",
        "rak-airport-p2": "À votre arrivée à l'Aéroport Marrakech Ménara (RAK), votre chauffeur privé vous accueillera dans le hall des arrivées avec une pancarte personnalisée. Nous fournissons une assistance complète pour les bagages et vous escortons directement à votre véhicule de luxe.",
        "rak-airport-p3": "Pour les départs, nous nous assurons que vous arriviez à l'aéroport avec suffisamment de temps pour l'enregistrement. Notre service de <strong>navette aéroport Marrakech</strong> fiable fonctionne 24h/24 et 7j/7.",
        "rak-exp-title": "Top 5 des Expériences de Luxe avec Votre Chauffeur Privé",
        "rak-exp-p": "Déverrouillez les secrets de la Ville Rouge avec notre liste curée de lieux incontournables, facilement accessibles avec votre <strong>transport de luxe Marrakech</strong> :",
        "rak-city-title": "Transferts Inter-Villes depuis Marrakech",
        "rak-city-p": "Marrakech est la porte d'entrée idéale vers le reste du Maroc. Nous proposons des <strong>transferts longue distance</strong> premium vers toutes les grandes villes.",
        "rak-city-1-t": "Marrakech à Casablanca :",
        "rak-city-1-d": "Un transfert fluide de 2,5 heures par autoroute.",
        "rak-city-2-t": "Marrakech à Essaouira :",
        "rak-city-2-d": "Une route panoramique de 3 heures vers la ville côtière.",
        "rak-city-3-t": "Marrakech à Fès :",
        "rak-city-3-d": "Voyagez à travers les montagnes du Moyen Atlas (env. 6-7 heures).",
        "rak-city-4-t": "Marrakech à Agadir :",
        "rak-city-4-d": "Voyagez vers le sud (3 heures) via l'autoroute.",
        "rak-exp-1-t": "Jardin Majorelle & Musée YSL :",
        "rak-exp-1-d": "Évitez les foules avec une dépose tôt le matin dans ce chef-d'Å“uvre botanique.",
        "rak-exp-2-t": "Dîner dans le Désert d'Agafay :",
        "rak-exp-2-d": "Vivez un dîner magique au coucher du soleil dans le désert de pierre, à 45 min du centre.",
        "rak-exp-3-t": "Shopping Privé dans les Souks :",
        "rak-exp-3-d": "Laissez-nous vous déposer aux portes les plus pratiques pour une virée shopping sans tracas.",
        "rak-exp-4-t": "Transferts Golf :",
        "rak-exp-4-d": "Nous fournissons des vans spacieux pour vos clubs et vous transportons aux meilleurs parcours.",
        "rak-exp-5-t": "Excursion d'une Journée dans l'Atlas :",
        "rak-exp-5-d": "Échappez à la chaleur de la ville avec une excursion privée dans la vallée de l'Ourika.",
        "rak-faq-title": "Questions Fréquentes (FAQ Marrakech)",
        "rak-faq-1-q": "Combien coûte un chauffeur privé à Marrakech ?",
        "rak-faq-1-a": "Les prix varient en fonction du véhicule choisi et de la durée. Un simple <strong>transfert aéroport Marrakech (RAK)</strong> commence à un tarif fixe très compétitif. Contactez-nous via WhatsApp pour un devis personnalisé.",
        "rak-faq-2-q": "Votre chauffeur peut-il me récupérer à l'intérieur de la Médina ?",
        "rak-faq-2-a": "Oui. Cependant, comme les véhicules ne peuvent pas entrer dans les rues les plus étroites de la <strong>Médina de Marrakech</strong>, notre chauffeur privé vous retrouvera au 'Bab' (Porte) ou au parking accessible le plus proche.",
        "rak-faq-3-q": "Faut-il réserver mon transfert à l'avance ?",
        "rak-faq-3-a": "Nous recommandons vivement de réserver votre <strong>service de transfert VIP</strong> au moins 24 heures à l'avance, particulièrement pendant les saisons touristiques de pointe.",
        "rak-faq-4-q": "Est-il sûr de louer un chauffeur privé au Maroc ?",
        "rak-faq-4-a": "Absolument. C'est le moyen le plus sûr et le plus confortable de voyager. Tous nos <strong>chauffeurs au Maroc</strong> sont des professionnels expérimentés et dûment autorisés.",
        // Casablanca (CMN)
        "cmn-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Casablanca</span>",
        "cmn-hero-subtitle": "Services de chauffeur de luxe et transferts à Casablanca, Maroc",
        "cmn-intro-title": "Transport Professionnel Affaires & Loisirs",
        "cmn-intro-p1": "En tant que cÅ“ur économique du Maroc, Casablanca exige un niveau de service qui reflète son dynamisme et sa sophistication. <strong>Safia Transfers</strong> fournit un service de <strong>chauffeur privé à Casablanca</strong>.",
        "cmn-intro-p2": "Naviguer dans la plus grande ville du Maroc peut être un défi. Notre <strong>service de chauffeur à Casablanca</strong> offre l'antidote parfait : une expérience fiable et efficace.",
        "cmn-intro-p3": "Nous comprenons que pour nos clients, le temps est un luxe. Avec un <strong>chauffeur de luxe Casablanca</strong>, votre véhicule devient un bureau mobile ou un sanctuaire de détente.",
        "cmn-airport-title": "Transferts Aéroport Casablanca Mohammed V",
        "cmn-airport-p1": "Commencez votre voyage du bon pied avec notre service de <strong>transfert aéroport Casablanca</strong>. Mohammed V (CMN) est la porte d'entrée la plus fréquentée.",
        "cmn-airport-p2": "Votre chauffeur surveillera votre vol et vous accueillera au terminal des arrivées avec une pancarte. Profitez d'un transfert vers votre hôtel ou bureau.",
        "cmn-airport-p3": "Oubliez les tracas des taxis ou des VTC. Notre <strong>navette aéroport VIP</strong> assure confidentialité, confort suprême et tarification fixe.",
        "cmn-city-title": "Chauffeur Privé pour Affaires & Visites",
        "cmn-city-p1": "Maximisez votre productivité ou votre temps libre avec un <strong>chauffeur privé dédié pour les visites et les affaires</strong>.",
        "cmn-city-p2": "Pour les voyageurs d'affaires, nous nous occupons des tournées, visites d'ambassades et de la logistique exécutive avec une discrétion absolue.",
        "cmn-city-p3": "Pour les loisirs, explorez la <strong>Corniche Ain Diab</strong>, le Morocco Mall ou l'Ancienne Médina. Votre chauffeur reste à votre disposition.",
        "cmn-intercity-title": "Transferts Inter-Villes depuis Casablanca",
        "cmn-intercity-p": "La situation centrale de Casablanca en fait le point de départ idéal. Nous proposons des <strong>transferts longue distance</strong> confortables vers tout le Maroc.",
        "cmn-landmark-title": "Monuments Clés & Temps de Trajet à Casablanca",
        "cmn-cmn": "Aéroport Mohammed V (CMN)",
        "cmn-mosque": "Mosquée Hassan II",
        "cmn-mall": "Morocco Mall",
        "cmn-twin": "Twin Center / Maarif",
        "cmn-local-title": "Expériences Locales Uniques à Casablanca",
        "cmn-faq-title": "Questions Fréquemment Posées (FAQ Casablanca)",
        "cmn-faq-1-q": "Où me récupérez-vous exactement à l'aéroport de Casablanca (CMN) ?",
        "cmn-faq-1-a": "Votre <strong>chauffeur privé</strong> vous attendra dès votre sortie des formalités douanières avec une pancarte à votre nom.",
        "cmn-faq-2-q": "Puis-je réserver un chauffeur pour une journée de réunions d'affaires ?",
        "cmn-faq-2-a": "Absolument. Notre service 'Mise à Disposition' est extrêmement populaire auprès des voyageurs d'affaires à <strong>Casablanca</strong>.",
        "cmn-faq-3-q": "Est-il plus rapide de prendre le train pour Marrakech ?",
        "cmn-faq-3-a": "Un <strong>transfert privé Casablanca-Marrakech</strong> prend à peine 2h30 de porte à porte, avec confort et sans bagages.",
        "cmn-faq-4-q": "Vos chauffeurs de luxe parlent-ils étranger ?",
        "cmn-faq-4-a": "Oui, tous nos chauffeurs parlent couramment anglais, français et arabe pour une communication fluide.",
        // Fes (FEZ)
        "fez-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Fès</span>",
        "fez-hero-subtitle": "Services de chauffeur de luxe et transferts à Fès, Maroc",
        "fez-intro-title": "Découvrez Fès dans le Luxe et le Confort",
        "fez-intro-p1": "<strong>Safia Transfers</strong> vous invite à explorer le cÅ“ur spirituel du Maroc avec notre service exclusif de <strong>chauffeur privé à Fès</strong>.",
        "fez-intro-p2": "Notre mission est d'offrir des <strong>services de chauffeur premium à Fès</strong> qui privilégient votre confort. Évitez la confusion des transports et des taxis.",
        "fez-intro-p3": "Nos chauffeurs sont des experts locaux qui peuvent vous aider avec les bagages. Choisissez le meilleur <strong>chauffeur de luxe que Fès</strong> a à offrir.",
        "fez-airport-title": "Transferts Aéroport Fès Saïss",
        "fez-airport-p1": "Commencez votre visite en toute simplicité avec notre service de <strong>transfert aéroport Fès</strong>. Nous surveillons votre vol pour vous attendre.",
        "fez-airport-p2": "Vous serez accueilli par votre chauffeur privé avec une pancarte. Nous fournissons une assistance complète avec vos bagages.",
        "fez-airport-p3": "Notre service fiable fonctionne 24h/24 et 7j/7, prêt à gérer les retards ou les départs matinaux avec excellence.",
        "fez-tour-title": "Chauffeur Privé pour Visites de Ville",
        "fez-tour-p1": "Découvrez les secrets de la Médina et au-delà avec notre <strong>chauffeur privé pour les visites</strong>. Déplacez-vous entre les sites historiques avec aisance.",
        "fez-tour-p2": "Votre chauffeur peut vous emmener au <strong>Palais Royal</strong>, aux <strong>Tombeaux des Mérinides</strong>, et à la célèbre <strong>tannerie Chouara</strong>.",
        "fez-tour-p3": "Notre service offre la flexibilité de s'attarder sur les sites. Profitez de l'atmosphère authentique de Fès avec le luxe moderne.",
        "fez-intercity-title": "Transferts Inter-Villes depuis Fès",
        "fez-intercity-p": "Fès sert de plaque tournante pour explorer le nord et le centre du Maroc. Nous fournissons des <strong>transferts inter-villes</strong> de haut niveau.",
        "fez-to-chf-t": "Fès vers Chefchaouen :",
        "fez-to-chf-d": "Le transfert le plus populaire vers la Perle Bleue.",
        "fez-to-rak-t": "Fès vers Marrakech :",
        "fez-to-rak-d": "Un voyage pittoresque à travers le Moyen Atlas.",
        "fez-to-cmn-t": "Fès vers Casablanca :",
        "fez-to-cmn-d": "Transfert efficace vers la capitale économique.",
        "fez-to-mek-t": "Fès vers Meknès :",
        "fez-to-mek-d": "Courts trajets vers la ville impériale voisine.",
        "fez-landmark-title": "Monuments de Fès & Temps de Trajet Culturels",
        "fez-fez": "Aéroport Fès Saïss (FEZ)",
        "fez-gate": "Bab Boujloud (Porte Bleue)",
        "fez-tombs": "Tombeaux des Mérinides",
        "fez-volubilis": "Ruines Romaines de Volubilis",
        "fez-exp-title": "Expériences Spirituelles & Artistiques à Fès",
        "fez-faq-title": "Questions Fréquemment Posées (FAQ Fès)",
        "fez-faq-1-q": "Votre chauffeur privé peut-il entrer dans la Médina de Fès ?",
        "fez-faq-1-a": "La Médina de Fès est piétonne. Notre <strong>chauffeur privé</strong> vous déposera à la porte (Bab) la plus proche de votre hébergement.",
        "fez-faq-2-q": "Proposez-vous une excursion d'une journée à Chefchaouen depuis Fès ?",
        "fez-faq-2-a": "Oui. Notre service de <strong>transport privé Fès</strong> offre un trajet confortable et climatisé aller-retour.",
        "fez-faq-3-q": "Les sièges auto pour enfants sont-ils disponibles pour les longs transferts ?",
        "fez-faq-3-a": "Absolument. Pour les <strong>transferts inter-villes</strong>, nous fournissons gratuitement des sièges de sécurité sur demande.",
        "fez-cta-title": "Découvrez Fès avec Confort et Élégance",
        // Chefchaouen (CHE)
        "che-hero-title": "Chauffeur Privé vers <span class='text-shine-gold'>Chefchaouen</span>",
        "che-hero-subtitle": "Explorez la Perle Bleue du Maroc en toute sérénité",
        "che-intro-title": "Découvrez la Magie de la Ville Bleue",
        "che-intro-p1": "<strong>Safia Transfers</strong> propose un transport privé premium vers Chefchaouen, la célèbre 'Perle Bleue' nichée dans le Rif.",
        "che-intro-p2": "Chefchaouen est le paradis des photographes. Avec un <strong>chauffeur privé</strong>, profitez du trajet et arrivez reposé.",
        "che-routes-title": "Itinéraires Populaires",
        "che-route-fes": "Fès vers Chefchaouen : Un beau trajet de 4h. Arrêt possible aux ruines de Volubilis.",
        "che-route-tng": "Tanger vers Chefchaouen : Un trajet court de 2h, idéal pour une excursion d'une journée.",
        "che-why-title": "Pourquoi Réserver un Chauffeur Privé ?",
        "che-why-safety": "Sécurité & Confort : Des chauffeurs expérimentés connaissant bien les routes de montagne.",
        "che-why-flex": "Flexibilité : Arrêtez-vous pour des photos ou un café quand vous le souhaitez.",
        "che-why-door": "Service Porte-à-Porte : Nous vous déposons au plus près des portes de la Médina.",
        // Sahara Desert (SAH)
        "sah-hero-title": "Chauffeur Privé vers le <span class='text-shine-gold'>Désert du Sahara</span>",
        "sah-hero-subtitle": "Voyagez vers les dunes dorées de Merzouga et Zagora",
        "sah-intro-title": "Découvrez la Majesté des Dunes",
        "sah-intro-p1": "<strong>Safia Transfers</strong> assure des <strong>transferts vers le Sahara</strong> et des circuits de luxe vers Merzouga (Erg Chebbi) et Zagora.",
        "sah-intro-p2": "Le voyage vers le Sahara est long mais spectaculaire. Nos 4x4 et vans de luxe garantissent un confort absolu à travers le Haut Atlas.",
        "sah-routes-title": "Itinéraires vers le Désert",
        "sah-route-rak": "Marrakech vers Merzouga : Un voyage de 3 jours à travers la vallée du Dadès.",
        "sah-route-fes": "Fès vers Merzouga : Une route panoramique via le Moyen Atlas et la vallée du Ziz.",
        "sah-faq-title": "FAQ Voyage au Sahara",
        "sah-faq-1-q": "Combien de temps dure le trajet Marrakech-Merzouga ?",
        "sah-faq-1-a": "Environ 9 heures. Nous conseillons un circuit sur plusieurs jours avec arrêt à Aït Ben Haddou.",
        "sah-cta-title": "Embarquez pour votre Aventure au Sahara",
        // Tangier (TNG)
        "tng-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Tanger</span>",
        "tng-hero-subtitle": "Services de chauffeur de luxe et transferts à Tanger, Maroc",
        "tng-intro-title": "Votre Porte de l'Afrique dans le Confort",
        "tng-intro-p1": "<strong>Safia Transfers</strong> vous accueille à Tanger, porte glamour entre l'Europe et l'Afrique. Notre service de <strong>chauffeur privé à Tanger</strong> est dédié à votre confort.",
        "tng-intro-p2": "Tanger est une ville de vues imprenables. Naviguer dans ses rues nécessite une expertise locale. Notre <strong>chauffeur service Tanger</strong> élimine tout stress.",
        "tng-intro-p3": "Avec nos services de <strong>chauffeur de luxe Tanger</strong>, ponctualité et discrétion sont garanties. Nos chauffeurs s'adaptent à vos besoins.",
        "tng-airport-title": "Transferts Aéroport & Port Tanger",
        "tng-airport-p1": "Arriver à Tanger doit être un plaisir. Notre <strong>transfert aéroport Tanger</strong> couvre l'Aéroport Ibn Battouta (TNG) avec suivi de vol.",
        "tng-airport-p2": "Nous sommes experts en <strong>transferts Port Tanger</strong>. Que ce soit Tanger Ville ou le port géant Tanger Med, nous serons là.",
        "tng-airport-p3": "Pas de marchandage, pas d'attente—juste un transport immédiat et confortable dans une Mercedes-Benz climatisée.",
        "tng-city-title": "Chauffeur Privé pour Affaires & Visites",
        "tng-city-p1": "Découvrez le charme de la Ville Blanche avec un <strong>chauffeur privé</strong>. Visitez les <strong>Grottes d'Hercule</strong>, le <strong>Cap Spartel</strong> ou la Légation Américaine.",
        "tng-city-p2": "Votre chauffeur reste disponible toute la journée. Profitez d'un déjeuner au Café Hafa sans vous soucier du retour.",
        "tng-city-p3": "Pour les clients corporate, nous offrons un salon mobile. Transport fiable vers les Zones Franches et centres d'affaires avec ponctualité.",
        "tng-intercity-title": "Transferts Inter-Villes depuis Tanger",
        "tng-intercity-p": "Tanger est le point de départ idéal pour explorer le nord du Maroc. Nous proposons des <strong>transferts inter-villes</strong> premium.",
        "tng-to-chf-t": "Tanger vers Chefchaouen :",
        "tng-to-chf-d": "Un magnifique trajet vers la Ville Bleue.",
        "tng-to-asi-t": "Tanger vers Asilah :",
        "tng-to-asi-d": "Une courte escapade vers la cité artistique.",
        "tng-to-rak-t": "Tanger vers Marrakech :",
        "tng-to-rak-d": "La grande liaison Nord-Sud.",
        "tng-to-fes-t": "Tanger vers Fès :",
        "tng-to-fes-d": "Voyage vers la capitale spirituelle.",
        "tng-landmark-title": "Monuments de Tanger & Temps de Trajet Côtiers",
        "tng-tng": "Aéroport Ibn Battouta (TNG)",
        "tng-med": "Port Tanger Med",
        "tng-hercules": "Grottes d'Hercule / Cap Spartel",
        "tng-asilah": "Asilah (Ville des Arts)",
        "tng-exp-title": "Expériences Premium à Tanger",
        "tng-faq-title": "Questions Fréquemment Posées (FAQ Tanger)",
        "tng-faq-1-q": "Où le chauffeur me récupère-t-il au Port Tanger Med ?",
        "tng-faq-1-a": "Votre <strong>chauffeur privé</strong> vous attendra à la sortie passagers avec une pancarte personnalisée.",
        "tng-faq-2-q": "Proposez-vous des transferts de Tanger à Chefchaouen ?",
        "tng-faq-2-a": "Oui, nous proposons des trajets <strong>privés Tanger vers Chefchaouen</strong> avec service porte-à-porte complet.",
        "tng-faq-3-q": "Le Wi-Fi est-il disponible dans le véhicule ?",
        "tng-faq-3-a": "Oui, tous nos véhicules premium à Tanger sont équipés du Wi-Fi gratuit haut débit.",
        "tng-cta-title": "Voyagez à Tanger en Confort avec un Chauffeur Professionnel",
        // Rabat (RBA)
        "rba-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Rabat</span>",
        "rba-hero-subtitle": "Services de chauffeur de luxe et transferts à Rabat, Maroc",
        "rba-intro-title": "Transport Exécutif & Services de Chauffeur",
        "rba-intro-p1": "<strong>Safia Transfers</strong> est fier d'offrir des services de <strong>chauffeur privé à Rabat</strong>, adaptés aux besoins de la capitale du Royaume.",
        "rba-intro-p2": "Qu'il s'agisse de visites dans une ambassade ou de sites historiques, notre <strong>service chauffeur Rabat</strong> assure votre mobilité avec professionnalisme.",
        "rba-intro-p3": "Avec nos solutions de <strong>transport exécutif Rabat</strong>, attendez-vous à un véhicule impeccable et un chauffeur poli à votre disposition.",
        "rba-airport-title": "Transferts Aéroport Rabat–Salé",
        "rba-airport-p1": "Vivez une arrivée en douceur avec notre <strong>transfert aéroport Rabat</strong> premium. Évitez les files d'attente des taxis.",
        "rba-airport-p2": "Nous offrons un accueil personnalisé dans le terminal. Nous assurons aussi la liaison avec l'Aéroport Casablanca Mohamed V.",
        "rba-airport-p3": "Notre système de suivi de vol garantit notre présence dès votre atterrissage, peu importe les changements.",
        "rba-city-title": "Chauffeur Privé pour Affaires & Visites",
        "rba-city-p1": "Naviguez dans la capitale avec aisance. Visitez le <strong>Palais Royal</strong>, la Tour Hassan ou la nécropole du Chellah.",
        "rba-city-p2": "Pour nos clients corporate, nos véhicules permettent de travailler au calme. Nous connaissons tous les protocoles diplomatiques.",
        "rba-city-p3": "Les voyageurs peuvent profiter d'une visite détendue de la <strong>Kasbah des Oudayas</strong> et du nouveau Grand Théâtre.",
        "rba-intercity-title": "Transferts Inter-Villes depuis Rabat",
        "rba-intercity-p": "Rabat est parfaitement positionnée pour explorer le reste du Maroc. Nous proposons des <strong>transferts longue distance</strong>.",
        "rba-to-cmn-t": "Rabat vers Casablanca :",
        "rba-to-cmn-d": "Une liaison rapide vers le centre économique.",
        "rba-to-tng-t": "Rabat vers Tanger :",
        "rba-to-tng-d": "Voyagez vers le nord en toute sérénité.",
        "rba-to-fes-t": "Rabat vers Fès :",
        "rba-to-fes-d": "Traversez les plaines agricoles jusqu'à la capitale spirituelle.",
        "rba-to-rak-t": "Rabat vers Marrakech :",
        "rba-to-rak-d": "Un trajet confortable vers la Ville Rouge.",
        "rba-landmark-title": "Monuments de Rabat & Temps de Trajet Exécutifs",
        "rba-rba": "Aéroport Rabat–Salé (RBA)",
        "rba-riad": "Hay Riad / Technopolis",
        "rba-hassan": "Tour Hassan & Mausolée",
        "rba-cmn-b": "Casablanca (Centre d'Affaires)",
        "rba-exp-title": "Logistique Corporate & Diplomatique",
        "rba-faq-title": "Questions Fréquemment Posées (FAQ Rabat)",
        "rba-faq-1-q": "Fournissez-vous des chauffeurs pour les visites diplomatiques ?",
        "rba-faq-1-a": "Oui, nos chauffeurs sont formés à l'étiquette professionnelle et à la discrétion pour les officiels et délégations.",
        "rba-faq-2-q": "Quelle est la distance entre Rabat et l'Aéroport de Casablanca (CMN) ?",
        "rba-faq-2-a": "Le <strong>transfert Rabat-Casablanca</strong> CMN prend environ 1h15 via l'autoroute A1.",
        "rba-faq-3-q": "Le chauffeur peut-il aider avec les réservations de restaurant ?",
        "rba-faq-3-a": "Absolument. Votre <strong>chauffeur de luxe Rabat</strong> connaît les meilleures tables de l'Agdal et de la Marina.",
        "rba-cta-title": "Découvrez Rabat avec Confort et Professionnalisme",
        // Agadir (AGA)
        "aga-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Agadir</span>",
        "aga-hero-subtitle": "Services de chauffeur de luxe et transferts à Agadir, Maroc",
        "aga-intro-title": "Soleil, Mer et Transport Sans Couture",
        "aga-intro-p1": "<strong>Safia Transfers</strong> vous accueille à Agadir, le joyau de la côte sud du Maroc. Célèbre pour sa plage en croissant doré et son ensoleillement annuel, Agadir est une destination de premier plan pour la détente. Notre service de <strong>chauffeur privé à Agadir</strong> garantit que vos vacances commencent dès votre arrivée, offrant une alternative sereine aux bus et taxis bondés.",
        "aga-intro-p2": "Que vous vous rendiez dans un complexe hôtelier sur la promenade, à la recherche de la vague parfaite à Taghazout, ou pour explorer la région Souss-Massa, notre <strong>service chauffeur Agadir</strong> vous offre le confort et la flexibilité que vous méritez.",
        "aga-intro-p3": "Avec nos solutions de <strong>transport de luxe Agadir</strong>, explorez la Kasbah, le Souk El Had et la marina avec style dans nos véhicules Mercedes-Benz climatisés. Nos véhicules offrent un refuge frais face au soleil du sud, conduits par des chauffeurs professionnels dédiés à votre sécurité.",
        "aga-airport-title": "Transferts Aéroport Agadir Al Massira",
        "aga-airport-p1": "Arrivez à votre hôtel rafraîchi avec notre service exclusif de <strong>transfert aéroport Agadir</strong>. Nous offrons un accueil personnalisé à l'Aéroport Al Massira (AGA).",
        "aga-airport-p2": "Votre chauffeur vous attendra dans le hall des arrivées avec une pancarte, prêt à vous aider avec vos bagages et votre équipement de sport (surf, golf).",
        "aga-airport-p3": "Nous suivons votre vol en temps réel pour être là à votre atterrissage. Service porte-à-porte vers Agadir, Taghazout ou Taroudant.",
        "aga-tour-title": "Chauffeur Privé pour Excursions & Surf",
        "aga-tour-p1": "Agadir est la base idéale pour explorer les paysages du sud du Maroc avec un <strong>chauffeur privé pour vos excursions</strong>.",
        "aga-tour-p2": "Profitez d'une route panoramique vers <strong>Paradise Valley</strong> ou visitez <strong>Taghazout</strong>, le célèbre village de surf, dans nos véhicules spacieux.",
        "aga-tour-p3": "Explorez la cité antique de <strong>Taroudant</strong>, souvent appelée 'la petite Marrakech', ou le Parc National de Souss-Massa avec votre chauffeur dédié.",
        "aga-intercity-title": "Transferts Inter-Villes depuis Agadir",
        "aga-to-rak-t": "Agadir vers Marrakech :",
        "aga-to-rak-d": "Transfert fluide par autoroute reliant la plage à la Médina.",
        "aga-to-ess-t": "Agadir vers Essaouira :",
        "aga-to-ess-d": "Une route côtière magnifique vers la Cité des Alizés.",
        "aga-to-cmn-t": "Agadir vers Casablanca :",
        "aga-to-cmn-d": "Liaison longue distance fiable vers le centre économique.",
        "aga-landmark-title": "Monuments d'Agadir & Temps de Trajet",
        "aga-aga": "Aéroport Al Massira (AGA)",
        "aga-tagh": "Taghazout Bay",
        "aga-paradise": "Paradise Valley",
        "aga-kasbah": "Agadir Oufella (Kasbah)",
        "aga-faq-title": "Questions Fréquemment Posées (FAQ Agadir)",
        "aga-faq-1-q": "Vos véhicules peuvent-ils transporter des planches de surf ?",
        "aga-faq-1-a": "Oui, notre flotte comprend des vans Mercedes Classe V équipés pour transporter vos planches et équipements de kite-surf.",
        "aga-faq-2-q": "Quelle est la distance entre Taghazout et l'aéroport d'Agadir ?",
        "aga-faq-2-a": "Le transfert prend environ 50 à 60 minutes via l'autoroute moderne.",
        "aga-faq-3-q": "Proposez-vous des transferts vers Taroudant ?",
        "aga-faq-3-a": "Oui, le trajet vers Taroudant dure environ 1h15 et constitue une excursion d'une journée très prisée.",
        "aga-cta-title": "Profitez d'Agadir avec un Transport Privé Premium",
        // Essaouira (ESU)
        "ess-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Essaouira</span>",
        "ess-hero-subtitle": "Services de chauffeur de luxe et transferts à Essaouira, Maroc",
        "ess-intro-title": "Détendez-vous et Explorez la Cité des Alizés",
        "ess-intro-p1": "<strong>Safia Transfers</strong> vous offre le summum du confort pour vos voyages côtiers avec notre service de <strong>chauffeur privé à Essaouira</strong>.",
        "ess-intro-p2": "Notre <strong>service chauffeur Essaouira</strong> met à votre disposition un véhicule dédié et un chauffeur local pour explorer les remparts et la scène artistique.",
        "ess-intro-p3": "Nous accueillons les couples, familles et voyageurs solo privilégiant sécurité et confort. Notre flotte est idéale pour les routes côtières.",
        "ess-airport-title": "Transferts Aéroport Essaouira Mogador",
        "ess-airport-p1": "Commencez votre séjour sans stress avec notre service de <strong>transfert aéroport Essaouira</strong> depuis l'Aéroport Mogador (ESU).",
        "ess-airport-p2": "Nous organisons votre prise en charge et suivons votre vol pour un accueil personnalisé et un transfert direct vers votre Riad ou hôtel.",
        "ess-airport-p3": "Nous assurons également les liaisons depuis l'Aéroport Marrakech Menara (RAK) vers Essaouira (2h30 de trajet).",
        "ess-tour-title": "Chauffeur Privé pour Visites & Loisirs",
        "ess-tour-p1": "Optimisez votre temps avec un <strong>chauffeur privé pour vos visites</strong>. Découvrez la Sqala du Port ou les ruines de Diabat.",
        "ess-tour-p2": "Un chauffeur privé vous permet de vous rendre à <strong>Sidi Kaouki</strong>, paradis des surfeurs, ou aux coopératives d'huile d'Argan.",
        "ess-tour-p3": "Profitez de la liberté de vous arrêter pour voir les chèvres sur les arbres ou admirer le coucher de soleil sur l'Atlantique.",
        "ess-intercity-title": "Transferts Inter-Villes depuis Essaouira",
        "ess-to-rak-t": "Essaouira vers Marrakech :",
        "ess-to-rak-d": "L'itinéraire le plus demandé, un voyage fluide vers la Ville Rouge.",
        "ess-to-aga-t": "Essaouira vers Agadir :",
        "ess-to-aga-d": "Une route littorale splendide le long de l'Atlantique.",
        "ess-to-cmn-t": "Essaouira vers Casablanca :",
        "ess-to-cmn-d": "Un trajet côtier confortable vers la capitale économique.",
        "ess-landmark-title": "Monuments d'Essaouira & Temps de Trajet",
        "ess-esu": "Aéroport Essaouira Mogador (ESU)",
        "ess-kaouki": "Sidi Kaouki (Surf & Chameaux)",
        "ess-rak": "Marrakech (La Ville Rouge)",
        "ess-imsouane": "Imsouane (La plus longue vague)",
        "ess-faq-title": "Questions Fréquemment Posées (FAQ Essaouira)",
        "ess-faq-1-q": "Où le chauffeur me dépose-t-il dans la Médina d'Essaouira ?",
        "ess-faq-1-a": "Nous vous déposons au plus près des portes (Bab Sbaâ ou Bab Marrakech) et coordonnons avec votre Riad pour vos bagages.",
        "ess-faq-2-q": "Vaut-il mieux atterrir à Marrakech ou à Essaouira ?",
        "ess-faq-2-a": "Atterrir à ESU est rapide, mais RAK offre plus de vols internationaux. Nous assurons le transfert entre les deux en 2h30.",
        "ess-faq-3-q": "Peut-on s'arrêter pour des photos sur la route de Marrakech ?",
        "ess-faq-3-a": "Bien sûr ! Vous avez la flexibilité de vous arrêter aux coopératives d'Argan ou pour voir les chèvres sur les arbres.",
        // Contact (CON)
        "con-hero-title": "Contacter <span class='text-shine-gold'>Safia Transfers</span>",
        "con-hero-subtitle": "Réservez votre chauffeur privé et vos transferts de luxe au Maroc — rapide, facile et fiable.",
        "con-info-title": "Contactez-nous",
        "con-info-p": "Vous recherchez un chauffeur privé au Maroc ? Safia Transfers propose des transferts aéroport de luxe, des trajets en ville et des services de chauffeur longue distance à Marrakech, Casablanca, Rabat, Fès et Tanger. Contactez-nous dès aujourd'hui.",
        "con-wa-title": "WhatsApp (Réponse rapide)",
        "con-phone-title": "Appel téléphonique",
        "con-email-title": "E-mail",
        "con-follow": "Suivez-nous",
        "con-form-title": "Demander un trajet",
        "con-label-name": "Nom complet *",
        "con-label-email": "E-mail *",
        "con-label-phone": "Téléphone / WhatsApp *",
        "con-label-pickup": "Lieu de prise en charge *",
        "con-label-destination": "Destination *",
        "con-label-date": "Date et heure *",
        "con-label-message": "Message (facultatif)",
        "con-placeholder-name": "Votre nom",
        "con-placeholder-email": "Votre e-mail",
        "con-placeholder-phone": "+212...",
        "con-placeholder-pickup": "Hôtel, aéroport, adresse",
        "con-placeholder-destination": "Ville ou lieu spécifique",
        "con-placeholder-message": "Détails du vol, nombre de passagers, demandes spéciales...",
        "con-btn-submit": "Demander mon trajet",
        "con-gdpr": "J'accepte de m'abonner à la newsletter pour recevoir des offres exclusives. Mes données seront traitées conformément au RGPD.",
        "con-follow": "Suivez-nous",
        // Booking (BOO)
        "boo-page-title": "Réserver Chauffeur Privé Maroc | Devis Instantané | Safia Transfers",
        "boo-page-desc": "Réservez facilement votre chauffeur privé au Maroc. Obtenez un devis instantané pour vos transferts aéroport ou circuits personnalisés. Réservation sécurisée.",
        "boo-hero-title": "Réservez votre <span class='text-shine-gold'>Chauffeur Privé</span>",
        "boo-hero-subtitle": "Réservation simple, rapide et sécurisée en quelques étapes",
        "boo-form-title": "Formulaire de réservation",
        "boo-label-name": "Nom complet *",
        "boo-label-email": "E-mail *",
        "boo-label-phone": "Téléphone / WhatsApp *",
        "boo-label-pickup": "Lieu de prise en charge *",
        "boo-label-destination": "Destination *",
        "boo-label-date": "Date et heure *",
        "boo-label-gdpr": "J'accepte le traitement de mes données à des fins de réservation.",
        "boo-btn-submit": "Confirmer la réservation",
        "boo-placeholder-name": "Votre nom",
        "boo-placeholder-email": "votre@email.com",
        "boo-placeholder-phone": "+212...",
        "boo-placeholder-pickup": "Aéroport, Hôtel, Adresse...",
        "boo-placeholder-destination": "Ville ou lieu spécifique",
        "boo-why-title": "Pourquoi c'est simple",
        "boo-why-fast-t": "Réponse rapide",
        "boo-why-fast-p": "Réponses rapides sur WhatsApp.",
        "boo-why-price-t": "Prix Fixes",
        "boo-why-price-p": "Tarification transparente sans frais cachés.",
        "boo-why-avail-t": "Disponibilité 24/7",
        "boo-why-avail-p": "Nous sommes toujours là pour vous.",
        "boo-why-secure-t": "Sûr & Privé",
        "boo-why-secure-p": "Votre sécurité et votre vie privée sont notre priorité.",
        "boo-cta-title": "Prêt à réserver votre chauffeur privé au Maroc ?",
        "boo-cta-btn": "Réserver maintenant sur WhatsApp",
        // Marrakech (RAK)
        "rak-page-title": "Chauffeur Privé à Marrakech | Transferts de Luxe & Service VTC | Safia",
        "rak-page-desc": "Chauffeur privé professionnel à Marrakech proposant des transferts aéroport, des visites de la ville et des transferts longue distance à travers le Maroc avec des véhicules de luxe.",
        "rak-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Marrakech</span>",
        "rak-hero-subtitle": "Services de chauffeur de luxe et transferts à Marrakech, Maroc",
        "rak-intro-title": "Vivez Marrakech dans le Luxe et le Confort",
        "rak-intro-p1": "Bienvenue chez <strong>Safia Transfers</strong>, votre premier choix pour un <strong>chauffeur privé à Marrakech</strong>. Connue sous le nom de Ville Rouge, Marrakech est une tapisserie vibrante d'histoire, de culture et d'expériences sensorielles. Naviguer dans ses rues animées et ses merveilles environnantes nécessite non seulement un véhicule, mais un chauffeur professionnel qui comprend les nuances du voyage local.",
        "rak-intro-p2": "Nous sommes spécialisés dans la fourniture de <strong>services de chauffeur haut de gamme à Marrakech</strong> pour les voyageurs exigeants qui apprécient la ponctualité, la sécurité et le confort. Que vous visitiez pour affaires, des vacances en famille ou une escapade romantique, notre flotte de véhicules de luxe garantit que votre voyage soit aussi mémorable que la destination elle-même. Oubliez les tracas de la négociation avec les taxis ou de la navigation dans les transports en commun ; avec notre service de <strong>transport privé Marrakech</strong>, vous voyagez selon vos propres termes, avec un chauffeur dédié à votre disposition.",
        "rak-intro-p3": "Notre engagement envers l'excellence signifie que vous recevez une attention personnalisée dès votre réservation. Nous offrons des conseils précieux sur les attractions locales, une assistance avec les bagages et la flexibilité d'ajuster votre itinéraire comme vous le souhaitez. Choisissez le meilleur <strong>chauffeur de luxe que Marrakech</strong> a à offrir et élevez votre aventure marocaine.",
        "rak-why-title": "Pourquoi Choisir un Chauffeur Privé vs Taxi à Marrakech ?",
        "rak-why-p": "Les voyageurs se demandent souvent quel est le meilleur moyen de se déplacer. Bien que les &lsquo;Petits Taxis&rsquo; soient courants, ils peuvent être imprévisibles en termes de prix et de confort. Voici pourquoi un <strong>chauffeur privé à Marrakech</strong> est le choix supérieur pour votre tranquillité d'esprit :",
        "p-fixed-prices": "Prix Fixes :",
        "desc-fixed-prices": "Pas de négociation ni de suppléments inattendus. Nos tarifs pour les <strong>transferts aéroport de Marrakech</strong> et les visites de la ville sont convenus à l'avance.",
        "p-comfort-ac": "Confort & Climatisation :",
        "desc-comfort-ac": "Il peut faire très chaud à Marrakech. Notre flotte de luxe (Mercedes Classe V, Vito, Classe E) garantit un environnement frais et sans poussière.",
        "p-safety": "Sécurité & Fiabilité :",
        "desc-safety": "Nos chauffeurs sont des professionnels agréés qui suivent des protocoles de sécurité stricts. Vous évitez la conduite erratique souvent associée aux transports publics.",
        "p-door-to-door": "Service Porte à Porte :",
        "desc-door-to-door": "Nous vous récupérons à votre Riad ou hôtel et vous déposons exactement là où vous devez être, en manipulant vos bagages avec soin.",
        "rak-airport-title": "Transferts Aéroport Marrakech Menara (RAK)",
        "rak-airport-p1": "Arriver dans une nouvelle ville peut être stressant, mais notre service de <strong>transfert aéroport de Marrakech</strong> est conçu pour rendre votre arrivée fluide. Nos chauffeurs professionnels suivent l'état de votre vol en temps réel pour s'assurer qu'ils sont là quand vous atterrissent, quels que soient les retards.",
        "rak-airport-p2": "À votre arrivée à l'Aéroport Marrakech Menara (RAK), votre chauffeur privé vous accueillera dans le hall des arrivées avec une pancarte personnalisée. Nous fournissons une assistance complète pour les bagages et vous escortons directement vers votre véhicule de luxe en attente. Pas de file d'attente pour les taxis, pas de frais cachés — juste un trajet fluide et climatisé directement vers votre hôtel, Riad dans la Médina ou complexe à la Palmeraie.",
        "rak-airport-p3": "Pour les départs, nous nous assurons que vous arriviez à l'aéroport avec suffisamment de temps pour l'enregistrement, vous permettant de vous détendre et de profiter de vos derniers moments dans la ville. Notre service fiable de <strong>navette aéroport Marrakech</strong> fonctionne 24h/24 et 7j/7, accueillant les vols tôt le matin et les arrivées tard le soir avec le même professionnalisme.",
        "rak-exp-title": "Top 5 des Expériences de Luxe avec Votre Chauffeur Privé",
        "rak-exp-p": "Découvrez les secrets de la Ville Rouge avec notre liste sélectionnée de lieux incontournables, facilement accessibles avec votre <strong>transport de luxe Marrakech</strong> :",
        "rak-exp-1-t": "Jardin Majorelle & Musée YSL :",
        "rak-exp-1-d": "Évitez la foule avec un dépôt tôt le matin à ce chef-d'Å“uvre botanique.",
        "rak-exp-2-t": "Dîner dans le Désert d'Agafay :",
        "rak-exp-2-d": "Vivez un coucher de soleil magique et un dîner dans le désert de pierre, à seulement 45 minutes du centre-ville.",
        "rak-exp-3-t": "Shopping Privé dans les Souks :",
        "rak-exp-3-d": "Laissez-nous vous déposer aux portes les plus pratiques pour une séance de shopping sans tracas.",
        "rak-exp-4-t": "Transferts de Golf :",
        "rak-exp-4-d": "Nous fournissons des vans spacieux pour vos clubs et vous transportons vers les meilleurs parcours.",
        "rak-exp-5-t": "Excursion dans les Montagnes de l'Atlas :",
        "rak-exp-5-d": "Échappez à la chaleur avec une excursion privée d'une journée dans la vallée de l'Ourika ou à Imlil.",
        "rak-city-title": "Transferts Inter-Villes depuis Marrakech",
        "rak-city-p": "Marrakech est la porte d'entrée idéale pour le reste du Maroc. Nous proposons des <strong>transferts longue distance</strong> premium vers toutes les grandes villes et destinations. Voyagez dans le confort d'un van ou d'une berline Mercedes-Benz haut de gamme, en profitant des paysages changeants du Maroc sans le stress de conduire vous-même.",
        "rak-city-1-t": "Marrakech vers Casablanca :",
        "rak-city-1-d": "Un transfert fluide de 2h30 sur autoroute.",
        "rak-city-2-t": "Marrakech vers Essaouira :",
        "rak-city-2-d": "Un trajet panoramique de 3 heures vers la ville côtière des alizés.",
        "rak-city-3-t": "Marrakech vers Fès :",
        "rak-city-3-d": "Voyage à travers les montagnes du Moyen Atlas (env. 6-7 heures).",
        "rak-city-4-t": "Marrakech vers Agadir :",
        "rak-city-4-d": "Voyage vers le sud (3 heures) via l'autoroute.",
        "rak-city-5-t": "Marrakech au Désert du Sahara :",
        "rak-city-5-d": "Embarquez pour une aventure vers Merzouga ou Zagora. Nous recommandons un circuit de 3 jours pour profiter pleinement de cette expérience avec chauffeur fiable.",
        "rak-why-title-2": "Pourquoi Choisir Notre Chauffeur Privé à Marrakech ?",
        "rak-faq-title": "Questions Fréquemment Posées (FAQ Marrakech)",
        "rak-faq-1-q": "Combien coûte un chauffeur privé à Marrakech ?",
        "rak-faq-1-a": "Les prix varient en fonction du véhicule de luxe choisi et de la durée de votre voyage. Un simple <strong>transfert aéroport de Marrakech (RAK)</strong> commence à un tarif fixe compétitif, tandis qu'une mise à disposition d'un <strong>chauffeur privé</strong> pour la journée entière (8 heures) est tarifée pour offrir une grande valeur pour un service de luxe premium. Contactez-nous via WhatsApp pour un devis personnalisé instantané.",
        "rak-faq-2-q": "Votre chauffeur privé peut-il venir me chercher directement dans la Médina ?",
        "rak-faq-2-a": "Oui. Cependant, comme les voitures et vans de luxe ne peuvent pas entrer dans les rues les plus étroites de la <strong>Médina de Marrakech</strong>, notre chauffeur vous accueillera au \"Bab\" (Porte) ou au parking le plus proche de votre Riad. Nous pouvons également coordordonner directement avec le personnel de votre Riad pour aider avec le service de portier pour une expérience fluide.",
        "rak-faq-3-q": "Dois-je réserver mon transfert à l'avance ?",
        "rak-faq-3-a": "Nous vous recommandons vivement de réserver votre <strong>service de transfert VIP</strong> au moins 24 heures à l'avance, en particulier pendant les hautes saisons touristiques au Maroc (Printemps et Automne), afin de garantir la disponibilité de votre véhicule haut de gamme préféré.",
        "rak-faq-4-q": "Est-il sûr d'engager un chauffeur privé au Maroc ?",
        "rak-faq-4-a": "Absolument. C'est le moyen le plus sûr et le plus confortable de voyager. Tous nos <strong>chauffeurs au Maroc</strong> sont des professionnels dont les antécédents ont été vérifiés et qui sont hautement expérimentés. Nos véhicules de luxe sont inspectés régulièrement. Vous évitez les risques de fatigue au volant ou de navigation dans un trafic chaotique, garantissant un voyage relaxant.",
        "rak-cta-title": "Voyagez à Marrakech avec Confort et Confiance",
        "rak-cta-subtitle": "Prêt à réserver votre transfert privé ?",
        "rak-btn-quote": "Obtenez Votre Devis Maintenant",
        "btn-book-intercity": "Réserver un Transfert Inter-villes",
        // Casablanca (CMN)
        "cmn-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Casablanca</span>",
        "cmn-hero-subtitle": "Services de chauffeur de luxe et transferts à Casablanca, Maroc",
        "cmn-intro-title": "Transport Professionnel Affaires & Loisirs",
        "cmn-intro-p1": "En tant que cÅ“ur économique du Maroc, Casablanca exige un niveau de service de transport qui reflète son dynamisme et sa sophistication. <strong>Safia Transfers</strong> fournit un service de premier ordre de <strong>chauffeur privé à Casablanca</strong>, sur mesure pour les professionnels, les diplomates et les voyageurs de loisirs qui refusent de compromettre la qualité.",
        "cmn-intro-p2": "Naviguer dans la plus grande ville du Maroc peut être un défi pour les non-initiés. Les embouteillages et les itinéraires inconnus peuvent causer un stress inutile. Notre <strong>service de chauffeur à Casablanca</strong> offre l'antidote parfait : une expérience de voyage fiable, confortable et efficace. Que vous vous précipitiez pour une réunion dans le quartier financier ou que vous vous dirigiez vers un dîner en bord de mer sur la Corniche, nos solutions de <strong>transport d'affaires Casablanca</strong> garantissent que vous arriviez à l'heure et avec style.",
        "cmn-intro-p3": "Nous comprenons que pour nos clients, le temps est un luxe. C'est pourquoi la ponctualité, la discrétion et l'optimisation des itinéraires sont les piliers de notre offre. Avec un <strong>chauffeur de luxe Casablanca</strong> à votre service, votre véhicule devient un bureau mobile ou un sanctuaire de détente au milieu de l'énergie de la ville.",
        "cmn-airport-title": "Transferts Aéroport Casablanca Mohammed V",
        "cmn-airport-p1": "Commencez votre voyage du bon pied avec notre service fluide de <strong>transfert aéroport Casablanca</strong>. L'Aéroport International Mohammed V (CMN) est la porte d'entrée la plus fréquentée du Maroc, mais votre arrivée ne doit pas être chaotique.",
        "cmn-airport-p2": "Votre chauffeur privé surveillera votre vol en temps réel et vous accueillera au terminal des arrivées avec une pancarte personnalisée. Nous vous assistons avec vos bagages et vous guidons rapidement vers votre véhicule Mercedes-Benz en attente. De là, profitez d'un transfert en douceur vers votre hôtel, votre bureau ou toute destination du centre-ville.",
        "cmn-airport-p3": "Nous sommes également spécialisés dans les transferts entre terminaux et les liaisons inter-villes directement depuis l'aéroport. Oubliez les tracas des taxis d'aéroport ou les incertitudes des applications de VTC. Notre <strong>navette aéroport VIP</strong> assure confidentialité, confort suprême et une tarification fixe convenue à l'avance.",
        "cmn-city-title": "Chauffeur Privé pour Affaires & Visites",
        "cmn-city-p1": "Maximisez votre productivité ou votre temps libre avec un <strong>chauffeur privé dédié pour les visites et les affaires</strong>. Casablanca n'est pas seulement un centre d'affaires ; elle abrite des merveilles architecturales comme la <strong>Mosquée Hassan II</strong>, le quartier Art Déco et le vibrant quartier des Habous.",
        "cmn-city-p2": "Pour les voyageurs d'affaires, notre service offre la fiabilité dont vous avez besoin. Gardez vos effets personnels en sécurité dans le véhicule entre les réunions, chargez vos appareils en route et préparez votre prochain rendez-vous dans un environnement calme et climatisé. Nous nous occupons des tournées promotionnelles, des visites d'ambassades et de la logistique exécutive avec une discrétion absolue.",
        "cmn-city-p3": "Pour les voyageurs de loisirs, explorez l'incroyable <strong>Corniche Ain Diab</strong>, visitez le Morocco Mall ou découvrez l'Ancienne Médina. Votre chauffeur reste à votre disposition, éliminant les temps d'attente et assurant que vous vous déplaciez sans effort d'un monument à l'autre.",
        "cmn-intercity-title": "Transferts Inter-Villes depuis Casablanca",
        "cmn-intercity-p": "La situation centrale de Casablanca en fait le point de départ idéal pour explorer le Royaume. Nous proposons des <strong>transferts longue distance</strong> confortables vers toutes les grandes villes marocaines, offrant une alternative sans stress aux trains ou aux vols intérieurs.",
        "cmn-to-rak-t": "Casablanca à Marrakech :",
        "cmn-to-rak-d": "Un transfert rapide par autoroute vers la Ville Rouge.",
        "cmn-to-rba-t": "Casablanca à Rabat :",
        "cmn-to-rba-d": "Rejoignez la capitale en moins d'une heure avec un confort exécutif.",
        "cmn-to-fes-t": "Casablanca à Fès :",
        "cmn-to-fes-d": "Voyage vers la capitale spirituelle à travers les paysages intérieurs pittoresques.",
        "cmn-to-tng-t": "Casablanca à Tanger :",
        "cmn-to-tng-d": "Dirigez-vous vers le nord, porte de l'Europe, avec un trajet fluide.",
        "cmn-landmark-title": "Monuments Clés & Temps de Trajet à Casablanca",
        "cmn-landmark-p": "Maximisez votre temps dans la ville avec notre service efficace de <strong>chauffeur privé</strong>. Voici les temps de trajet estimés depuis le centre-ville (Maarif/Gauthier) dans nos véhicules de luxe :",
        "cmn-cmn": "Aéroport Mohammed V (CMN)",
        "cmn-mosque": "Mosquée Hassan II",
        "cmn-mall": "Morocco Mall",
        "cmn-twin": "Twin Center / Maarif",
        "cmn-local-title": "Expériences Locales Uniques à Casablanca",
        "cmn-local-p": "Au-delà des affaires, laissez votre <strong>chauffeur privé</strong> vous faire découvrir les joyaux cachés de la Ville Blanche :",
        "cmn-local-1-t": "Rick's Café :",
        "cmn-local-1-d": "Revivez l'ambiance du film classique.",
        "cmn-local-2-t": "Quartier des Habous :",
        "cmn-local-2-d": "Découvrez l'artisanat traditionnel et les pâtisseries.",
        "cmn-local-3-t": "Corniche Ain Diab :",
        "cmn-local-3-d": "Profitez d'une promenade au coucher du soleil.",
        "cmn-faq-title": "Questions Fréquemment Posées (FAQ Casablanca)",
        "cmn-faq-1-q": "Où me récupérez-vous exactement à l'aéroport de Casablanca (CMN) ?",
        "cmn-faq-1-a": "Votre <strong>chauffeur privé</strong> vous attendra dès votre sortie des formalités douanières, dans le hall des arrivées du Terminal 1 ou 2, en tenant bien en vue une pancarte à votre nom. Nous suivons votre vol en temps réel, donc les retards ne sont jamais un problème pour votre <strong>transfert aéroport Casablanca</strong>.",
        "cmn-faq-2-q": "Puis-je réserver un chauffeur pour une journée de réunions d'affaires ?",
        "cmn-faq-2-a": "Absolument. Notre service de transport VIP \"Mise à Disposition\" est extrêmement populaire auprès des voyageurs d'affaires à <strong>Casablanca</strong>. Vous bénéficiez d'un véhicule de luxe dédié (type Mercedes Classe E ou Classe V) et de votre propre <strong>chauffeur professionnel</strong> pendant 8 à 12 heures pour vous conduire en toute sécurité de rendez-vous en rendez-vous.",
        "cmn-faq-3-q": "Est-il plus rapide de prendre le train pour Marrakech plutôt qu'une voiture ?",
        "cmn-faq-3-a": "Le train prend environ 2h40 vers Marrakech mais nécessite en plus de se rendre aux gares avec vos bagages. Un <strong>transfert privé Casablanca-Marrakech</strong> prend à peine 2h30 de porte à porte. Il offre beaucoup plus de confidentialité, de confort (pas de manutention de valises), et de flexibilité dans vos horaires.",
        "cmn-faq-4-q": "Vos chauffeurs de luxe parlent-ils étranger ?",
        "cmn-faq-4-a": "Oui, tous nos chauffeurs desservant la capitale économique et ses alentours parlent couramment anglais, français et arabe. Cela nous permet d'assurer une communication fluide et personnalisée avec notre clientèle internationale exigeante.",
        "cmn-cta-title": "Voyagez à Casablanca avec Confort et Professionnalisme",
        "cmn-cta-subtitle": "Prêt à réserver votre transfert privé ?",
        "cmn-time-cmn": "35 - 45 Minutes",
        "cmn-time-mosque": "15 - 20 Minutes",
        "cmn-time-mall": "25 - 30 Minutes",
        "cmn-time-twin": "5 - 10 Minutes",
        "btn-book-tour": "Réservez Votre Visite de Ville",
        "cmn-why-title": "Pourquoi Choisir Notre Chauffeur Privé à Casablanca ?",
        "f-professionalism-t": "Professionnalisme",
        "f-professionalism-d": "Nos chauffeurs anglophones sont formés pour servir une clientèle internationale avec les plus hauts standards.",
        "f-pricing-t": "Tarification Transparente Fixe",
        "f-pricing-d": "Comptabilité d'entreprise facilitée. Des devis clairs et tout compris à l'avance, sans frais cachés.",
        "btn-book-tour": "Book Your City Tour",
        "cmn-why-title": "Why Choose Our Private Chauffeur in Casablanca?",
        "f-professionalism-t": "Professionalism",
        "f-professionalism-d": "Our English-speaking chauffeurs are trained to serve an international clientele with the highest standards.",
        "f-pricing-t": "Transparent Fixed Pricing",
        "f-pricing-d": "Easy corporate accounting. Clear, all-inclusive quotes upfront, with no hidden fees.",
        "f-luxury-t": "Luxury Comfort",
        "f-luxury-d": "Our fleet includes the latest Mercedes-Benz models, ensuring a prestigious ride every time.",
        "f-available-t": "24/7 Support",
        "f-available-d": "Late arrivals or early morning meetings? We operate 24 hours a day to support your busy schedule.",
        "nav-booking-process": "Booking Process",
        "nav-contact-us": "Contact Us",
        // Agadir (AGA)
                "aga-page-title": "Chauffeur Privé à Agadir | Transferts de Luxe & Service VTC",
        "aga-page-desc": "Chauffeur privé professionnel à Agadir proposant des transferts aéroport, un transport vers les stations balnéaires, des visites de la ville et des transferts longue distance vers Marrakech et au-delà.",
        "aga-hero-title": "Chauffeur Privé à <span class='text-shine-gold'>Agadir</span>",
        "aga-hero-subtitle": "Services de chauffeur de luxe et transferts à Agadir, Maroc",
        "aga-intro-title": "Soleil, Mer et Transport Sans Couture",
        "aga-intro-p1": "<strong>Safia Transfers</strong> vous souhaite la bienvenue à Agadir, le joyau de la côte sud du Maroc. Célèbre pour sa plage en croissant de lune dorée et son ensoleillement toute l'année. Notre <strong>service de chauffeur privé à Agadir</strong> garantit que vos vacances commencent dès votre atterrissage.",
        "aga-intro-p2": "Que vous vous rendiez dans un complexe sur la promenade, à Taghazout pour le surf parfait, ou que vous exploriez la région de Souss-Massa, notre <strong>service de chauffeur Agadir</strong> offre le confort et la flexibilité que vous méritez.",
        "aga-intro-p3": "Avec nos solutions de <strong>transport de luxe à Agadir</strong>, vous pouvez explorer la Kasbah, le Souk El Had et la marina avec style. Nos véhicules Mercedes-Benz climatisés offrent un havre de fraîcheur.",
        "aga-airport-title": "Transferts Aéroport Agadir Al Massira",
        "aga-airport-p1": "Arrivez à votre hôtel rafraîchi avec notre service exclusif de <strong>transfert aéroport Agadir</strong>. L'aéroport d'Agadir Al Massira (AGA) est situé à environ 25 km du centre-ville.",
        "aga-airport-p2": "Nous proposons un service d'accueil premium. Votre chauffeur vous attendra dans le hall des arrivées avec une pancarte personnalisée.",
        "aga-airport-p3": "Les retards de vol arrivent. Nous surveillons l'état de votre vol en temps réel, afin que votre chauffeur soit toujours là au moment de votre atterrissage.",
        "aga-tour-title": "Chauffeur Privé pour Excursions et Surf",
        "aga-tour-p1": "Agadir est la base idéale pour explorer les divers paysages du sud du Maroc. Avec un <strong>chauffeur privé pour des excursions d'une journée</strong>, vous pouvez découvrir des trésors cachés.",
        "aga-tour-p2": "Faites un trajet pittoresque jusqu'à la <strong>Vallée du Paradis</strong>. Visitez <strong>Taghazout</strong>, le village de surf de renommée mondiale.",
        "aga-tour-p3": "Explorez l'ancienne ville fortifiée de <strong>Taroudant</strong>. Votre chauffeur privé agit comme votre guide personnel.",
        "aga-intercity-title": "Transferts Inter-Villes depuis Agadir",
        "aga-intercity-p": "Besoin de voyager au-delà de la côte ? Nous proposons des <strong>transferts longue distance</strong> sûrs et confortables depuis Agadir.",
        "aga-to-rak-t": "Agadir à Marrakech :",
        "aga-to-rak-d": "Un transfert sur autoroute fluide vers la Ville Rouge, reliant la plage à la Médina.",
        "aga-to-ess-t": "Agadir à Essaouira :",
        "aga-to-ess-d": "Un trajet côtier époustouflant vers le nord jusqu'à la ville des alizés.",
        "aga-to-cmn-t": "Agadir à Casablanca :",
        "aga-to-cmn-d": "Un transfert longue distance fiable vers le centre d'affaires.",
        "aga-landmark-title": "Lieux Emblématiques et Temps de Trajet à Agadir",
        "aga-aga": "Aéroport Al Massira (AGA)",
        "aga-tagh": "Baie de Taghazout",
        "aga-paradise": "Vallée du Paradis",
        "aga-kasbah": "Agadir Oufella (Kasbah)",
        "aga-faq-title": "Foire Aux Questions (FAQ Agadir)",
        "aga-faq-1-q": "Vos véhicules peuvent-ils transporter des planches de surf ?",
        "aga-faq-1-a": "Oui, notre flotte comprend des Mercedes V-Class spacieux avec suffisamment d'espace intérieur pour transporter vos planches.",
        "aga-faq-2-q": "À quelle distance se trouve Taghazout de l'aéroport d'Agadir ?",
        "aga-faq-2-a": "Le transfert prend environ 50 à 60 minutes selon la circulation. Notre tarif fixe garantit un prix compétitif.",
        "aga-faq-3-q": "Proposez-vous des transferts vers Taroudant ?",
        "aga-faq-3-a": "Oui. Le trajet vers la \"Petite Marrakech\" dure environ 1h15.",
        "aga-cta-title": "Profitez d'Agadir avec un Transport Privé Premium",
        "aga-why-title": "Pourquoi Choisir notre Chauffeur Privé à Agadir ?",
        "f-experts-t": "Experts en Tourisme",
        "f-experts-d": "Nous comprenons les besoins des vacanciers, des golfeurs et des amateurs d'aventure en plein air.",
        "f-climate-t": "Luxe Climatisé",
        "f-climate-d": "Restez au frais malgré la chaleur d'Agadir grâce à nos véhicules climatisés.",
        "f-capacity-t": "Grande Capacité",
        "f-capacity-d": "Pas de supplément pour les sacs de golf ou bagages encombrants.",
        "btn-book-tour-wa": "Réservez Votre Excursion dans le Sud",
        "aga-local-title": "Expériences d'Arganier et de la Côte",
        "aga-local-p": "Découvrez la diversité de la région Souss-Massa avec votre <strong>chauffeur privé à Agadir</strong> :",
        "aga-local-1-t": "Coopératives d'Huile d'Argan :",
        "aga-local-1-d": "Visitez d'authentiques coopératives dans l'arrière-pays et observez les chèvres.",
        "aga-local-2-t": "Parc National de Souss-Massa :",
        "aga-local-2-d": "Observez les ibis chauves dans ce paradis des ornithologues.",
        "aga-local-3-t": "Plage de Legzira :",
        "aga-local-3-d": "Une excursion pour voir les immenses arches de pierre naturelle.",
        "aga-local-4-t": "Transferts Golf :",
        "aga-local-4-d": "Service porte-à-porte pour le Golf du Soleil ou le Golf Les Dunes.",
        // Shared feature cards
        "f-lang-fr-t": "Chauffeur Francophone",
        "f-lang-fr-d": "Une communication claire est essentielle. Nos chauffeurs parlent couramment français et anglais, garantissant que vos besoins sont compris.",
        "f-safe-t": "Fiable & Sûr",
        "f-safe-d": "Votre sécurité est notre priorité. Nos chauffeurs sont des professionnels agréés avec une grande expérience sur les routes marocaines.",
        "btn-book-whatsapp": "Réservez Votre Chauffeur Privé sur WhatsApp",
        "nav-booking-process": "Processus de Réservation"
    },
        // ------------- MISSING FR KEYS -------------
        "ser-expect-h": "Ce Que Vous Pouvez Attendre",
        "ser-expect-1": "Chauffeur professionnel et expérimenté",
        "ser-expect-2": "Véhicules propres, confortables et bien entretenus",
        "ser-expect-3": "Service anglophone et francophone",
        "ser-expect-4": "Prix fixe sans frais cachés",
        "ser-expect-5": "Disponibilité 24/7",
        
        "tng-exp-1-t": "Promenade dans l'Ancienne Médina :",
        "tng-exp-1-d": "Dépose au pied des portes de la Kasbah.",
        "tng-exp-2-t": "Phare du Cap Spartel :",
        "tng-exp-2-d": "Là où l'Atlantique rencontre la Méditerranée.",
        "tng-exp-3-t": "Marina de Tanger :",
        "tng-exp-3-d": "Transport de luxe vers les clubs et la restauration d'élite.",
        "tng-landmark-p": "Rejoignez facilement les lieux clés autour de Tanger avec nos services.",

        "fez-exp-1-t": "Quartier de la Céramique :",
        "fez-exp-1-d": "Visitez les célèbres ateliers de zellige.",
        "fez-exp-2-t": "Portes du Palais Royal :",
        "fez-exp-2-d": "Séance photo aux Sept Portes.",
        "fez-exp-3-t": "Borj Nord :",
        "fez-exp-3-d": "Explorez la forteresse surplombant la ville.",

        "rba-exp-1-t": "Transferts Ambassades",
        "rba-exp-1-d": "Service diplomatique avec attente.",
        "rba-exp-2-t": "Golf Royal Dar Essalam",
        "rba-exp-2-d": "Transport de luxe pour une expérience de golf premium."

};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'META') {
                element.setAttribute('content', translations[lang][key]);
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && translations[lang] && translations[lang][titleEl.getAttribute('data-i18n')]) {
        document.title = translations[lang][titleEl.getAttribute('data-i18n')];
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    updateWhatsAppLinks(lang);

    if (typeof initWhatsAppBot === 'function') {
        initWhatsAppBot();
    }
}

function initLanguage() {
    let lang = 'en';
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = navigator.language ? navigator.language.split('-')[0] : 'en';
    lang = savedLang || (['en', 'fr'].includes(browserLang) ? browserLang : 'en');
    
    createLanguageSwitcher(lang);
    setLanguage(lang);
}

function createLanguageSwitcher(activeLang) {
    if (document.querySelector('.lang-switcher')) return;
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    const langs = [{ code: 'en', label: 'EN' }, { code: 'fr', label: 'FR' }];
    langs.forEach(lang => {
        const btn = document.createElement('div');
        btn.className = `lang-btn ${lang.code === activeLang ? 'active' : ''}`;
        btn.setAttribute('data-lang', lang.code);
        btn.innerHTML = `<i class="fas fa-globe"></i> ${lang.label}`;
        btn.onclick = () => { setLanguage(lang.code); };
        switcher.appendChild(btn);
    });
    document.body.appendChild(switcher);
}

function updateWhatsAppLinks(lang) {
    const links = document.querySelectorAll('a[href*="wa.me"]');
    const msg = lang === 'fr' ? "Bonjour ! Je souhaite me renseigner sur une reservation." : "Hello! I'd like to inquire about a booking.";
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes('?text=')) {
            const baseUrl = href.split('?text=')[0];
            link.setAttribute('href', `${baseUrl}?text=${encodeURIComponent(msg)}`);
        } else if (href.includes('wa.me/')) {
            link.setAttribute('href', `${href}?text=${encodeURIComponent(msg)}`);
        }
    });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLanguage);
else initLanguage();


if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) scrollTopBtn.classList.add('show');
        else scrollTopBtn.classList.remove('show');
    });
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const canvas = document.getElementById('bg-canvas');
let ctx, particlesArray = [], mouse = { x: null, y: null, radius: null };
if (canvas) {
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.width / 80);
    window.addEventListener('mousemove', (event) => { mouse.x = event.x; mouse.y = event.y; });
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = (canvas.height / 80) * (canvas.width / 80);
        if (typeof init === 'function') init();
    });
    class Particle {
        constructor(x, y, dx, dy, size, color) {
            this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.size = size; this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
            if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
            let dist = Math.sqrt((mouse.x - this.x)**2 + (mouse.y - this.y)**2);
            if (dist < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 10;
                if (mouse.x > this.x && this.x > this.size * 10) this.x -= 10;
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 10;
                if (mouse.y > this.y && this.y > this.size * 10) this.y -= 10;
            }
            this.x += this.dx; this.y += this.dy;
            this.draw();
        }
    }
    function init() {
        particlesArray = [];
        let num = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < num; i++) {
            let size = Math.random() * 3 + 1, x = Math.random() * (innerWidth - size * 4) + size * 2, y = Math.random() * (innerHeight - size * 4) + size * 2;
            let dx = Math.random() * 2 - 1, dy = Math.random() * 2 - 1;
            const colors = ['rgba(212, 175, 55, 0.5)', 'rgba(255, 255, 255, 0.3)', 'rgba(212, 175, 55, 0.2)'];
            particlesArray.push(new Particle(x, y, dx, dy, size, colors[Math.floor(Math.random() * colors.length)]));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        particlesArray.forEach(p => p.update());
    }
    init(); animate();
}

function initAlbumSliders() {
    document.querySelectorAll('.album-container').forEach(slider => {
        const slides = slider.querySelectorAll('.album-slide'), dots = slider.querySelectorAll('.dot');
        const next = slider.querySelector('.album-next'), prev = slider.querySelector('.album-prev');
        let current = 0;
        function update() { slides.forEach((s, i) => { s.classList.toggle('active', i === current); if (dots[i]) dots[i].classList.toggle('active', i === current); }); }
        if (next) next.addEventListener('click', () => { current = (current + 1) % slides.length; update(); });
        if (prev) prev.addEventListener('click', () => { current = (current - 1 + slides.length) % slides.length; update(); });
        if (dots) dots.forEach((dot, i) => dot.addEventListener('click', () => { current = i; update(); }));
        let interval = setInterval(() => { current = (current + 1) % slides.length; update(); }, 4000);
        slider.addEventListener('mouseenter', () => clearInterval(interval));
        slider.addEventListener('mouseleave', () => { interval = setInterval(() => { current = (current + 1) % slides.length; update(); }, 4000); });
    });
}
document.addEventListener('DOMContentLoaded', initAlbumSliders);

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length === 0) return;
    let current = 0;
    setInterval(() => { slides[current].classList.remove('active'); current = (current + 1) % slides.length; slides[current].classList.add('active'); }, 5000);
}
document.addEventListener('DOMContentLoaded', initHeroSlider);

function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        const q = item.querySelector('.faq-question');
        if (q) q.addEventListener('click', () => {
            const active = item.classList.contains('active');
            items.forEach(i => i.classList.remove('active'));
            if (!active) item.classList.add('active');
        });
    });
}
document.addEventListener('DOMContentLoaded', initFAQ);

function toggleService(id, btn) {
    const content = document.getElementById(id);
    if (!content) return;
    content.classList.toggle('active'); btn.classList.toggle('active');
    const span = btn.querySelector('span');
    if (span) span.textContent = content.classList.contains('active') ? 'View Less' : 'View More Details';
}

function checkHashForService() {
    const hash = window.location.hash.substring(1);
    if (hash && hash.endsWith('-details')) {
        const el = document.getElementById(hash);
        if (el) {
            const btn = el.nextElementSibling;
            if (btn && btn.classList.contains('service-expand-btn')) {
                toggleService(hash, btn);
                setTimeout(() => { const item = el.closest('.service-item'); if (item) item.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 500);
            }
        }
    }
}

function initWhatsAppBot() {
    const links = document.querySelectorAll('a[href*="wa.me"]'), lang = document.documentElement.lang || 'en';
    let msg = lang === 'fr' ? "Bonjour ! Je souhaite me renseigner sur une reservation." : "Hello! I'd like to inquire about a booking.";
    links.forEach(link => {
        try {
            const url = new URL(link.href);
            if (!url.searchParams.has('text')) { url.searchParams.set('text', msg); link.href = url.toString(); }
        } catch (e) { if (link.href.indexOf('?') === -1) link.href += `?text=${encodeURIComponent(msg)}`; }
    });
    if (!document.querySelector('.floating-whatsapp')) {
        const btn = document.createElement('a'); btn.href = `https://wa.me/212663494405?text=${encodeURIComponent(msg)}`;
        btn.className = 'floating-whatsapp'; btn.target = '_blank'; btn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(btn);
    }
}

function initTestimonialSlider() {
    const grid = document.querySelector('.testimonials-grid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.testimonial-card');
    if (cards.length < 2) return;
    let current = 0;
    setInterval(() => {
        cards[current].classList.remove('active'); current = (current + 1) % cards.length; cards[current].classList.add('active');
        cards.forEach((c, i) => { c.style.opacity = (i === current) ? "1" : "0.4"; c.style.transform = (i === current) ? "scale(1.05)" : "scale(0.95)"; });
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => { initWhatsAppBot(); initTestimonialSlider(); setTimeout(checkHashForService, 300); });

async function handleBookingSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('formStatus');

    // Collect Data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add current language and timestamp
    data.language = document.documentElement.lang || 'en';
    data.submissionDate = new Date().toISOString();

    // Check if GDPR is checked
    data.gdpr_consent = formData.get('gdpr') ? true : false;

    // Loading UI
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    if (statusDiv) {
        statusDiv.style.display = 'none';
        statusDiv.className = '';
    }

    const WEBHOOK_URL = 'https://hook.eu2.make.com/your-webhook-id-here';

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok || response.type === 'opaque') {
            form.reset();
            if (statusDiv) {
                statusDiv.innerHTML = data.language === 'fr'
                    ? 'âœ… Réservation envoyée avec succès ! Vous recevrez un email de confirmation.'
                    : 'âœ… Booking submitted successfully! You will receive a confirmation email.';
                statusDiv.style.color = '#4CAF50';
                statusDiv.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
                statusDiv.style.display = 'block';
            }
        } else {
            throw new Error('Webhook error');
        }
    } catch (error) {
        console.error('Submission failed:', error);
        // Fallback to WhatsApp
        const waMessage = data.language === 'fr' ?
            `Bonjour, je souhaite réserver un transfert.%0AðŸ‘¤ Nom: ${data.name}%0Aâœ‰ï¸ Email: ${data.email}%0AðŸ“ Départ: ${data.pickup}%0AðŸ Destination: ${data.destination}%0AðŸ“… Date: ${data.date}` :
            `Hello, I would like to book a transfer.%0AðŸ‘¤ Name: ${data.name}%0Aâœ‰ï¸ Email: ${data.email}%0AðŸ“ Pickup: ${data.pickup}%0AðŸ Destination: ${data.destination}%0AðŸ“… Date: ${data.date}`;

        window.open(`https://wa.me/212663494405?text=${waMessage}`, '_blank');

        if (statusDiv) {
            statusDiv.innerHTML = data.language === 'fr'
                ? 'ðŸ”— Redirection vers WhatsApp...'
                : 'ðŸ”— Redirecting to WhatsApp...';
            statusDiv.style.color = 'var(--accent-gold)';
            statusDiv.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            statusDiv.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
}
