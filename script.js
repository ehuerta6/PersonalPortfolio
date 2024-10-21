document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Close menu when a link is clicked
  navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navMenu.classList.remove('show');
    }
  });

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const rootElement = document.documentElement;

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.25) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }

  scrollToTopBtn.addEventListener('click', () => {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', handleScroll);

  // ScrollReveal initialization
  ScrollReveal().reveal('.fade-in', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200,
  });

  // Skill progress bars animation
  const skillBars = document.querySelectorAll('.skill-bar');
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px',
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
        skillObserver.unobserve(bar);
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => skillObserver.observe(bar));

  // Typed text effect
  const typedTextElement = document.getElementById('typed-text');
  const phrases = [
    'Problem Solver',
    'CS Student',
    'Web Developer',
    'Tech Enthusiast',
    'Coder',
    'Software Engineer',
    'Full-Stack Developer',
    'Java Programmer',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeText() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeText, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeText, 200);
    } else {
      setTimeout(typeText, isDeleting ? 50 : 100);
    }
  }

  typeText();

  const modals = {
    wordle: document.getElementById('wordleModal'),
    gacha: document.getElementById('gachaModal'),
  };

  const aboutButtons = document.querySelectorAll('.about-project-btn');
  const closeButtons = document.querySelectorAll('.close');

  aboutButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const projectType = this.getAttribute('data-project');
      modals[projectType].style.display = 'block';
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      this.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
});
