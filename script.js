const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'You are on the list. See you soon.';
  form.reset();
});
