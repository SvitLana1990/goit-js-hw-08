import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const formEl = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name="email"]'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

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
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    formEl.email.value = savedData.email;
    formEl.textarea.value = savedData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formEl.email.value && formEl.textarea.value) {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formEl.form.reset();
  } else {
    alert('Please fill in all fields.');
  }
}

function saveFormDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
