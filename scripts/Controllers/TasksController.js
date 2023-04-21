import HeaderView from "../Views/HeaderView.js"
import TaskFeedView from "../Views/TaskFeedView.js"
import FilterView from "../Views/FilterView.js"
import TaskView from "../Views/TaskView.js"
import FooterView from "../Views/FooterView.js"
import TaskCollection from "../Modals/TaskCollection.js"

export default class TasksController {
  constructor(header, main) {
    this._header = header
    this._main = main
    this._taskCollection = new TaskCollection()
    this._headerView = new HeaderView(header)
    this._filterView = new FilterView(main)
    this._taskFeedView = new TaskFeedView(main)
    this._taskView = new TaskView(main)
    this._footerView = new FooterView(main)

    this._length = 0
    this._taskPage = 0
    this._pageTasks = this._taskCollection.getPage(0, 10, {})
  }
  async display() {
    this._headerView.display()
    this._filterView.display()
    await this.getFeed(0, 10, {})

    this._footerView.display()

    this._length = this._taskCollection._tasks.length
  }
  setCurrentUser(user) {
    this._headerView.setUser(user)
  }
  async addTask(name, description, priority, assignee, status, isPrivate) {
    this._taskCollection.add(
      name,
      description,
      priority,
      assignee,
      status,
      isPrivate
    )
    await this._update()
  }
  editTask(id, updatedFields) {
    this._taskCollection.edit(id, ...updatedFields)
    this._taskFeedView.display(this._taskCollection.tasks)
  }
  removeTask(id) {
    this._taskCollection.remove(id)
    this._taskFeedView.display(this._taskCollection.tasks)
  }
  async getFeed(skip = 0, top = 10) {
    this._taskFeedView.display(await this._pageTasks)
    const button = document.createElement("button")
    button.classList.add = "load-more-button"

    button.addEventListener("click", async () => {
      await this._update(this._taskPage, 10, {})
      this._taskPage += 10
    })

    document.querySelector(".info-block").appendChild(button)

    const usernameInput = document.querySelector('input[name="username"]')
    const priorityInputs = document.querySelectorAll('input[name="priority"]')
    const statusInputs = document.querySelectorAll('input[name="status"]')
    const fromDateInput = document.querySelector('input[name="from-date"]')
    const toDateInput = document.querySelector('input[name="to-date"]')

    usernameInput.addEventListener(
      "input",
      async () =>
        await this._update(skip, top, { assignee: usernameInput.value })
    )
    priorityInputs.forEach((input) =>
      input.addEventListener(
        "change",
        async () => await this._update(skip, top, { priority: input.value })
      )
    )
    statusInputs[0].addEventListener(
      "change",
      async () => await this._update(skip, top, { isPrivate: false })
    )
    statusInputs[1].addEventListener(
      "change",
      async () => await this._update(skip, top, { isPrivate: true })
    )
    //fromDateInput.addEventListener('input', handleChange);
    //toDateInput.addEventListener('input', handleChange);
  }
  showTask(id) {
    this._taskView.display(id)
  }
  async _update(skip = 0, top = 10, filterConfig = {}) {
    this._pageTasks = await new TaskCollection().getPage(
      skip,
      top,
      filterConfig
    )
    const rightBlock = document.querySelector(".right-block") // находим элемент, у которого нужно удалить детей
    while (rightBlock.firstChild) {
      rightBlock.removeChild(rightBlock.firstChild)
    }
    this._taskFeedView.display(this._pageTasks)
  }
}
