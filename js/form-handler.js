/* ============================================
   FORM-HANDLER.JS - Contact Form Handler
   ============================================
   
   This form submits to Google Apps Script for email delivery.
   Includes custom Material Design CAPTCHA for spam protection.
   
   SETUP INSTRUCTIONS:
   1. Follow the guide: /../../github-pages-creator/GOOGLE-APPS-SCRIPT-SETUP.md
   2. Get your Apps Script deployment URL
   3. Replace GOOGLE_APPS_SCRIPT_URL below with your URL
   ============================================ */

// ⚠️ CONFIGURE YOUR GOOGLE APPS SCRIPT URL HERE
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyrq1lAY_qDKcw8MlGwT04KOUmIpfgtN-O5--4sUZ2yP9b510-0UmkCAgcuedQtG41yTg/exec';

// === CUSTOM MATERIAL DESIGN CAPTCHA ===
class SimpleCaptcha {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.isValid = false;
    this.init();
  }
  
  init() {
    this.generateChallenge();
    
    const checkbox = document.getElementById('captchaCheck');
    const answerInput = document.getElementById('captchaAnswer');
    const errorDiv = document.getElementById('captchaError');
    
    if (!checkbox || !answerInput) return;
    
    // Show input when checkbox is checked
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        answerInput.style.display = 'block';
        answerInput.focus();
      } else {
        answerInput.style.display = 'none';
        answerInput.value = '';
        errorDiv.style.display = 'none';
        this.isValid = false;
      }
    });
    
    // Validate answer in real-time
    answerInput.addEventListener('input', () => {
      const userAnswer = parseInt(answerInput.value);
      const correctAnswer = this.num1 + this.num2;
      
      if (userAnswer === correctAnswer && answerInput.value.trim() !== '') {
        this.isValid = true;
        errorDiv.style.display = 'none';
        answerInput.style.borderColor = '#10b981';
        answerInput.style.background = '#f0fdf4';
      } else {
        this.isValid = false;
        answerInput.style.borderColor = '#d1d5db';
        answerInput.style.background = '#ffffff';
      }
    });
    
    // Reset on blur if empty
    answerInput.addEventListener('blur', () => {
      if (answerInput.value.trim() === '') {
        this.isValid = false;
      }
    });
  }
  
  generateChallenge() {
    this.num1 = Math.floor(Math.random() * 10) + 1;  // 1-10
    this.num2 = Math.floor(Math.random() * 10) + 1;  // 1-10
    
    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    const answerInput = document.getElementById('captchaAnswer');
    const errorDiv = document.getElementById('captchaError');
    
    if (num1El) num1El.textContent = this.num1;
    if (num2El) num2El.textContent = this.num2;
    if (answerInput) {
      answerInput.value = '';
      answerInput.style.borderColor = '#d1d5db';
      answerInput.style.background = '#ffffff';
    }
    if (errorDiv) errorDiv.style.display = 'none';
    
    this.isValid = false;
  }
  
  validate() {
    const checkbox = document.getElementById('captchaCheck');
    const answerInput = document.getElementById('captchaAnswer');
    const errorDiv = document.getElementById('captchaError');
    
    if (!checkbox || !answerInput) return false;
    
    if (!checkbox.checked) {
      errorDiv.innerHTML = 'Please verify you\'re human.';
      errorDiv.style.display = 'block';
      return false;
    }
    
    if (!this.isValid) {
      errorDiv.innerHTML = 'Incorrect answer. Please try again.';
      errorDiv.style.display = 'block';
      this.generateChallenge();
      return false;
    }
    
    return true;
  }
  
  reset() {
    const checkbox = document.getElementById('captchaCheck');
    const answerInput = document.getElementById('captchaAnswer');
    
    if (checkbox) checkbox.checked = false;
    if (answerInput) answerInput.style.display = 'none';
    
    this.generateChallenge();
  }
}

// Initialize CAPTCHA
const captcha = new SimpleCaptcha();

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');

  if (!contactForm) return;

  // Form submission handler
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate CAPTCHA FIRST
    if (!captcha.validate()) {
      return;
    }

    // Validate Apps Script URL is configured
    if (GOOGLE_APPS_SCRIPT_URL.includes('YOUR_DEPLOYMENT_ID')) {
      showFormError('Contact form not yet configured. Please contact site administrator.');
      return;
    }

    // Client-side validation
    if (!validateContactForm()) {
      return;
    }

    // Get form elements
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const loaderDiv = document.getElementById('formLoader');

    // Clear previous messages
    document.getElementById('formSuccess').style.display = 'none';
    document.getElementById('formError').style.display = 'none';

    // Show loading state
    submitBtn.style.display = 'none';
    loaderDiv.style.display = 'block';

    try {
      // Get form data as form-encoded
      const formData = new FormData(contactForm);

      // Submit to Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData
      });

      // Parse response
      const result = await response.json();

      if (result.result === 'success') {
        showFormSuccess();
        contactForm.reset();
        captcha.reset();  // Reset CAPTCHA after success
      } else {
        showFormError(result.error || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormError('Failed to send message: ' + error.message);
    } finally {
      loaderDiv.style.display = 'none';
      submitBtn.style.display = 'block';
    }
  });

  function validateContactForm() {
    const errors = {};
    
    // Get form fields
    const nameInput = contactForm.querySelector('[name="name"]');
    const emailInput = contactForm.querySelector('[name="email"]');
    const subjectInput = contactForm.querySelector('[name="subject"]');
    const messageInput = contactForm.querySelector('[name="message"]');

    const data = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    };

    // Validate name
    if (!data.name) {
      errors.name = 'Name is required';
    } else if (data.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    // Validate email
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate subject
    if (!data.subject) {
      errors.subject = 'Subject is required';
    } else if (data.subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    // Validate message
    if (!data.message) {
      errors.message = 'Message is required';
    } else if (data.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    // Display errors
    clearFormErrors();
    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach(field => {
        const input = contactForm.querySelector(`[name="${field}"]`);
        if (input) {
          input.classList.add('error');
          const errorDiv = input.parentElement.querySelector('.form-error');
          if (errorDiv) {
            errorDiv.textContent = errors[field];
            errorDiv.style.display = 'block';
          }
        }
      });
      return false;
    }

    return true;
  }

  function clearFormErrors() {
    contactForm.querySelectorAll('.form-error').forEach(error => {
      error.style.display = 'none';
    });
    contactForm.querySelectorAll('input, textarea, select').forEach(input => {
      input.classList.remove('error');
    });
  }

  function showFormSuccess() {
    const successDiv = document.getElementById('formSuccess');
    const errorDiv = document.getElementById('formError');
    errorDiv.style.display = 'none';
    successDiv.style.display = 'block';
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showFormError(message) {
    const errorDiv = document.getElementById('formError');
    const successDiv = document.getElementById('formSuccess');
    const errorMessage = document.getElementById('errorMessage');
    successDiv.style.display = 'none';
    errorMessage.textContent = message || 'Failed to send message. Please try again.';
    errorDiv.style.display = 'block';
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
