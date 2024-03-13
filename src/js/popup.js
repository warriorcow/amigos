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

