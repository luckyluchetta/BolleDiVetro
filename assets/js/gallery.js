(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox__img');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');
    const currentCounter = document.getElementById('lightbox-current');
    const totalCounter = document.getElementById('lightbox-total');
    
    let currentGalleryGroup = [];
    let currentIndex = 0;
    
    // Touch variables
    let touchStartX = 0;
    let touchEndX = 0;
    const swipeThreshold = 50;

    // Initialize galleries
    const galleryGrids = document.querySelectorAll('.gallery__grid');
    
    galleryGrids.forEach(grid => {
      const galleryId = grid.getAttribute('data-gallery');
      const items = Array.from(grid.querySelectorAll('.gallery__item'));
      
      items.forEach((item, index) => {
        item.addEventListener('click', () => {
          openLightbox(items, index);
        });
      });
    });

    function openLightbox(items, index) {
      currentGalleryGroup = items;
      currentIndex = index;
      
      updateLightboxImage();
      
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Update counters
      if (totalCounter) totalCounter.textContent = currentGalleryGroup.length;
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightboxImage() {
      const item = currentGalleryGroup[currentIndex];
      const img = item.querySelector('.gallery__img');
      if (!img) return;

      // Add a slight fade effect
      lightboxImg.style.opacity = '0';
      
      setTimeout(() => {
        // Find high-res image if available, else use thumbnail
        const highResSrc = item.getAttribute('data-src') || img.src;
        lightboxImg.src = highResSrc;
        lightboxImg.alt = img.alt;
        
        lightboxImg.onload = () => {
          lightboxImg.style.opacity = '1';
        };

        if (currentCounter) {
          currentCounter.textContent = currentIndex + 1;
        }
        
        preloadImages();
      }, 150);
    }

    function preloadImages() {
      const prevIndex = (currentIndex - 1 + currentGalleryGroup.length) % currentGalleryGroup.length;
      const nextIndex = (currentIndex + 1) % currentGalleryGroup.length;
      
      const prevImg = currentGalleryGroup[prevIndex].querySelector('.gallery__img');
      const nextImg = currentGalleryGroup[nextIndex].querySelector('.gallery__img');
      
      if (prevImg) {
        const p = new Image();
        p.src = currentGalleryGroup[prevIndex].getAttribute('data-src') || prevImg.src;
      }
      
      if (nextImg) {
        const n = new Image();
        n.src = currentGalleryGroup[nextIndex].getAttribute('data-src') || nextImg.src;
      }
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % currentGalleryGroup.length;
      updateLightboxImage();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + currentGalleryGroup.length) % currentGalleryGroup.length;
      updateLightboxImage();
    }

    // Event Listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });

    // Touch events for swipe
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          showPrev();
        } else {
          showNext();
        }
      }
    }
  });
})();
