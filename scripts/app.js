import TaskCollection from "./TaskCollection.js";
import HeaderView from "./HeaderView.js";
import TaskFeedView from "./TaskFeedView.js";
import FilterView from "./FilterView.js";

import tasks  from "./db.js";

const taskCollection = new TaskCollection(tasks);
const headerView = new HeaderView('header');
const filterView = new FilterView('main');

headerView.setUser("Guest")
headerView.display()

filterView.display();

