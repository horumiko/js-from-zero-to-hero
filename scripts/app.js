import TaskCollection from "./Modals/TaskCollection.js";
import UserCollection from "./Modals/UserCollection.js";
import TasksController from "./Controllers/TasksController.js";

import tasks  from "./db.js";

localStorage.setItem('tasks', JSON.stringify(tasks));

const controller = new TasksController('header', 'main');

controller.display()
controller.addTask('Add modalV2', 'Description', 'Alex', 'To Do', 'Low', false)

//setCurrentUser("Alex")


//taskView.display(taskCollection.tasks[2])

