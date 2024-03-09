const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 60,
  navigation: {
    nextEl: ".reviews__slider-arrow-next",
    prevEl: ".reviews__slider-arrow-prev",
  },
  breakpoint: {
    960: {
      slidesPerView: 3
    }
  }
});

const reviewsTexts = document.querySelectorAll('.slider-item__text');

reviewsTexts.forEach(text => {
  if (text.offsetHeight > 160) {
    console.log(text)
    text.classList.add('active');
    text.nextElementSibling.classList.add('active')
  }
})

function openReviewModal({ target }) {
  openModal('#popup-reviews');
  document.querySelector('.popup-reviews__description-person').innerText = target.previousElementSibling.innerText;
}
