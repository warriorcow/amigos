const hamburgerButtonElement = document.querySelector('.header__hamburger'),
      bannerElement = document.querySelector('.banner'),
      headerLinksElements = document.querySelectorAll('.header__menu-link'),
      headerElement = document.querySelector('.header');

const ACTIVE_MENU_CLASS = 'header--open-menu',
      ACTIVE_HAMBURGER_BUTTON_CLASS = 'header__hamburger--active',
      ANIMATION_SLIDE_UP_CLASS= 'header--slide-up',
      HEADER_FIXED_CLASS= 'header--fixed';

hamburgerButtonElement.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('locked');
  headerElement.classList.toggle(ACTIVE_MENU_CLASS);
  hamburgerButtonElement.classList.toggle(ACTIVE_HAMBURGER_BUTTON_CLASS);
})

if (window.innerWidth < 960) {
  headerLinksElements.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('body').classList.remove('locked');
      headerElement.classList.remove(ACTIVE_MENU_CLASS);
      hamburgerButtonElement.classList.remove(ACTIVE_HAMBURGER_BUTTON_CLASS);
    })
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      headerElement.classList.add(ANIMATION_SLIDE_UP_CLASS);

      // setTimeout(() => {
        headerElement.classList.remove(ANIMATION_SLIDE_UP_CLASS);
        headerElement.classList.remove(HEADER_FIXED_CLASS);
      // }, 500);
    } else {
      headerElement.classList.add(HEADER_FIXED_CLASS);
    }
  })
}, {
  rootMargin: '100px',
  threshold: 1,
});

observer.observe(bannerElement);
