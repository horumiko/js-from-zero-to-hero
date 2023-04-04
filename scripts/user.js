import UserCollection from "./Modals/UserCollection.js";

const userCollection = new UserCollection();

const user = JSON.parse(localStorage.getItem('user'));

const userAvatar = document.querySelector('.user-avatar');
const username = document.querySelector('.username');
const fullName = document.querySelector('#full_name');
const email = document.querySelector('.user-email')
const emailInput = document.querySelector('#e_mail')
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const login = document.querySelector('#login')
const error = document.querySelector('.error-message');
const errorUsername = document.querySelector('.error-message-username');
const submitBtn = document.querySelector('.save-prop-button');
const resetBtn = document.querySelector('.reset-prop-button');

console.log(user);

userAvatar.src = user.avatar;
username.textContent = user.username;
email.textContent = user.email;
fullName.value = user.username ?? "";
emailInput.value = user.email ?? "";
emailInput.value = user.email ?? "";
login.value = user.login;

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

confirmPassword.addEventListener('input', function() {
    if (!validatePasswordsMatch(password.value, confirmPassword.value)) {
        confirmPassword.style.border = '2px solid'; // меняем цвет border на красный
        confirmPassword.style.borderColor = '#FF2473';
        password.style.border = '2px solid'; // меняем цвет border на красный
        password.style.borderColor = '#FF2473';
      error.innerHTML = 'Passwords do not match'; // выводим сообщение об ошибке
      submitBtn.disabled = true; // делаем кнопку неактивной
    } else {
        confirmPassword.style.borderColor = ''; 
        confirmPassword.style.border = ''; 
      password.style.border = ''; 
      password.style.borderColor = '';
      error.innerHTML = ''; // очищаем поле с ошибкой
      submitBtn.disabled = false;
    }
  });
  username.addEventListener('input', function() {
    if (!validateUsername(username.value)) {
        username.style.border = '2px solid'; // меняем цвет border на красный
        username.style.borderColor = '#FF2473';
      errorUsername.innerHTML = 'Username must not exceed 100 characters and contain only letters'; // выводим сообщение об ошибке
      submitBtn.disabled = true; // делаем кнопку неактивной
    } else {
        username.style.borderColor = ''; // убираем красную обводку у поля с подтверждением пароля
      errorUsername.innerHTML = ''; // очищаем поле с ошибкой
    }
  });

  submitBtn.addEventListener('click', () =>{
    userCollection.editUser(user.id, login.value, password.value, fullName.value, null, emailInput.value)
  })
  resetBtn.addEventListener('click', () =>{
    userAvatar.src = user.avatar;
    username.textContent = user.username;
    email.textContent = user.email;
    fullName.value = user.username ?? "";
    emailInput.value = user.email ?? "";
    emailInput.value = user.email ?? "";
    login.value = user.login;
  })
