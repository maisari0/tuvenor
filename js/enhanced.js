// JavaScript for enhanced website functionality

// Language Translations
const translations = {
    en: {
        'site-title': "Tuvenor | Nordic Innovation for Global Markets",
        'nav-home': "Home",
        'nav-about': "About",
        'nav-services': "Services",
        'nav-why-choose-us': "Why Choose Us",
        'nav-contact': "Contact",
        'hero-title': "Bridging Nordic Innovation with Global Markets",
        'hero-subtitle': "Outsourcing premium solutions and connecting businesses between Nordic excellence and worldwide opportunities",
        'hero-cta': "Connect with Us",
        'about-title': "About Tuvenor",
        'about-p1': "Tuvenor specializes in outsourcing and exporting high-quality components, raw materials, and technology from Nordic countries to global markets. We serve businesses seeking advanced solutions, including industrial raw materials like bitumen for manufacturing, procurement services, and innovative sourcing. With our deep understanding of Nordic excellence and international market needs, we bridge the gap between suppliers and businesses worldwide, delivering reliable, tailored solutions for sustainable growth.",
        'about-p2': "", // This was empty in the provided text, so keeping it empty.
        'services-title': "Our Services",
        'service1-title': "Global Import-Export Trade",
        'service1-desc': "We facilitate seamless trade between Nordic suppliers and international businesses, handling logistics, documentation, and regulatory compliance for products like raw materials and components.",
        'service2-title': "Market Research & Sourcing",
        'service2-desc': "Our team identifies the best Nordic solutions—such as raw materials for manufacturing—to meet your specific requirements, conducting thorough global market research for optimal matches.",
        'service3-title': "Procurement & Supply Chain Solutions",
        'service3-desc': "We optimize your supply chain with reliable Nordic products, managing outsourcing and procurement processes from order to delivery.",
        'service4-title': "Specialized Outsourcing & Export Services",
        'service4-desc': "Access cutting-edge Nordic innovations and raw materials through our specialized services, tailored to your industry needs and global demands.",
        'why-choose-title': "Why Choose Us",
        'why-choose1-title': "Expertise in Nordic Engineering",
        'why-choose1-desc': "Our deep connections with Nordic suppliers and understanding of regional excellence ensure you receive premium products and solutions, from engineering to raw materials.",
        'why-choose2-title': "In-Depth Global Market Knowledge",
        'why-choose2-desc': "With extensive experience in international markets, we navigate local practices, regulations, and needs to deliver smooth, efficient outsourcing and trade.",
        'why-choose3-title': "Agile and Reliable B2B Partner",
        'why-choose3-desc': "We pride ourselves on responsive service, transparent communication, and reliable delivery, making us the ideal partner for your global business needs.",
        'contact-title': "Contact Us",
        'form-name': "Name",
        'form-email': "Email",
        'form-subject': "Subject",
        'form-message': "Message",
        'form-submit': "Send Message",
        'email-title': "Email",
        'email-hours': "Every day from 09:00 - 17:00",
        'email-address': "info@tuvenor.fi",
        'email-button': "Mail with Us",
        'footer-business-id': "Business ID (Y-tunnus): 3518694-1",
        'footer-location': "Located in Espoo, Finland",
        'footer-copyright': "© 2025 Tuvenor. All rights reserved.",
        'footer-privacy': "Privacy Policy",
        'footer-terms': "Terms of Service"
    },
    fi: {
        'site-title': "Tuvenor | Pohjoismainen innovaatio globaaleille markkinoille",
        'nav-home': "Koti",
        'nav-about': "Tietoa meistä",
        'nav-services': "Palvelut",
        'nav-why-choose-us': "Miksi valita meidät",
        'nav-contact': "Yhteystiedot",
        'hero-title': "Yhdistämme pohjoismaisen innovaation globaaleihin markkinoihin",
        'hero-subtitle': "Ulkoistamme ensiluokkaisia ratkaisuja ja yhdistämme yrityksiä pohjoismaisen huippuosaamisen ja maailmanlaajuisten mahdollisuuksien välillä",
        'hero-cta': "Ota meihin yhteyttä",
        'about-title': "Tietoa Tuvenorista",
        'about-p1': "Tuvenor on erikoistunut korkealaatuisten komponenttien, raaka-aineiden ja teknologian ulkoistamiseen ja vientiin Pohjoismaista globaaleille markkinoille. Palvelemme yrityksiä, jotka etsivät edistyksellisiä ratkaisuja, mukaan lukien teolliset raaka-aineet, kuten bitumi valmistukseen, hankintapalvelut ja innovatiivinen materiaalien hankinta. Syvällisen ymmärryksemme pohjoismaisesta huippuosaamisesta ja kansainvälisten markkinoiden tarpeista toimimme siltana toimittajien ja yritysten välillä maailmanlaajuisesti, tarjoten luotettavia, räätälöityjä ratkaisuja kestävään kasvuun.",
        'about-p2': "", // This was empty in the provided text, so keeping it empty.
        'services-title': "Palvelumme",
        'service1-title': "Globaali tuonti- ja vientikauppa",
        'service1-desc': "Helpotamme sujuvaa kaupankäyntiä pohjoismaisten toimittajien ja kansainvälisten yritysten välillä, hoitaen logistiikan, dokumentaation ja säädösten noudattamisen tuotteille, kuten raaka-aineille ja komponenteille.",
        'service2-title': "Markkinatutkimus ja hankinta",
        'service2-desc': "Tiimimme tunnistaa parhaat pohjoismaiset ratkaisut – kuten raaka-aineet valmistukseen – täyttääksemme erityisvaatimuksesi, suorittaen perusteellista globaalia markkinatutkimusta optimaalisten vastaavuuksien löytämiseksi.",
        'service3-title': "Hankinta- ja toimitusketjuratkaisut",
        'service3-desc': "Optimoimme toimitusketjusi luotettavilla pohjoismaisilla tuotteilla, halliten ulkoistus- ja hankintaprosesseja tilauksesta toimitukseen.",
        'service4-title': "Erikoistuneet ulkoistus- ja vientipalvelut",
        'service4-desc': "Pääset käsiksi huippuluokan pohjoismaisiin innovaatioihin ja raaka-aineisiin erikoistuneiden palveluidemme kautta, jotka on räätälöity toimialasi tarpeisiin ja globaaleihin vaatimuksiin.",
        'why-choose-title': "Miksi valita meidät",
        'why-choose1-title': "Asiantuntemus pohjoismaisessa insinööriosaamisessa",
        'why-choose1-desc': "Syvät yhteytemme pohjoismaisiin toimittajiin ja ymmärryksemme alueellisesta huippuosaamisesta varmistavat, että saat ensiluokkaisia tuotteita ja ratkaisuja, insinööriosaamisesta raaka-aineisiin.",
        'why-choose2-title': "Syvällinen globaali markkinatuntemus",
        'why-choose2-desc': "Laajan kokemuksemme kansainvälisillä markkinoilla avulla navigoimme paikallisissa käytännöissä, säädöksissä ja tarpeissa varmistaaksemme sujuvan ja tehokkaan ulkoistamisen ja kaupankäynnin.",
        'why-choose3-title': "Ketterä ja luotettava B2B-kumppani",
        'why-choose3-desc': "Olemme ylpeitä nopeasta palvelusta, läpinäkyvästä viestinnästä ja luotettavasta toimituksesta, mikä tekee meistä ihanteellisen kumppanin globaaleihin liiketoimintatarpeisiisi.",
        'contact-title': "Ota meihin yhteyttä",
        'form-name': "Nimi",
        'form-email': "Sähköposti",
        'form-subject': "Aihe",
        'form-message': "Viesti",
        'form-submit': "Lähetä viesti",
        'email-title': "Sähköposti",
        'email-hours': "Joka päivä klo 09:00 - 17:00",
        'email-address': "info@tuvenor.fi",
        'email-button': "Lähetä sähköpostia",
        'footer-business-id': "Y-tunnus: 3518694-1",
        'footer-location': "Sijaitsee Espoossa, Suomessa",
        'footer-copyright': "© 2025 tuvenor. Kaikki oikeudet pidätetään.",
        'footer-privacy': "Tietosuojakäytäntö",
        'footer-terms': "Käyttöehdot"
    }
    // You will add the 'ar' (Arabic) translation here when it's provided.
};

const updateContent = (lang) => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Update the document title based on the selected language
    if (translations[lang] && translations[lang]['site-title']) {
        document.title = translations[lang]['site-title'];
    }
    document.body.setAttribute('data-lang', lang);
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }

            const targetId = this.getAttribute('href');
            if (targetId.length > 1) { // Check if href is not just '#'
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Language toggle functionality
    const languageToggles = document.querySelectorAll('.lang-toggle');

    languageToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            updateContent(lang);

            // Update active classes for all language toggles
            languageToggles.forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Initial content update based on default language (from HTML body's data-lang or 'en')
    const initialLang = document.body.getAttribute('data-lang') || 'en';
    // Ensure the correct active class is set on initial load
    languageToggles.forEach(toggle => {
        if (toggle.getAttribute('data-lang') === initialLang) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    });
    updateContent(initialLang); // Apply initial translations

    // Form validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // This part is for form submission to Netlify, which doesn't need client-side validation for redirection.
            // The `action` attribute handles it. If you have custom validation, keep it here.
            // e.preventDefault();
            // Your form validation logic
        });
    }

    // Intersection Observer for animation triggers
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.hidden');

        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            animationObserver.observe(element);
        });
    }
});
