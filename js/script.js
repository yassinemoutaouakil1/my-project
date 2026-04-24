// Safia Transfers - Core Website Logic
// Optimized for PageSpeed & Performance
// Separation of Concerns: Translations are loaded from js/translations.js

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initLanguage();
    initMobileMenu();
    initScrollEffects();
    initAnimations();
    initFAQ();
    initSliders();
    initBookingForm();
    initWhatsAppBot();
    checkHashForService();
});

/* ==========================================================================
   Language Management (i18n)
   ========================================================================== */

function initLanguage() {
    // Priority: LocalStorage > Browser Language > Default (en)
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language ? navigator.language.split('-')[0] : 'en';
    const lang = savedLang || (['en', 'fr'].includes(browserLang) ? browserLang : 'en');
    
    setLanguage(lang);
}

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
    updateContent(lang);
}

function updateContent(lang) {
    // 'translations' is a global object defined in js/translations.js
    if (typeof translations === 'undefined' || !translations[lang]) {
        console.warn('Translations for ' + lang + ' are not loaded yet.');
        return;
    }
    
    const t = translations[lang];

    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else if (element.tagName === 'META') {
                element.setAttribute('content', t[key]);
            } else {
                element.innerHTML = t[key];
            }
        }
    });

    // Update document title if applicable
    const pageTitleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (pageTitleKey && t[pageTitleKey]) {
        document.title = t[pageTitleKey];
    } else if (t['page-title']) {
        document.title = t['page-title'];
    }

    // Update active class in language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang') || (btn.getAttribute('onclick') && btn.getAttribute('onclick').match(/'([^']+)'/)?.[1]);
        btn.classList.toggle('active', btnLang === lang);
    });

    // Update external links/texts that depend on language
    updateWhatsAppLinks(lang);
}

function updateWhatsAppLinks(lang) {
    const msg = lang === 'fr' 
        ? "Bonjour ! Je souhaite me renseigner sur une réservation." 
        : "Hello! I'd like to inquire about a booking.";
    
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        try {
            const url = new URL(link.href);
            url.searchParams.set('text', msg);
            link.href = url.toString();
        } catch (e) {
            // Fallback for malformed URLs
            if (link.href.includes('wa.me/')) {
                const base = link.href.split('?')[0];
                link.href = `${base}?text=${encodeURIComponent(msg)}`;
            }
        }
    });
}

/* ==========================================================================
   Header & Navigation
   ========================================================================== */

function initHeader() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
}

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
}

/* ==========================================================================
   Animations & Scroll Effects
   ========================================================================== */

function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { entry.target.classList.toggle('visible', entry.isIntersecting); });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        animationObserver.observe(el);
    });

    // Background Canvas Micro-animations
    initCanvasParticles();
}

function initCanvasParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let mouse = { x: null, y: null, radius: 100 };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

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

            // Mouse interaction
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 1;
                if (mouse.x > this.x && this.x > this.size * 10) this.x -= 1;
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 1;
                if (mouse.y > this.y && this.y > this.size * 10) this.y -= 1;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 15000; // Lower density for performance
        for (let i = 0; i < numberOfParticles; i++) {
            let size = Math.random() * 2 + 1;
            let x = Math.random() * (canvas.width - size * 2) + size;
            let y = Math.random() * (canvas.height - size * 2) + size;
            let dx = (Math.random() * 0.5) - 0.25;
            let dy = (Math.random() * 0.5) - 0.25;
            let color = 'rgba(212, 175, 55, 0.3)';
            particlesArray.push(new Particle(x, y, dx, dy, size, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => p.update());
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

function initScrollEffects() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('show', window.scrollY > 300);
        });
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* ==========================================================================
   Components & UX
   ========================================================================== */

function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                // Close all other items
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                // Toggle current
                if (!isOpen) item.classList.add('active');
            });
        }
    });
}

function initSliders() {
    // Hero Background Slider
    const heroSlides = document.querySelectorAll('.hero-bg-slide');
    if (heroSlides.length > 1) {
        let current = 0;
        setInterval(() => {
            heroSlides[current].classList.remove('active');
            current = (current + 1) % heroSlides.length;
            heroSlides[current].classList.add('active');
        }, 5000);
    }

    // Generic Album Sliders
    document.querySelectorAll('.album-container').forEach(container => {
        const slides = container.querySelectorAll('.album-slide');
        const dots = container.querySelectorAll('.dot');
        const next = container.querySelector('.album-next');
        const prev = container.querySelector('.album-prev');
        if (slides.length === 0) return;

        let current = 0;
        const update = () => {
            slides.forEach((s, i) => s.classList.toggle('active', i === current));
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
        };

        if (next) next.addEventListener('click', () => { current = (current + 1) % slides.length; update(); });
        if (prev) prev.addEventListener('click', () => { current = (current - 1 + slides.length) % slides.length; update(); });
        dots.forEach((dot, i) => dot.addEventListener('click', () => { current = i; update(); }));
        
        let interval = setInterval(() => { current = (current + 1) % slides.length; update(); }, 4000);
        container.addEventListener('mouseenter', () => clearInterval(interval));
        container.addEventListener('mouseleave', () => { interval = setInterval(() => { current = (current + 1) % slides.length; update(); }, 4000); });
    });

    // Testimonial Grid Switcher
    const testimonialGrid = document.querySelector('.testimonials-grid');
    if (testimonialGrid) {
        const cards = testimonialGrid.querySelectorAll('.testimonial-card');
        if (cards.length > 1) {
            let current = 0;
            setInterval(() => {
                cards[current].classList.remove('active');
                current = (current + 1) % cards.length;
                cards[current].classList.add('active');
            }, 5000);
        }
    }
}

function toggleService(id, btn) {
    const content = document.getElementById(id);
    if (!content) return;
    
    const isActive = content.classList.toggle('active');
    btn.classList.toggle('active', isActive);
    
    const span = btn.querySelector('span');
    if (span) {
        const lang = document.documentElement.lang || 'en';
        span.textContent = isActive 
            ? (lang === 'fr' ? 'Voir Moins' : 'View Less')
            : (lang === 'fr' ? 'Voir Plus de Détails' : 'View More Details');
    }
}

function checkHashForService() {
    const hash = window.location.hash.substring(1);
    if (hash && hash.endsWith('-details')) {
        const el = document.getElementById(hash);
        if (el) {
            const btn = el.nextElementSibling;
            if (btn && btn.classList.contains('service-expand-btn')) {
                toggleService(hash, btn);
                setTimeout(() => {
                    const item = el.closest('.service-item');
                    if (item) item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            }
        }
    }
}

/* ==========================================================================
   Integrations
   ========================================================================== */

function initWhatsAppBot() {
    const btn = document.querySelector('.floating-whatsapp');
    if (btn) return;

    const lang = document.documentElement.lang || 'en';
    const msg = lang === 'fr' 
        ? "Bonjour ! Je souhaite me renseigner sur une réservation." 
        : "Hello! I'd like to inquire about a booking.";
    
    const waLink = document.createElement('a');
    waLink.href = `https://wa.me/212663494405?text=${encodeURIComponent(msg)}`;
    waLink.className = 'floating-whatsapp';
    waLink.target = '_blank';
    waLink.setAttribute('aria-label', 'Chat on WhatsApp');
    waLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(waLink);
}

function initBookingForm() {
    const form = document.querySelector('form[on6ubmit]'); // Legacy check
    // If we have a form with ID bookingForm
    const bookingForm = document.getElementById('bookingForm') || document.querySelector('.booking-form-area form');
    if (bookingForm) {
        bookingForm.onsubmit = handleBookingSubmit;
    }
}

async function handleBookingSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('formStatus');
    const lang = document.documentElement.lang || 'en';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.language = lang;
    data.submissionDate = new Date().toISOString();

    // UI Feedback
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute('data-original', submitBtn.innerHTML);
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ...';
    }

    const WEBHOOK_URL = 'https://hook.eu2.make.com/your-webhook-id-here';

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok || response.type === 'opaque') {
            form.reset();
            if (statusDiv) {
                statusDiv.innerHTML = lang === 'fr'
                    ? '✅ Demande envoyée ! Nous vous contacterons rapidement.'
                    : '✅ Request sent! We will contact you shortly.';
                statusDiv.className = 'status-success';
                statusDiv.style.display = 'block';
            }
        } else {
            throw new Error('Network error');
        }
    } catch (error) {
        // Fallback to WhatsApp if webhook fails
        const waMessage = lang === 'fr' 
            ? `Bonjour, je souhaite réserver :%0A Nom: ${data.name || ''}%0A Prise en charge: ${data.pickup || ''}%0A Destination: ${data.destination || ''}%0A Date: ${data.date || ''}`
            : `Hello, I'd like to book :%0A Name: ${data.name || ''}%0A Pickup: ${data.pickup || ''}%0A Destination: ${data.destination || ''}%0A Date: ${data.date || ''}`;
        
        window.open(`https://wa.me/212663494405?text=${waMessage}`, '_blank');
        
        if (statusDiv) {
            statusDiv.innerHTML = lang === 'fr' ? '🔗 Redirection vers WhatsApp...' : '🔗 Redirecting to WhatsApp...';
            statusDiv.className = 'status-info';
            statusDiv.style.display = 'block';
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = submitBtn.getAttribute('data-original');
        }
    }
}
