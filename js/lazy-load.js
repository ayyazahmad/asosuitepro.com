/* ============================================
   LAZY-LOAD.JS - Image Lazy Loading
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('[data-lazy-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-lazy-src');

          if (src) {
            img.src = src;
            img.removeAttribute('data-lazy-src');
            img.classList.add('loaded');
            
            // Remove blur effect after image loads
            img.addEventListener('load', function() {
              this.classList.remove('blur');
            });
          }

          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });

    images.forEach(img => {
      img.classList.add('lazy-image');
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const images = document.querySelectorAll('[data-lazy-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-lazy-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-lazy-src');
      }
    });
  }
});
