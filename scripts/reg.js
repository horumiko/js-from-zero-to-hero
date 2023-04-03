import UserCollection from "./Modals/UserCollection.js";

const userCollection = new UserCollection();
const passwordInput = document.querySelector('#password');
const passwordToggleIcon = document.querySelector('.password-toggle-icon');
const loginInput = document.querySelector('#login');
const confirmPasswordInput = document.querySelector('#confirm-password');
const usernameInput = document.querySelector('#username');
const error = document.querySelector('.error-message');
const submitBtn = document.querySelector('#register-btn');
const avatarInput = document.querySelector('#avatar');

passwordToggleIcon.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggleIcon.classList.add('active');
  } else {
    passwordInput.type = 'password';
    passwordToggleIcon.classList.remove('active');
  }
});

// функция проверки, что логин состоит только из латинских букв
function validateLogin(login) {
  const loginRegex = /^[a-zA-Z]+$/;
  return loginRegex.test(login);
}

// функция проверки, что пароль и подтверждение пароля совпадают
function validatePasswordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}

// функция проверки, что имя пользователя состоит только из латинских или кириллических букв и максимум 100 символов
function validateUsername(username) {
  const usernameRegex = /^[a-zA-Zа-яА-Я]{1,100}$/;
  return usernameRegex.test(username);
}

// функция для обновления состояния кнопки submit
function updateSubmitButton() {
  const login = loginInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const username = usernameInput.value;
  
  if (login && password && confirmPassword && username) { // все поля заполнены
    if (validateLogin(login) && validatePasswordsMatch(password, confirmPassword) && validateUsername(username)) { // все поля валидны
      submitBtn.disabled = false; // делаем кнопку активной
      error.innerHTML = ''; // очищаем поле с ошибкой
      confirmPasswordInput.style.borderColor = ''; // убираем красную обводку у поля с подтверждением пароля
    } else {
      submitBtn.disabled = true; // делаем кнопку неактивной
    }
  } else {
    submitBtn.disabled = true; // делаем кнопку неактивной
  }
}

// добавляем обработчики событий для полей ввода
loginInput.addEventListener('input', updateSubmitButton);
passwordInput.addEventListener('input', updateSubmitButton);
confirmPasswordInput.addEventListener('input', function() {
  if (!validatePasswordsMatch(passwordInput.value, confirmPasswordInput.value)) {
    confirmPasswordInput.style.borderColor = '#FF2473'; // меняем цвет border на красный
    error.innerHTML = 'Passwords do not match'; // выводим сообщение об ошибке
    submitBtn.disabled = true; // делаем кнопку неактивной
  } else {
    confirmPasswordInput.style.borderColor = ''; // убираем красную обводку у поля с подтверждением пароля
    error.innerHTML = ''; // очищаем поле с ошибкой
    updateSubmitButton(); // обновляем состояние кнопки submit
  }
});
usernameInput.addEventListener('input', updateSubmitButton);

const form = document.querySelector('#registration-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    userCollection.addUser(loginInput.value, passwordInput.value, usernameInput.value, avatarInput.value);
    
    window.location.href = 'login.html';
});
