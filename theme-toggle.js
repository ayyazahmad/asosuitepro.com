/* ============================================
   THEME-TOGGLE.JS - Light/Dark Mode Toggle
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const STORAGE_KEY = 'asosuite-theme-preference';

  // Initialize theme
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    
    let theme;
    if (savedTheme) {
      theme = savedTheme;
    } else {
      // Default to dark mode
      theme = 'dark';
    }
    
    setTheme(theme);
  }

  // Set theme
  function setTheme(theme) {
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.classList.add('dark-mode');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        themeToggleBtn.innerHTML = '☀️'; // Sun icon for light mode
      }
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.remove('dark-mode');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        themeToggleBtn.innerHTML = '🌙'; // Moon icon for dark mode
      }
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Toggle theme
  function toggleTheme() {
    const isDark = htmlElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }

  // Event listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
    themeToggleBtn.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  // Listen to system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Initialize on page load
  initTheme();
});
