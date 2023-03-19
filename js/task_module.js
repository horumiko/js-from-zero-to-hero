const tasks = [
  {
    id: '1',
    name: 'Создать логотип приложения',
    description: 'Формат изображения – svg, размеры - 100х100px',
    createdAt: new Date('2023-03-09T23:00:00'),
    assignee: 'Ivan',
    status: 'To Do',
    priority: 'Me',
    isPrivate: false,
    comments: []
  },
  {
    id: '2',
    name: 'Заказать суши',
    description: 'Заказать суши в суши весла',
    createdAt: new Date('2023-03-09T12:00:00'),
    assignee: 'Alex',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: true,
    comments: []
  },
  {
    id: '3',
    name: 'Создать веб сайт',
    description: 'index.html, page.html',
    createdAt: new Date('2023-02-11T13:00:00'),
    assignee: 'Petr',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [{
      id: '912',
      text: 'Будет сделано!',
      createdAt: new Date('2023-02-12T21:00:05'),
      author: 'Петренко Алексей',
    }]
  },
  {
    id: '4',
    name: 'Fix errors',
    description: 'errors #333',
    createdAt: new Date('2023-03-09T12:00:00'),
    assignee: 'Alena',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '5',
    name: 'Fix bugs',
    description: 'bug #1 ',
    createdAt: new Date('2023-02-19T15:00:00'),
    assignee: 'Ivan',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '6',
    name: 'Create task-manager',
    description: 'complicated task :( ',
    createdAt: new Date('2023-03-09T23:01:00'),
    assignee: 'Petr',
    status: 'To Do',
    priority: 'High',
    isPrivate: true,
    comments: []
  },
  {
    id: '7',
    name: 'Create android app',
    description: 'kotlin',
    createdAt: new Date('2023-03-09T23:55:00'),
    assignee: 'Alex',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: []
  },
  {
    id: '8',
    name: 'Create tg chat',
    description: 'py + telegramapi',
    createdAt: new Date('2023-03-09T03:02:00'),
    assignee: 'Petr',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '9',
    name: 'Edit task',
    description: 'task #1',
    createdAt: new Date('2023-03-09T17:00:00'),
    assignee: 'Ivan',
    status: 'In Progress',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '10',
    name: 'Create soundtrack',
    description: 'lo-fi style',
    createdAt: new Date('2023-03-09T12:30:00'),
    assignee: 'Alex',
    status: 'Done',
    priority: 'Medium',
    isPrivate: true,
    comments: []
  },
  {
    id: '11',
    name: 'Создать логотип',
    description: 'размеры - 100х100px',
    createdAt: new Date('2023-03-09T06:45:00'),
    assignee: 'Alena',
    status: 'To Do',
    priority: 'Low',
    isPrivate: true,
    comments: []
  },
  {
    id: '12',
    name: 'Refactor index.js',
    description: '',
    createdAt: new Date('2023-03-09T12:12:00'),
    assignee: 'Elena',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '13',
    name: 'Find text mistakes',
    description: '',
    createdAt: new Date('2023-03-09T13:00:13'),
    assignee: 'Mark',
    status: 'To Do',
    priority: 'Low',
    isPrivate: true,
    comments: []
  },
  {
    id: '14',
    name: 'Install Figma',
    description: 'macos version',
    createdAt: new Date('2023-03-09T23:00:00'),
    assignee: 'Elena',
    status: 'To Do',
    priority: 'Low',
    isPrivate: false,
    comments: []
  },
  {
    id: '15',
    name: 'Sell BTC',
    description: 'binance.com p2p',
    createdAt: new Date('2023-03-09T14:40:00'),
    assignee: 'Petr',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '16',
    name: 'Create API',
    description: '',
    createdAt: new Date('2023-03-09T23:25:00'),
    assignee: 'Mark',
    status: 'Done',
    priority: 'Medium',
    isPrivate: true,
    comments: []
  },
  {
    id: '17',
    name: 'Edit log file',
    description: '',
    createdAt: new Date('2023-03-09T10:00:00'),
    assignee: 'Ivan',
    status: 'In progress',
    priority: 'Low',
    isPrivate: true,
    comments: []
  },
  {
    id: '18',
    name: 'create MMORPG',
    description: 'WoW, Perfect World, Black Desert',
    createdAt: new Date('2023-03-09T23:00:00'),
    assignee: 'Mark',
    status: 'In progress',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '19',
    name: 'pass exams',
    description: '...',
    createdAt: new Date('2023-03-09T18:19:00'),
    assignee: 'In progress',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '20',
    name: 'pass task',
    description: 'be stronger, be better!',
    createdAt: new Date('2023-03-09T12:44:00'),
    assignee: 'Petr',
    status: 'To Do',
    priority: 'High',
    isPrivate: false,
    comments: []
  },
  {
    id: '21',
    name: 'create cryptofarm project',
    description: 'ASIC',
    createdAt: new Date('2023-03-09T13:14:00'),
    assignee: 'Alex',
    status: 'Done',
    priority: 'Low',
    isPrivate: false,
    comments: []
  }]

const STATUSES_DICT = {
  TO_DO: "To Do",
  IN_PROGRESS: "In progress",
  COMPLETED: "Done",
};

const PRIORITIES_DICT = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

const taskModule = (function () {
  let user = "Guest";

  function getTasks(skip = 0, top = 10, filterConfig = {}) {
    let filteredTasks = tasks.slice();

    if (filterConfig.name) {
      filteredTasks = filteredTasks.filter(task => task.name.includes(filterConfig.name));
    }

    if (filterConfig.assignee) {
      filteredTasks = filteredTasks.filter(task => task.assignee.includes(filterConfig.assignee));
    }

    if (filterConfig.dateFrom) {
      filteredTasks = filteredTasks.filter(task => task.createdAt >= filterConfig.dateFrom);
    }

    if (filterConfig.dateTo) {
      filteredTasks = filteredTasks.filter(task => task.createdAt <= filterConfig.dateTo);
    }

    if (filterConfig.status) {
      filteredTasks = filteredTasks.filter(task => task.status.includes(filterConfig.status));
    }

    if (filterConfig.priority) {
      filteredTasks = filteredTasks.filter(task => task.priority.includes(filterConfig.priority));
    }

    if (filterConfig.isPrivate !== undefined) {
      filteredTasks = filteredTasks.filter(task => task.isPrivate === filterConfig.isPrivate);
    }

    if (filterConfig.description) {
      filteredTasks = filteredTasks.filter(task => task.description.includes(filterConfig.description));
    }

    filteredTasks = filteredTasks
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(filterConfig.skip || 0, filterConfig.top || filteredTasks.length);

    return filteredTasks;
  };

  function getTask(id) {
    const task = tasks.find(task => task.id === id);

    if (!task) return null;

    return task;
  }

  function validateTask(task) {
    const requiredFields = [
      "id",
      "name",
      "description",
      "createdAt",
      "assignee",
      "comments",
      "status",
      "priority",
      "isPrivate",
    ];

    const errorMessages = {
      id: "INVALID ID",
      name: "INVALID NAME",
      description: "INVALID DESCRIPTION",
      createdAt: "INVALID CREATED AT",
      assignee: "INVALID ASSIDNEE",
      status: "INVALID STATUS",
      priority: "INVALID PRIORITY",
      isPrivate: "INVALID PRIVATE STATUS",
      comments: "INVALID COMMENT",
      taskObject: "INVALID TASK OBJECT",
    };


    const errors = Object.entries(task)
      .filter(([key]) => requiredFields.includes(key))
      .reduce((acc, [key, value]) => {
        if (
          (key === "id" && typeof value !== "string") ||
          (key === "name" && (typeof value !== "string" || value.length > 100)) ||
          (key === "description" &&
            (typeof value !== "string" || value.length > 280)) ||
          (key === "createdAt" && !(value instanceof Date)) ||
          (key === "assignee" && typeof value !== "string") ||
          (key === "status" &&
            (typeof value !== "string" ||
              !Object.values(STATUSES_DICT).includes(value))) ||
          (key === "priority" &&
            (typeof value !== "string" ||
              !Object.values(PRIORITIES_DICT).includes(value))) ||
          (key === "isPrivate" && typeof value !== "boolean") ||
          (key === "comments" && !Array.isArray(value))
        ) {
          acc.push(errorMessages[key]);
        }
        return acc;
      }, []);

    if (errors.length > 0) {
      console.error(errors);
      return false;
    }

    for (const comment of task.comments) {
      if (!validateComment(comment)) {
        return false;
      }
    }

    return true;
  }

  function addTask({
    name,
    description,
    assignee = user,
    status = STATUSES_DICT.TO_DO,
    priority,
    isPrivate = false
  }) {
    const getLastTaskId = () => tasks.reduce(
      (last_id, task) => Math.max(last_id, Number(task.id)),
      0
    );

    const id = (getLastTaskId() + 1).toString();
    const createdAt = new Date();
    const comments = [];
    const task = {
      id,
      name,
      description,
      createdAt,
      assignee,
      comments,
      status,
      priority,
      isPrivate
    };

    if (!validateTask(task)) {
      return false;
    }

    tasks.push(task);
    return true;
  }

  function editTask(id, updates) {
    const task = getTask(id);

    if (!task) {
      console.log("TASK NOT FOUND");
      return false;
    }

    if (task.assignee !== user) {
      console.log("TASK HAS NOT ASSIGNEE");
      return false;
    }

    Object.entries(updates).forEach(([key, value]) => {
      if (key === "name" && (typeof value !== "string" || value.length > 100)) {
        console.log("INVALID NAME");
        return false;
      }

      if (
        key === "description" &&
        (typeof value !== "string" || value.length > 280)
      ) {
        console.log("INVALID TASK DESCRIPTION");
        return false;
      }

      if (key === "createdAt" && !(value instanceof Date)) {
        console.log("INVALID TASK DATE");
        return false;
      }

      if (key === "assignee" && typeof value !== "string") {
        console.log("INVALID TASK ASSIGNEE");
        return false;
      }

      if (
        key === "status" &&
        (typeof value !== "string" ||
          !Object.values(STATUSES_DICT).includes(value))
      ) {
        console.log("INVALID TASK STATUS");
        return false;
      }

      if (
        key === "priority" &&
        (typeof value !== "string" ||
          !Object.values(PRIORITIES_DICT).includes(value))
      ) {
        console.log("INVALID TASK PRIORITY");
        return false;
      }

      if (key === "isPrivate" && typeof value !== "boolean") {
        console.log("INVALID TASK PRIVATE STATUS");
        return false;
      }

      task[key] = value;
    });

    if (!validateTask(task)) {
      return false;
    }

    return true;
  }

  function removeTask(id) {
    const task = getTask(id);

    if (!task) {
      console.log("TASK NOT FOUND");
      return false;
    }

    if (task.assignee !== user) {
      console.log("TASK HAS NOT ASSIGNEE");
      return false;
    }

    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
    return true;
  }

  function validateComment(comment) {
    const requiredFields = ["id", "text", "createdAt", "author"];

    if (!requiredFields.every((field) => comment.hasOwnProperty(field))) {
      console.log("INVALID COMMENT");
      return false;
    }

    if (typeof comment.id !== "string") {
      console.log("INVALID COMMENT ID");
      return false;
    }

    if (typeof comment.text !== "string" || comment.text.length > 280) {
      console.log("INVALID COMMIT TEXT");
      return false;
    }

    if (!(comment.createdAt instanceof Date)) {
      console.log("INVALID COMMENT DATE");
      return false;
    }

    if (typeof comment.author !== "string") {
      console.log("INVALID COMMENT AUTHOR");
      return false;
    }

    return true;
  }

  function addComment(taskId, text) {
    const task = getTask(taskId);
    if (!task) {
      return false;
    }

    const lastComment = task.comments[task.comments.length - 1];
    const lastCommentId = lastComment ? Number(lastComment.id) : 0;

    const comment = {
      id: String(lastCommentId + 1),
      text,
      createdAt: new Date(),
      author: user,
    };

    if (!validateComment(comment)) {
      return false;
    }

    task.comments.push(comment);
    return true;
  }

  function changeUser(newUser) {
    user = newUser;
  }

  return {
    getTasks,
    getTask,
    validateTask,
    addTask,
    editTask,
    removeTask,
    validateComment,
    addComment,
    changeUser,
  };
})();
