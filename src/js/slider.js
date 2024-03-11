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
