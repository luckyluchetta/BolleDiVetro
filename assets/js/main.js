(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const backToTop = document.querySelector('.back-to-top');
    const fadeElements = document.querySelectorAll('.fade-in');
    const sections = document.querySelectorAll('section[id]');
    
    // 1. Sticky Header
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (header) {
        if (scrollY > 50) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
      }

      // 6. Back to Top visibility
      if (backToTop) {
        if (scrollY > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }

      // 5. Active Nav Highlighting
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = header ? header.offsetHeight : 80;
        
        if (scrollY >= (sectionTop - headerHeight - 150)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();

    // 2. Mobile Menu
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
      });

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close mobile menu on click outside
      document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !hamburger.contains(e.target)) {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // 4. Scroll Animations (IntersectionObserver)
    if ('IntersectionObserver' in window) {
      const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      };

      const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, appearOptions);

      fadeElements.forEach(el => {
        appearOnScroll.observe(el);
      });
    } else {
      // Fallback for older browsers
      fadeElements.forEach(el => {
        el.classList.add('visible');
      });
    }

    // 7. Nav Dropdown (Desktop / Mobile) handled mostly via CSS,
    // but we ensure touches on mobile don't instantly follow links if they have dropdowns
    const dropdownParents = document.querySelectorAll('.nav__item:has(.nav__dropdown)');
    dropdownParents.forEach(parent => {
      const link = parent.querySelector('.nav__link');
      if (link && window.innerWidth < 1024) {
        link.addEventListener('click', (e) => {
          if (parent.querySelector('.nav__dropdown').style.opacity !== '1') {
            e.preventDefault();
            // In a real scenario we'd toggle a class, but for now just prevent default on first tap
            // Since our CSS uses hover, standard mobile browsers translate first tap to hover.
          }
        });
      }
    });

  });
})();
