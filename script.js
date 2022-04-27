const input = document.querySelector('#email');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');

function handleClick() {
  if (input.value !== '') {
    if (!input.checkValidity()) {
      errorMsg.style.display = 'initial';
      errorIcon.style.display = 'initial';
    } else {
      errorMsg.style.display = 'none';
      errorIcon.style.display = 'none';
    }
  }
}

btn.addEventListener('click', handleClick);
