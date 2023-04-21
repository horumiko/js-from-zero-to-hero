import { API } from "../api/index.js"

const title = document.querySelector("#title")
const description = document.querySelector("#description")
const btn = document.querySelector("#create-task-btn")
const form = document.querySelector("#creation-form")

console.log(btn)

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const privateBtn = document.querySelector('input[name="is_private"]:checked')
  const priorityBtn = document.querySelector('input[name="priority"]:checked')
  const assigner = await API.profilePage()

  API.pushTask(
    JSON.stringify({
      name: title.value,
      description: description.value,
      assignee: assigner.id,
      status: "To Do",
      priority: priorityBtn.value,
      isPrivate: Boolean(privateBtn.value),
    })
  )
  window.location.href = "index.html"
})
