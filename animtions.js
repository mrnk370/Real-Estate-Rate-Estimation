document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // Add loading animation to forms
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      document.body.classList.add('loading');
      setTimeout(() => document.body.classList.remove('loading'), 2000); // Simulate loading
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});