const form = document.querySelector('#signup-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent =
    'Thanks. I will send you a note when the portfolio is live.';
  form.reset();
});
