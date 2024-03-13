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

const name = document.getElementById('name');
const gipsyteam = document.getElementById('gipsyteam');
const country = document.getElementById('country');
const rooms = document.getElementById('rooms');
const age = document.getElementById('age');
const tracker = document.getElementById('tracker');
const discord = document.getElementById('discord');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const programs = document.getElementById('programs');
const abi = document.getElementById('abi');
const source = document.getElementById('source');
const messenger = document.getElementById('messenger');
const fund = document.getElementById('fund');
const about = document.getElementById('about');

if (submitButton){
  [
    name, gipsyteam,
    country, rooms,
    age, tracker,
    discord, email,
    nickname, programs,
    abi, source,
    messenger, fund,
    about
  ].forEach(input => {
    input.addEventListener('input', ({target}) => {
      if (target.value.length > 0) {
        target.classList.add('valid')
      } else {
        target.classList.remove('valid')
      }
    })
  });

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (checkRequired([
      name, gipsyteam,
      country, rooms,
      age, tracker,
      discord, email,
      nickname, programs,
      abi, source,
      messenger, fund,
      about
    ])) {
      const form = document.forms.callbackForm,
        formData = new FormData(form);

      // TODO: Делай, что нужно
      formData.forEach((value, key) => {
        console.log(key +': '+ value);
      })
      openModal('#popup-thanks');
    }
  })
}

function checkRequired(inputArr) {
  let validInputs = [];
  inputArr.forEach(function(input){
    if (input.classList.contains('required') && input.value.trim() === ''){
      input.classList.add('invalid')
    } else {
      input.classList.remove('invalid');
      validInputs.push(true)
    }
  });

  return validInputs.length === inputArr.length;
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


const sharkModal = document.getElementById('popup-shark');

function openModal(id) {
  const modalElement = document.querySelector(id);
  document.querySelector('body').classList.add('locked');
  document.querySelector('.header').classList.add('locked');
  document.querySelector('html').classList.add('locked');
  modalElement.classList.add('active');
  modalElement.style.opacity = 0;
  modalElement.style.transition = '300ms ease-in-out';
  modalElement.querySelector('div').style.transform = 'translateY(30%)';
  modalElement.querySelector('div').style.transition = '300ms ease-in-out';
  setTimeout(() => {
    modalElement.style.opacity = 1;
    modalElement.querySelector('div').style.transform = 'translateY(0)';
  }, 0);
  modalElement.addEventListener('click', ({ target }) => {
    if (`#${target.id}` === id) {
      closeModal(id);
    }
  })
}

function openModalShark(image) {
  const modalElement = document.querySelector('#popup-shark');
  modalElement.querySelector('.popup-shark__image').src = image;

  openModal('#popup-shark');
}

function closeModal(id) {
  const modalElement = document.querySelector(id);
  modalElement.style.opacity = 0;
  modalElement.querySelector('div').style.transform = null;
  setTimeout(() => {
    modalElement.classList.remove('active');
    document.querySelector('body').classList.remove('locked');
    document.querySelector('html').classList.remove('locked');
    document.querySelector('.header').classList.remove('locked');

    if (id === '#popup-reviews') {
      const imageElement = document.querySelector('.popup-reviews__img-person');
      if (imageElement) {
        document.querySelector('.popup-reviews__img-person').remove();
      }
    }
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
        selectShadowInputElements[index].classList.add('valid')
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

function openReviewModal({ name, text, photo }) {
  document.querySelector('.popup-reviews__description-person').innerText = text;

  if (photo !== `${window.location.origin}/` && photo.length) {
    const img = new Image();
    img.src = photo;
    img.classList.add('popup-reviews__img-person')
    document.querySelector('.popup-reviews__img').appendChild(img);
  }

  document.querySelector('.popup-reviews__title-person').innerText = name;

  openModal('#popup-reviews');
}

const gifImages = document.querySelectorAll('[data-gif]');

gifImages.forEach(gif => {
  const gifSrc = gif.dataset.gif;
  const randomVersion = Math.floor(Math.random() * 1000);
  gif.src = `${gifSrc}?v=${randomVersion}`
})
