
const submitButton = document.querySelector('.form__button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const form = document.forms.callbackForm,
    formData = new FormData(form);

  // TODO: Делай, что нужно
  formData.forEach((value, key) => {
    console.log(key +': '+ value);
  })
})

function openModal() {
  const popupContent = document.querySelector('.popup-overlay');
  popupContent.classList.add('active')
}
