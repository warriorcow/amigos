function openModal(id) {
  document.querySelector('body').classList.add('locked');
  document.querySelector('.header').classList.add('locked');
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
    document.querySelector('.header').classList.remove('locked');
  }, 500);
}
