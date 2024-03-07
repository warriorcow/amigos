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
