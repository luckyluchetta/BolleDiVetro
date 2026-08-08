// i18n.js — Translation system for Bolle Di Vetro
// Supports: Italian (default), English
// Extensible: add new language by creating lang/{code}.json

(function() {
  'use strict';

  const DEFAULT_LANG = 'it';
  const SUPPORTED_LANGS = ['it', 'en'];
  const translationsCache = {};

  // Get nested value from object by dot-notation key
  function getNestedValue(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
  }

  // Load translations from JSON file
  async function loadTranslations(lang) {
    if (translationsCache[lang]) return translationsCache[lang];
    try {
      const response = await fetch(`lang/${lang}.json`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      translationsCache[lang] = data;
      return data;
    } catch (e) {
      console.warn(`Could not load translations for '${lang}':`, e.message);
      console.warn('Tip: Run a local server (npx serve) for translations to work.');
      return null;
    }
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
