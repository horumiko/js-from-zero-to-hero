import TasksController from "./Controllers/TasksController.js"

const controller = new TasksController("header", "main")
const div = document.createElement("div")
div.className = "lds-dual-ring"
document.body.appendChild(div)
controller.display().then(() => {
  div.style.display = "none"
})

controller.addTask("Add modalV2", "Description", "Alex", "To Do", "Low", false)
