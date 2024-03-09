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

    openModal('#popup-thanks');
  })
}

