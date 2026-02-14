/* ============================================
   MAIN.JS - Core Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // HAMBURGER MENU TOGGLE
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navItems = document.querySelectorAll('.nav-item a');

  function toggleMenu() {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.body.style.overflow = hamburger.classList.contains('open') ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Close menu on nav close button click
  const navClose = document.querySelector('.nav-close');
  if (navClose) {
    navClose.addEventListener('click', closeMenu);
  }

  // Close menu on nav item click
  navItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // Close menu on outside click
  document.addEventListener('click', function(event) {
    if (hamburger && navMenu && !hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      closeMenu();
    }
  });

  // ============================================
  // SCROLL TO TOP BUTTON WITH PROGRESS
  // ============================================
  const scrollBtn = document.getElementById('scroll-to-top');
  const scrollProgress = document.getElementById('scroll-progress');
  const SCROLL_THRESHOLD = 300;

  function updateScrollButton() {
    if (window.pageYOffset > SCROLL_THRESHOLD) {
      scrollBtn?.classList.add('show');
    } else {
      scrollBtn?.classList.remove('show');
    }

    // Update progress circle
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    if (scrollProgress) {
      const radius = 20;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (scrolled / 100) * circumference;
      scrollProgress.style.strokeDashoffset = offset;
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (scrollBtn) {
    scrollBtn.addEventListener('click', scrollToTop);
    scrollBtn.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToTop();
      }
    });
  }

  window.addEventListener('scroll', updateScrollButton);
  updateScrollButton(); // Initial call

  // ============================================
  // HEADER SHRINK ON SCROLL
  // ============================================
  const header = document.querySelector('header');
  const HEADER_SHRINK_THRESHOLD = 100;
  let lastScrollTop = 0;

  function updateHeaderOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > HEADER_SHRINK_THRESHOLD) {
      header?.classList.add('shrink');
    } else {
      header?.classList.remove('shrink');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll(); // Initial call

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // ACCORDION FUNCTIONALITY
  // ============================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const isOpen = accordionItem.classList.contains('open');

      // Close all other items
      document.querySelectorAll('.accordion-item.open').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('open');
        }
      });

      // Toggle current item
      accordionItem.classList.toggle('open');
    });

    // Keyboard accessibility
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ============================================
  // ACTIVE NAVIGATION INDICATOR
  // ============================================
  function updateActiveNav() {
    const currentLocation = location.pathname;
    navItems.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentLocation || href === '/' && currentLocation === '/') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  updateActiveNav();

  // ============================================
  // MODAL FUNCTIONALITY
  // ============================================
  function setupModal(triggerId, modalId, closeId) {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);
    const closeBtn = closeId ? document.getElementById(closeId) : null;

    if (trigger && modal) {
      trigger.addEventListener('click', function() {
        modal.classList.add('open');
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', function() {
        modal.classList.remove('open');
      });
    }

    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });

      // Press Escape to close
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
          modal.classList.remove('open');
        }
      });
    }
  }

  // ============================================
  // FORM VALIDATION & SUBMISSION
  // ============================================
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate form
      let isValid = true;
      const inputs = form.querySelectorAll('[required]');

      inputs.forEach(input => {
        if (!validateInput(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Show success message
        const successMsg = form.querySelector('.form-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => {
            successMsg.style.display = 'none';
            form.reset();
          }, 3000);
        }

        // Here you can add form submission logic
        // For now, console log
        console.log('Form submitted:', new FormData(form));
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateInput(this);
      });

      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateInput(this);
        }
      });
    });
  });

  function validateInput(input) {
    const value = input.value.trim();
    const type = input.getAttribute('type');
    const errorMsg = input.parentElement.querySelector('.form-error');

    let isValid = true;
    let errorText = '';

    // Required validation
    if (input.hasAttribute('required') && !value) {
      isValid = false;
      errorText = 'This field is required';
    }

    // Email validation
    if (type === 'email' && value && !isValidEmail(value)) {
      isValid = false;
      errorText = 'Please enter a valid email';
    }

    // Phone validation
    if (type === 'tel' && value && !isValidPhone(value)) {
      isValid = false;
      errorText = 'Please enter a valid phone number';
    }

    if (isValid) {
      input.classList.remove('error');
      input.classList.add('success');
      if (errorMsg) {
        errorMsg.style.display = 'none';
      }
    } else {
      input.classList.remove('success');
      input.classList.add('error');
      if (errorMsg) {
        errorMsg.textContent = errorText;
        errorMsg.style.display = 'block';
      }
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  // ============================================
  // SKIP TO CONTENT LINK
  // ============================================
  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      const target = document.querySelector('#main-content') || document.querySelector('main');
      if (target) {
        e.preventDefault();
        target.focus();
        target.scrollIntoView();
      }
    });
  }

  // ============================================
  // END - MAIN INITIALIZATION

  // ============================================
  // ANIMATION ON SCROLL
  // ============================================
  function observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.card, .feature-card, .testimonial-card').forEach(element => {
      observer.observe(element);
    });
  }

  observeElements();
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
