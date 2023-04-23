import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('input', throttle(saveValue, 500));
form.addEventListener('submit', onFormSubmit);

function saveValue(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (email.value && message.value) {
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

localStorageSaveData();
function localStorageSaveData() {
  const savedDataJSON = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedData = JSON.parse(savedDataJSON);
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
}
}