import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onUpdateData, 500)) 

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onUpdateData() {
    const formListData = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formListData));
}

localStorageSaveData()

function localStorageSaveData() {
    let saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    if (saveData) {
        email.value = saveData.email;
        message.value = saveData.message;
    }
}