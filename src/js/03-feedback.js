import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const formEl = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name="email"]'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

formEl.form.addEventListener('submit', onFormSubmit);
formEl.form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;
    saveFormDataToLocalStorage();
  }, 500)
);

onSavedInput();

function onSavedInput() {
  if (savedData) {
    formEl.email.value = savedData.email;
    formEl.textarea.value = savedData.message;
    formData.email = savedData.email;
    formData.message = savedData.message;
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formEl.email.value && formEl.textarea.value) {
    localStorage.removeItem(STORAGE_KEY);
    formEl.form.reset();
  } else {
    alert('Please fill in all fields.');
  }
  console.log(savedData);
}

function saveFormDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
}
