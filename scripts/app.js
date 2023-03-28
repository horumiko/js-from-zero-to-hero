import TaskCollection from "./TaskCollection.js";
import HeaderView from "./HeaderView.js";
import TaskFeedView from "./TaskFeedView.js";
import FilterView from "./FilterView.js";
import TaskView from "./TaskView.js";
import FooterView from "./FooterView.js";
import tasks  from "./db.js";

const taskCollection = new TaskCollection(tasks);
const headerView = new HeaderView('header');
const filterView = new FilterView('main');
const taskFeedView = new TaskFeedView('main');
const taskView = new TaskView('main');
const footerView = new FooterView('main');

function setCurrentUser(user) {
    headerView.setUser(user);
}

function addTask(name, description, priority, assignee, status, isPrivate) {
    taskCollection.add(name, description, priority, assignee, status, isPrivate);
    taskFeedView.display(taskCollection.tasks)
}

function editTask(id, updatedFields) {
    taskCollection.edit(id, ...updatedFields);
    taskFeedView.display(taskCollection.tasks)
}

function removeTask(id) {
    taskCollection.remove(id);
    taskFeedView.display(taskCollection.tasks)
}

function getFeed(skip=0, top=10, filterConfig={}) {
    taskFeedView.display(taskCollection.getPage(skip, top, filterConfig))
}

function showTask(id) {
    taskView.display(id);
}

setCurrentUser("Alex")
headerView.display()

filterView.display();

taskFeedView.display(taskCollection.tasks);

footerView.display();

//taskView.display(taskCollection.tasks[2])

