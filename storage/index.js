const storageKeys = {
  token: "token",
  login: "login",
}

export class LocalStorage {
  static setToken(data) {
    return localStorage.setItem(storageKeys.token, JSON.stringify(data))
  }

  static getToken() {
    return JSON.parse(localStorage.getItem(storageKeys.token))
  }

  static setLogin(data) {
    return localStorage.setItem(storageKeys.login, JSON.stringify(data))
  }

  static getLogin() {
    return JSON.parse(localStorage.getItem(storageKeys.login))
  }
}
