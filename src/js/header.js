const hamburgerButtonElement = document.querySelector('.header__hamburger'),
      bannerElement = document.querySelector('.banner'),
      headerElement = document.querySelector('.header');

const ACTIVE_MENU_CLASS = 'header--open-menu',
      ACTIVE_HAMBURGER_BUTTON_CLASS = 'header__hamburger--active',
      ANIMATION_SLIDE_UP_CLASS= 'header--slide-up',
      HEADER_FIXED_CLASS= 'header--fixed';

hamburgerButtonElement.addEventListener('click', () => {
  headerElement.classList.toggle(ACTIVE_MENU_CLASS);
  hamburgerButtonElement.classList.toggle(ACTIVE_HAMBURGER_BUTTON_CLASS);
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      headerElement.classList.add(ANIMATION_SLIDE_UP_CLASS);

      setTimeout(() => {
        headerElement.classList.remove(ANIMATION_SLIDE_UP_CLASS);
        headerElement.classList.remove(HEADER_FIXED_CLASS);
      }, 100);
    } else {
      headerElement.classList.add(HEADER_FIXED_CLASS);
    }
  })
}, {
  rootMargin: '0px',
  threshold: 0,
});

observer.observe(bannerElement);
