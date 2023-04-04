import UserCollection from "./Modals/UserCollection.js";

const userCollection = new UserCollection();

const passwordInput = document.querySelector('#password');
const passwordToggleIcon = document.querySelector('.password-toggle-icon');
const loginInput = document.querySelector('#login');
const form = document.querySelector('#registration-form');
const error = document.querySelector('.error-message');

passwordToggleIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggleIcon.classList.add('active');
    } else {
      passwordInput.type = 'password';
      passwordToggleIcon.classList.remove('active');
    }
  });

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = userCollection.loginUser(loginInput.value, passwordInput.value);

    console.log(username);

    if(typeof(username) == "undefined"){
        loginInput.style.borderColor = '#FF2473'; // меняем цвет border на красный
        error.innerHTML = 'Login/Password is not correct'; // выводим сообщение об ошибке
    } else{
        localStorage.setItem('user', JSON.stringify(username));
        window.location.href = 'index.html';
    }
});
