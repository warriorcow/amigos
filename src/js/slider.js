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
