import { API } from "../api/index.js"
import { LocalStorage } from '../storage/index.js'

const passwordInput = document.querySelector("#password")
const passwordToggleIcon = document.querySelector(".password-toggle-icon")
const loginInput = document.querySelector("#login")
const form = document.querySelector("#registration-form")
const error = document.querySelector(".error-message")

passwordToggleIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text"
    passwordToggleIcon.classList.add("active")
  } else {
    passwordInput.type = "password"
    passwordToggleIcon.classList.remove("active")
  }
})

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  API.loginUser(
    JSON.stringify({
      login: loginInput.value,
      password: passwordInput.value,
    })
  )
    .then((data) => {
      if (typeof data.token == "undefined") {
        loginInput.style.borderColor = "#FF2473" // меняем цвет border на красный
        error.innerHTML = "Login/Password is not correct" // выводим сообщение об ошибке
      } else {
        LocalStorage.setToken(data.token)
        LocalStorage.setLogin(data.login);
        window.location.href = "index.html"
      }
    })
    .catch(() => {
      loginInput.style.borderColor = "#FF2473" // меняем цвет border на красный
      error.innerHTML = "Login/Password is not correct" // выводим сообщение об ошибке
    })
})
