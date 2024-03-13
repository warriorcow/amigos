const submitButton = document.querySelector('.form__button');
const formWrapper = document.querySelector('#callbackForm');
const headerWrapper = document.querySelector('.header');
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

const allInputs = [
  name, gipsyteam,
  country, rooms,
  age, tracker,
  discord, email,
  nickname, programs,
  abi, source,
  messenger, fund,
  about
]

if (submitButton){
  allInputs.forEach(input => {
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

    if (checkRequired(allInputs)) {
      const form = document.forms.callbackForm,
        formData = new FormData(form);

      // TODO: Делай, что нужно
      // formData.forEach((value, key) => {
      //   console.log(key +': '+ value);
      // })

      openModal('#popup-thanks');
      clearInputs();
    } else {
      window.scrollTo({
        top: formWrapper.offsetTop - headerWrapper.offsetHeight,
        behavior: 'smooth'
      })
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

function clearInputs() {
  allInputs.forEach(input => {
    input.removeAttribute('value');
    input.value = null;
    input.classList.remove('valid');
  })
}
