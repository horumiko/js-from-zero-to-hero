import TaskCollection from "./Modals/TaskCollection.js";
import UserCollection from "./Modals/UserCollection.js";
import HeaderView from "./Views/HeaderView.js";
import TaskFeedView from "./Views/TaskFeedView.js";
import FilterView from "./Views/FilterView.js";
import TaskView from "./Views/TaskView.js";
import FooterView from "./Views/FooterView.js";

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

//setCurrentUser("Alex")
headerView.display()

filterView.display();

taskFeedView.display(taskCollection.tasks);

footerView.display();

//taskView.display(taskCollection.tasks[2])

