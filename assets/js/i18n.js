// i18n.js — Translation system for Bolle Di Vetro
// Supports: Italian (default), English

(function() {
  'use strict';

  const DEFAULT_LANG = 'it';
  const SUPPORTED_LANGS = ['it', 'en'];

  const embeddedTranslations = {
    "it": {
      "meta": {
        "title": "Bolle Di Vetro — Casa Vacanze",
        "description": "Scopri Bolle Di Vetro: due splendidi appartamenti per le tue vacanze a Venaria Reale, a due passi dalla Reggia. Prenota su Airbnb o Booking.com."
      },
      "nav": {
        "home": "Home",
        "apartments": "Appartamenti",
        "apt1": "Bolle di Vetro 1",
        "apt2": "Bolle di Vetro 2",
        "location": "Posizione",
        "booking": "Prenota",
        "contact": "Contatti"
      },
      "hero": {
        "title": "Bolle Di Vetro",
        "subtitle": "Due appartamenti unici per la tua vacanza perfetta",
        "cta": "Contattaci"
      },
      "apt1": {
        "name": "Bolle di Vetro 1",
        "description": {
          "title": "Descrizione",
          "text": "Grazioso appartamento in villino a due passi dalla Reggia di Venaria e dal centro storico di Venaria Reale, a 5 minuti d'auto dall'Allianz Stadium. Comodo a tutti i servizi essenziali. L'appartamento situato al piano terreno, è composto da cucina (con parete attrezzata, tavolo, divano letto, frigo, forno e TV), camera da letto matrimoniale e ampio bagno finestrato. L'appartamento affaccia su un grande cortile con giardino ad uso esclusivo dove rilassarsi in assoluta tranquillità."
        },
        "gallery": {
          "title": "Galleria Fotografica"
        },
        "services": {
          "title": "Servizi e Comfort"
        }
      },
      "apt2": {
        "name": "Bolle di Vetro 2",
        "description": {
          "title": "Descrizione",
          "text": "Luminoso appartamento in villino a due passi dalla Reggia di Venaria e dal suo centro storico pedonale e dista 5 min. di auto dall'Allianz Stadium. Comodo a tutti i servizi essenziali. L'appartamento al primo piano è composto da un'ampia cucina (con parete attrezzata, tavolo, divano letto, frigo, microonde, mobile TV), da due camere da letto matrimoniali e ampio bagno con box doccia e lavatrice. L'appartamento dispone di un terrazzino che affaccia su un grande cortile con giardino privato."
        },
        "gallery": {
          "title": "Galleria Fotografica"
        },
        "services": {
          "title": "Servizi e Comfort"
        }
      },
      "services": {
        "wifi": "Wi-Fi",
        "ac": "Telecamere esterne",
        "kitchen": "Cucina attrezzata",
        "washing": "Lavatrice",
        "parking": "Parcheggio a pagamento in loco",
        "tv": "TV",
        "heating": "Riscaldamento",
        "linens": "Servizi di base: asciugamani, lenzuola, sapone e carta igienica"
      },
      "location": {
        "title": "Posizione",
        "description": "La struttura è di fronte ai giardini della Reggia di Venaria (il segnaposto sulla mappa indica la zona della Reggia, gli appartamenti si trovano in un raggio di 200-300 metri), dista circa 5 min di auto dall'Allianz Stadium ed è ben collegata con la rete di trasporto pubblico.",
        "pois_title": "Punti di Interesse",
        "poi1": "Centro storico — 5 min",
        "poi2": "Ingresso Reggia di Venaria — 10 min a piedi",
        "poi3": "Parco La Mandria, ingresso di Venaria — 10 min"
      },
      "booking": {
        "title": "Prenota il Tuo Soggiorno",
        "subtitle": "Scegli l'appartamento e prenota sulla piattaforma che preferisci",
        "airbnb": "Prenota su Airbnb",
        "booking_com": "Prenota su Booking.com"
      },
      "reviews": {
        "title": "Cosa Dicono i Nostri Ospiti",
        "placeholder": "Le recensioni saranno disponibili a breve."
      },
      "contact": {
        "title": "Contattaci",
        "subtitle": "Per informazioni o richieste speciali, non esitare a contattarci",
        "name_label": "Host",
        "name": "Mario Giovanni",
        "email_label": "Email"
      },
      "footer": {
        "rights": "© 2026 Bolle Di Vetro. Tutti i diritti riservati.",
        "privacy": "Privacy Policy",
        "verified": "Struttura verificata PayTourist"
      },
      "gallery": {
        "counter": "di",
        "close": "Chiudi",
        "prev": "Precedente",
        "next": "Successiva"
      },
      "alt": {
        "hero": "Vista esterna di Bolle Di Vetro",
        "apt1_foto1": "Bolle di Vetro 1 — Foto 1",
        "apt1_foto2": "Bolle di Vetro 1 — Foto 2",
        "apt1_foto3": "Bolle di Vetro 1 — Foto 3",
        "apt1_foto4": "Bolle di Vetro 1 — Foto 4",
        "apt1_foto5": "Bolle di Vetro 1 — Foto 5",
        "apt1_foto6": "Bolle di Vetro 1 — Foto 6",
        "apt1_foto7": "Bolle di Vetro 1 — Foto 7",
        "apt1_foto8": "Bolle di Vetro 1 — Foto 8",
        "apt1_foto9": "Bolle di Vetro 1 — Foto 9",
        "apt2_foto1": "Bolle di Vetro 2 — Foto 1",
        "apt2_foto2": "Bolle di Vetro 2 — Foto 2",
        "apt2_foto3": "Bolle di Vetro 2 — Foto 3",
        "apt2_foto4": "Bolle di Vetro 2 — Foto 4",
        "apt2_foto5": "Bolle di Vetro 2 — Foto 5",
        "apt2_foto6": "Bolle di Vetro 2 — Foto 6",
        "apt2_foto7": "Bolle di Vetro 2 — Foto 7",
        "apt2_foto8": "Bolle di Vetro 2 — Foto 8"
      }
    },
    "en": {
      "meta": {
        "title": "Bolle Di Vetro — Holiday Home",
        "description": "Discover Bolle Di Vetro: two beautiful apartments for your holiday in Venaria Reale, just steps from the Reggia. Book on Airbnb or Booking.com."
      },
      "nav": {
        "home": "Home",
        "apartments": "Apartments",
        "apt1": "Bolle di Vetro 1",
        "apt2": "Bolle di Vetro 2",
        "location": "Location",
        "booking": "Book",
        "contact": "Contact"
      },
      "hero": {
        "title": "Bolle Di Vetro",
        "subtitle": "Two unique apartments for your perfect holiday",
        "cta": "Contact Us"
      },
      "apt1": {
        "name": "Bolle di Vetro 1",
        "description": {
          "title": "Description",
          "text": "Charming apartment in a small villa, a stone's throw from the Reggia di Venaria and the historic center of Venaria Reale, a 5-minute drive from the Allianz Stadium. Convenient to all essential services. The apartment on the ground floor consists of a kitchen (with equipped wall unit, table, sofa bed, fridge, oven, and TV), a double bedroom, and a large bathroom with a window. The apartment overlooks a large courtyard with a private garden where you can relax in absolute tranquility."
        },
        "gallery": {
          "title": "Photo Gallery"
        },
        "services": {
          "title": "Services and Amenities"
        }
      },
      "apt2": {
        "name": "Bolle di Vetro 2",
        "description": {
          "title": "Description",
          "text": "Bright apartment in a small villa, a stone's throw from the Reggia di Venaria and its pedestrian historic center, and a 5-minute drive from the Allianz Stadium. Convenient to all essential services. The first-floor apartment consists of a large kitchen (with equipped wall unit, table, sofa bed, fridge, microwave, TV cabinet), two double bedrooms, and a large bathroom with a shower cabin and washing machine. The apartment has a small terrace overlooking a large courtyard with a private garden."
        },
        "gallery": {
          "title": "Photo Gallery"
        },
        "services": {
          "title": "Services and Amenities"
        }
      },
      "services": {
        "wifi": "Wi-Fi",
        "ac": "Outdoor security cameras",
        "kitchen": "Fully equipped kitchen",
        "washing": "Washing machine",
        "parking": "Paid parking on premises",
        "tv": "TV",
        "heating": "Heating",
        "linens": "Basic amenities: towels, bed sheets, soap, and toilet paper"
      },
      "location": {
        "title": "Location",
        "description": "The property is located opposite the gardens of the Reggia di Venaria (the map pin indicates the area of the Reggia, while the apartments are located within a 200-300 meter radius), about a 5-minute drive from the Allianz Stadium, and is well connected to the public transport network.",
        "pois_title": "Points of Interest",
        "poi1": "Historic center — 5 min",
        "poi2": "Reggia di Venaria entrance — 10 min walk",
        "poi3": "La Mandria Park, Venaria entrance — 10 min"
      },
      "booking": {
        "title": "Book Your Stay",
        "subtitle": "Choose your apartment and book on your preferred platform",
        "airbnb": "Book on Airbnb",
        "booking_com": "Book on Booking.com"
      },
      "reviews": {
        "title": "What Our Guests Say",
        "placeholder": "Reviews will be available soon."
      },
      "contact": {
        "title": "Contact Us",
        "subtitle": "For information or special requests, do not hesitate to contact us",
        "name_label": "Host",
        "name": "Mario Giovanni",
        "email_label": "Email"
      },
      "footer": {
        "rights": "© 2026 Bolle Di Vetro. All rights reserved.",
        "privacy": "Privacy Policy",
        "verified": "Verified property PayTourist"
      },
      "gallery": {
        "counter": "of",
        "close": "Close",
        "prev": "Previous",
        "next": "Next"
      },
      "alt": {
        "hero": "Exterior view of Bolle Di Vetro",
        "apt1_foto1": "Bolle di Vetro 1 — Photo 1",
        "apt1_foto2": "Bolle di Vetro 1 — Photo 2",
        "apt1_foto3": "Bolle di Vetro 1 — Photo 3",
        "apt1_foto4": "Bolle di Vetro 1 — Photo 4",
        "apt1_foto5": "Bolle di Vetro 1 — Photo 5",
        "apt1_foto6": "Bolle di Vetro 1 — Photo 6",
        "apt1_foto7": "Bolle di Vetro 1 — Photo 7",
        "apt1_foto8": "Bolle di Vetro 1 — Photo 8",
        "apt1_foto9": "Bolle di Vetro 1 — Photo 9",
        "apt2_foto1": "Bolle di Vetro 2 — Photo 1",
        "apt2_foto2": "Bolle di Vetro 2 — Photo 2",
        "apt2_foto3": "Bolle di Vetro 2 — Photo 3",
        "apt2_foto4": "Bolle di Vetro 2 — Photo 4",
        "apt2_foto5": "Bolle di Vetro 2 — Photo 5",
        "apt2_foto6": "Bolle di Vetro 2 — Photo 6",
        "apt2_foto7": "Bolle di Vetro 2 — Photo 7",
        "apt2_foto8": "Bolle di Vetro 2 — Photo 8"
      }
    }
  };

  const translationsCache = {};

  // Get nested value from object by dot-notation key
  function getNestedValue(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
  }

  // Load translations from JSON file or embedded fallback
  async function loadTranslations(lang) {
    if (translationsCache[lang]) return translationsCache[lang];
    try {
      const response = await fetch(`lang/${lang}.json`);
      if (response.ok) {
        const data = await response.json();
        translationsCache[lang] = data;
        return data;
      }
    } catch (e) {
      console.warn(`Fetch unavailable for '${lang}', using embedded translations.`, e.message);
    }
    
    if (embeddedTranslations[lang]) {
      translationsCache[lang] = embeddedTranslations[lang];
      return embeddedTranslations[lang];
    }
    return null;
  }

  // Apply translations to the DOM
  function applyTranslations(translations) {
    if (!translations) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(translations, key);
      if (value !== null && typeof value === 'string') {
        el.textContent = value;
      }
    });

    // Update alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      const value = getNestedValue(translations, key);
      if (value !== null) {
        el.setAttribute('alt', value);
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const value = getNestedValue(translations, key);
      if (value !== null) {
        el.setAttribute('placeholder', value);
      }
    });

    // Update meta tags
    const metaTitle = getNestedValue(translations, 'meta.title');
    const metaDesc = getNestedValue(translations, 'meta.description');
    if (metaTitle) document.title = metaTitle;
    if (metaDesc) {
      const metaDescEl = document.querySelector('meta[name="description"]');
      if (metaDescEl) metaDescEl.setAttribute('content', metaDesc);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', metaDesc);
    }
    if (metaTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', metaTitle);
    }
  }

  // Set active language
  async function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

    const translations = await loadTranslations(lang);
    if (translations) {
      applyTranslations(translations);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Save preference
    try {
      localStorage.setItem('bdv-lang', lang);
    } catch(e) { /* localStorage unavailable */ }

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Get current language
  function getCurrentLang() {
    try {
      const saved = localStorage.getItem('bdv-lang');
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch(e) {}
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;
    
    return DEFAULT_LANG;
  }

  // Initialize
  function init() {
    const lang = getCurrentLang();
    setLanguage(lang);

    // Bind language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const newLang = btn.getAttribute('data-lang');
        setLanguage(newLang);
      });
    });
  }

  // Expose API globally
  window.i18n = { setLanguage, getCurrentLang, loadTranslations };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
