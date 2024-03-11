const anchors = document.querySelectorAll('[data-anchor]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    const targetElement = document.querySelector(anchor.dataset.anchor)
    targetElement.scrollIntoView({
      behavior: 'smooth'
    })
  })
})

const submitButton = document.querySelector('.form__button');

if (submitButton){
  submitButton.addEventListener('click', (e) => {
    // e.preventDefault();

    const form = document.forms.callbackForm,
      formData = new FormData(form);

    // TODO: Делай, что нужно
    formData.forEach((value, key) => {
      console.log(key +': '+ value);
    })

    // openModal('#popup-thanks');
  })
}


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

const animationBottomPageElements = document.querySelectorAll('[data-animate-bottom]');
const animationLeftPageElements = document.querySelectorAll('[data-animate-left]');
const animationRightPageElements = document.querySelectorAll('[data-animate-right]');

const animationElements = [...animationBottomPageElements, ...animationLeftPageElements, ...animationRightPageElements]

if (animationElements.length) {
  const observerAnimation = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('animated')
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 0.2,
  });

  animationElements.forEach(element => {
    observerAnimation.observe(element);
  })
}


function openModal(id) {
  document.querySelector('body').classList.add('locked');
  document.querySelector('.header').classList.add('locked');
  document.querySelector('html').classList.add('locked');
  document.querySelector(id).classList.add('active');
  document.querySelector(id).style.opacity = 0;
  document.querySelector(id).style.transition = '300ms ease-in-out';
  document.querySelector(id).querySelector('div').style.transform = 'translateY(30%)';
  document.querySelector(id).querySelector('div').style.transition = '300ms ease-in-out';
  setTimeout(() => {
    document.querySelector(id).style.opacity = 1;
    document.querySelector(id).querySelector('div').style.transform = 'translateY(0)';
  }, 0);
  document.querySelector(id).addEventListener('click', ({ target }) => {
    if (`#${target.id}` === id) {
      closeModal(id);
    }
  })
}

function closeModal(id) {
  document.querySelector(id).style.opacity = 0;
  document.querySelector(id).querySelector('div').style.transform = null;
  setTimeout(() => {
    document.querySelector(id).classList.remove('active');
    document.querySelector('body').classList.remove('locked');
    document.querySelector('html').classList.remove('locked');
    document.querySelector('.header').classList.remove('locked');
  }, 500);
}

const quoteElement = document.querySelector('.quote');

if (quoteElement) {
  const observerQuote = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        quoteElement.classList.add('active');
      }
    })
  }, {
    rootMargin: '0px',
    threshold: 1,
  });

  observerQuote.observe(quoteElement);
}


document.addEventListener('DOMContentLoaded', () => {
  const selectElements = document.querySelectorAll('.select'),
        selectOptionsElements = document.querySelectorAll('.select__options'),
        selectBtnTextElements = document.querySelectorAll('.select__btn-text'),
        selectShadowInputElements = document.querySelectorAll('.select__input');


  const ACTIVE_SELECT_CLASS = 'select--active',
        ACTIVE_SELECT_OPTION_CLASS = 'select-option--active',
        SELECT_OPTION_TEXT_CLASS= '.select-option__text';

  selectElements.forEach((select, index) => {
    const selectOptions = selectOptionsElements[index].querySelectorAll('.select-option'),
          selectBtnText = selectBtnTextElements[index],
          selectShadowInput = selectShadowInputElements[index];

    select.addEventListener('click', () => {
      select.classList.toggle(ACTIVE_SELECT_CLASS);
    });

    selectOptions.forEach(option => {
      option.addEventListener('click', () => {
        const selectedOptionText = option.querySelector(SELECT_OPTION_TEXT_CLASS).innerText;
        const selectedOptionValue = option.dataset.value;

        selectOptions.forEach(item => item.classList.remove(ACTIVE_SELECT_OPTION_CLASS));
        selectBtnText.innerText = selectedOptionText;
        selectShadowInput.setAttribute('value', selectedOptionValue);
        option.classList.add(ACTIVE_SELECT_OPTION_CLASS);
        select.classList.remove(ACTIVE_SELECT_OPTION_CLASS);
      });
    });

    document.addEventListener('click', function(e) {
      if (!select.contains(e.target)) {
        selectElements[index].classList.remove(ACTIVE_SELECT_CLASS);
      }
    });
  });
})

const swiperElement = document.querySelector('.swiper');

if (swiperElement) {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    navigation: {
      nextEl: ".reviews__slider-arrow-next",
      prevEl: ".reviews__slider-arrow-prev",
    },
    breakpoints: {
      960: {
        slidesPerView: 3
      }
    }
  });

  const reviewsTexts = document.querySelectorAll('.slider-item__text');

  reviewsTexts.forEach(text => {
    if (text.offsetHeight > 160) {
      text.classList.add('active');
      text.nextElementSibling.classList.add('active')
    }
  })
}

function openReviewModal({ target }) {
  openModal('#popup-reviews');
  document.querySelector('.popup-reviews__description-person').innerText
    = target.previousElementSibling.innerText;
  console.log(window.location.origin)
  if (target.parentElement.previousElementSibling.querySelector('img').src !== `${window.location.origin}/`) {
    const img = new Image();
    img.src = target.parentElement.previousElementSibling.querySelector('img').src;
    img.classList.add('popup-reviews__img-person')
    document.querySelector('.popup-reviews__img').appendChild(img);
  }

  document.querySelector('.popup-reviews__title-person').innerText
    = target.parentElement.previousElementSibling.querySelector('.slider-item__name').innerText;
}

const gifImages = document.querySelectorAll('[data-gif]');

gifImages.forEach(gif => {
  const gifSrc = gif.dataset.gif;
  const randomVersion = Math.floor(Math.random() * 1000);
  gif.src = `${gifSrc}?v=${randomVersion}`
})
