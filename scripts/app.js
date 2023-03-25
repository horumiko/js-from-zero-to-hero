import TaskCollection from "./TaskCollection.js";
import HeaderView from "./HeaderView.js";
import tasks  from "./db.js";

const taskCollection = new TaskCollection(tasks);
const headerView = new HeaderView('header');


headerView.setUser("Guest")
headerView.display()