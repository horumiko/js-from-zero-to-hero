import { API } from "../api/index.js"
import UserCollection from "./Modals/UserCollection.js"

const userCollection = new UserCollection()
const userAvatar = document.querySelector(".user-avatar")
const fileImage = document.querySelector("#file_input_object")
const username = document.querySelector(".username")
const fullName = document.querySelector("#full_name")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const login = document.querySelector("#login")
const error = document.querySelector(".error-message")
const errorUsername = document.querySelector(".error-message-username")
const submitBtn = document.querySelector(".save-prop-button")
const resetBtn = document.querySelector(".reset-prop-button")

function validateLogin(login) {
  const loginRegex = /^[a-zA-Z]+$/
  return loginRegex.test(login)
}

// функция проверки, что пароль и подтверждение пароля совпадают
function validatePasswordsMatch(password, confirmPassword) {
  return password === confirmPassword
}

// функция проверки, что имя пользователя состоит только из латинских или кириллических букв и максимум 100 символов
function validateUsername(username) {
  const usernameRegex = /^[a-zA-Zа-яА-Я]{1,100}$/
  return usernameRegex.test(username)
}

API.profilePage().then((user) => {
  userAvatar.src = `data:image/png;base64,${user.photo}`
  username.textContent = user.userName
  fullName.value = user.userName ?? ""
  login.value = user.login

  confirmPassword.addEventListener("input", function () {
    if (!validatePasswordsMatch(password.value, confirmPassword.value)) {
      confirmPassword.style.border = "2px solid" // меняем цвет border на красный
      confirmPassword.style.borderColor = "#FF2473"
      password.style.border = "2px solid" // меняем цвет border на красный
      password.style.borderColor = "#FF2473"
      error.innerHTML = "Passwords do not match" // выводим сообщение об ошибке
      submitBtn.disabled = true // делаем кнопку неактивной
    } else {
      confirmPassword.style.borderColor = ""
      confirmPassword.style.border = ""
      password.style.border = ""
      password.style.borderColor = ""
      error.innerHTML = "" // очищаем поле с ошибкой
      submitBtn.disabled = false
    }
  })

  username.addEventListener("input", function () {
    if (!validateUsername(username.value)) {
      username.style.border = "2px solid" // меняем цвет border на красный
      username.style.borderColor = "#FF2473"
      errorUsername.innerHTML =
        "Username must not exceed 100 characters and contain only letters" // выводим сообщение об ошибке
      submitBtn.disabled = true // делаем кнопку неактивной
    } else {
      username.style.borderColor = "" // убираем красную обводку у поля с подтверждением пароля
      errorUsername.innerHTML = "" // очищаем поле с ошибкой
    }
  })

  submitBtn.addEventListener("click", () => {
    const file = fileImage.files[0]
    const reader = new FileReader()
    if (!file) {
      const data = {
        userName: fullName.value,
        password: password.value,
        retypedPassword: confirmPassword.value,
        photo: user.photo,
      }
      API.editUser(user.id, JSON.stringify(data))
    } else {
      reader.readAsDataURL(file)
      reader.addEventListener("load", () => {
        const picture = reader.result
        const data = {
          userName: fullName.value,
          password: password.value,
          retypedPassword: confirmPassword.value,
          photo: picture.substring(23),
        }
        API.editUser(user.id, JSON.stringify(data))
      })
    }
  })

  resetBtn.addEventListener("click", () => {
    userAvatar.src = `data:image/png;base64,${user.photo}`
    username.textContent = user.userName
    password.value = ""
    confirmPassword.value = ""
    fullName.value = user.userName ?? ""
    login.value = user.login
  })
})
