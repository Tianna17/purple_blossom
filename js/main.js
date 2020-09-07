const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.querySelector('.contact-form');

const isValid = val => {
  if (val !== '') {
    return true;
  }
};

//Validate and submit form
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  if (isValid(name.value) && isValid(email) && isValid(message)) {
    location.assign('/thank-you.html');
  }
});
