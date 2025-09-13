// Dark Mode Toggle Functionality
const toggleBtn = document.getElementById('darkModeToggle');
const icon = toggleBtn.querySelector('i');

// Load saved mode from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Toggle dark mode
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 20,
      behavior: 'smooth'
    });
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.timeline-content, .skill-category, .project, .certificate');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize elements for animation
document.querySelectorAll('.timeline-content, .skill-category, .project, .certificate').forEach(element => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Initial check on page load
window.addEventListener('load', animateOnScroll);

// Current year for copyright
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.querySelector('footer p');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Mohammed Sadek. All rights reserved.`;
  }
});
