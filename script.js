document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!hamburgerBtn || !mobileMenu) {
    console.error('Hamburger button or mobile menu not found!');
    return;
  }

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    console.log('Menu toggled'); // For debugging
  });
});
