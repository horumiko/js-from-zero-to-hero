import { LocalStorage } from "../storage/index.js"

const URL = {
  BASE_URL: "http://169.60.206.50:7777/api",
  TASKS: "/tasks",
  USERS: "/users",
  LOGIN: "/auth/login",
  REGISTER: "/user/register",
  PROFILE: "/user/myProfile",
  USER: "/user/",
  COMMENTS: "/tasks/{id}/comments",
}

export class API {
  static fetch = async (url) => {
    return (await fetch(`${URL.BASE_URL}${url}`)).json()
  }

  static getTasks = async (skip = 0, top = 10, status = 0) => {
    return await this.fetch(
      `${URL.TASKS}?status=${status}&top=${top}&skip=${skip}`
    )
    // return (
    //   await Promise.all([
    //     this.fetch(URL.TASKS + "?status=1&top=2"),
    //     this.fetch(URL.TASKS + "?status=2&top=2"),
    //     this.fetch(URL.TASKS + "?status=3&top=2"),
    //   ])
    // ).flat()
  }

  static getUsers = async () => {
    return await this.fetch(URL.USERS)
  }

  static getComments = async (id) => {
    return await this.fetch(URL.COMMENTS.replace("{id}", id))
  }

  static pushComment = async (id, data) => {
    const response = await fetch(
      `${URL.BASE_URL}${URL.COMMENTS.replace("{id}", id)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LocalStorage.getToken()}`,
        },
        body: data,
      }
    )
    return await response.json()
  }

  static pushTask = async (data) => {
    const response = await fetch(`${URL.BASE_URL}${URL.TASKS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LocalStorage.getToken()}`,
      },
      body: data,
    })
    return await response.json()
  }

  static loginUser = async (data) => {
    const response = await fetch(`${URL.BASE_URL}${URL.LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
    return await response.json()
  }

  static registerUser = async (data) => {
    const response = await fetch(`${URL.BASE_URL}${URL.REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
    return await response.json()
  }

  static profilePage = async () => {
    const response = await fetch(`${URL.BASE_URL}${URL.PROFILE}`, {
      headers: {
        Authorization: `Bearer ${LocalStorage.getToken()}`,
      },
    })
    return await response.json()
  }

  static editUser = async (id, data) => {
    const response = await fetch(`${URL.BASE_URL}${URL.USER}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LocalStorage.getToken()}`,
      },
      body: data,
    })
    return await response.json()
  }
}
