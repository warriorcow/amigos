function openModal(id) {
  document.querySelector('body').classList.add('locked');
  document.querySelector(id).classList.add('active');
  document.querySelector(id).addEventListener('click', ({ target }) => {
    if (`#${target.id}` === id) {
      closeModal(id);
    }
  })
}

function closeModal(id) {
  document.querySelector('body').classList.remove('locked');
  document.querySelector(id).classList.remove('active');
}
