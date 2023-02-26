// (() => {
const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  navList: document.querySelector('.js-list-link'),
  body: document.querySelector('body'),
};

const toggleMenu = () => {
  const isMenuOpen =
    refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenu.classList.toggle('is-open');

  isMenuOpen
    ? (refs.body.style.overflow = 'scroll')
    : (refs.body.style.overflow = 'hidden');
};

const closeMobileMenu = e => {
  if (e.target.nodeName !== 'A') return;
  toggleMenu();
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
refs.navList.addEventListener('click', closeMobileMenu);

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 1020px)').addEventListener('change', e => {
  if (!e.matches) return;
  refs.mobileMenu.classList.remove('is-open');
  refs.openMenuBtn.setAttribute('aria-expanded', false);
  refs.body.style.overflow = 'scroll';
});
// })();
