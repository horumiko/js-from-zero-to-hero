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
        id: '1',
        name: 'Create ios app',
        description: 'swift',
        createdAt: new Date('2023-03-09T13:20:00'),
        assignee: 'Alena',
        status: 'To Do',
        priority: 'High',
        isPrivate: true,
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

class TaskCollection {
    _user = 'Guest';

    constructor(tasks) {
        this._tasks = tasks;
    }

    get tasks() {
        return this._tasks;
    }

    get user() {
        return this._user;
    }

    set user(name) {
        this._user = name;
    }

    get(id) {
        const task = this._tasks.find(task => task.id === id);

        if (!task) return null;

        return task;
    }

    add(name, description, assignee, status, priority, isPrivate) {
        const getLastTaskId = () => this._tasks.reduce(
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
        if (!this._validateTask(task)) {
            return false;
        }
        tasks.push(task);
        return true;
    }

    _validateTask(task) {
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

    getPage = (skip = 0, top = 10, filterConfig = {}) => {
        const tasksArrSortDate = this.tasks.sort(
            (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
        );

        const config = { ...filterConfig };

        return tasksArrSortDate
            .filter(
                (task) => !config.assignee || task.assignee.includes(config.assignee),
            )
            .filter(
                (task) => !config.description || task.description.includes(config.description),
            )
            .filter(
                (task) => !config.status || task.status === config.status,
            )
            .filter(
                (task) => !config.priority || task.priority === config.priority,
            )
            .filter(
                (task) => !config.isPrivate || task.isPrivate === config.isPrivate,
            )
            .filter(
                (task) => !config.dateFrom || task.createdAt.getTime() >= config.dateFrom.getTime(),
            )
            .filter(
                (task) => !config.dateTo || task.createdAt.getTime() <= config.dateTo.getTime(),
            )
            .splice(skip, top);
    };

    edit(
        id,
        nameNew,
        descriptionNew,
        assigneeNew,
        statusNew,
        priorityNew,
        isPrivateNew = false,
    ) {
        const cheskTask = this.get(id);

        const editTaskCopy = {
            ...cheskTask,
            name: nameNew ?? cheskTask.name,
            description: descriptionNew ?? cheskTask.description,
            assignee: assigneeNew ?? cheskTask.assignee,
            status: statusNew ?? cheskTask.status,
            priority: priorityNew ?? cheskTask.priority,
            isPrivate: typeof isPrivateNew === 'boolean' ? isPrivateNew : cheskTask.isPrivate,
        };


        if (editTaskCopy.assignee !== this._user) {
            return false;
        }

        if (!this._validateTask(editTaskCopy)) {
            return false;
        }
        const index = this._tasks.findIndex((task) => task.id === id);
        this._tasks.splice(index, 1, editTaskCopy);
        return true;
    }

    remove(id) {
        const task = get(id);

        if (!task) {
            console.log("TASK NOT FOUND");
            return false;
        }

        if (task.assignee !== user) {
            console.log("TASK HAS NOT ASSIGNEE");
            return false;
        }

        const taskIndex = this._tasks.indexOf(task);
        this._tasks.splice(taskIndex, 1);

        return true;
    }

    addComment(id, textComment) {
        const task = this.get(id);
        if (!task) {
            return false;
        }

        const lastComment = task.comments[task.comments.length - 1];
        const lastCommentId = lastComment ? Number(lastComment.id) : 0;

        const comment = {
            id: String(lastCommentId + 1),
            textComment,
            createdAt: new Date(),
            author: this._user,
        };

        if(!this._validateComment(comment)) {
            return false;
        }

        task.comments.push(comment);
        return true;
    }

    // eslint-disable-next-line class-methods-use-this
    _validateComment(comment) {
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

    clear() {
        this._tasks = [];
    }

    addAll(tasks) {
        const invalidTasks = [];
        tasks.forEach((task) => {
            if (this._validateTask(task)) {
                this._tasks.push(task);
            } else {
                invalidTasks.push(task);
            }
        });
        return invalidTasks;
    }
}

const myTasks = new TaskCollection(tasks);

// const invalidComments1 = {
//   id: '44',
//   name: 'Сверстать reg page',
//   description:
//     'Сверстать страницу регистрации',
//   createdAt: new Date('2023-01-29T23:00:00'),
//   assignee: 'Aliex',
//   status: 'In progress',
//   priority: 'High',
//   isPrivate: false,
//   comments: [
//     {
//       id: '9143',
//       text: 'ВАЖНО!',
//       createdAt: '2023-01-29T23:00:05',
//       author: 'Inna',
//     },
//   ],
// };

// const invalidComments2 = {
//   id: '21',
//   name: 'Сверстать reg page',
//   description:
//     'Сверстать страницу регистрации',
//   createdAt: new Date('2023-01-29T23:00:00'),
//   assignee: 'Itan',
//   status: 'In progress',
//   priority: 'High',
//   isPrivate: false,
//   comments: [
//     {
//       id: '9143',
//       createdAt: '2023-01-29T23:00:05',
//       author: 'Alex',
//     },
//   ],
// };

//  console.log(myTasks._validateComment(tasks[2].comments[0]));
//  console.log(myTasks._validateComment(invalidComments1));
//  console.log(myTasks._validateComment(invalidComments2));


//console.log(myTasks.get('1'));
//console.log(myTasks.addComment('1', 'Hello!'));
//console.log(myTasks.get('1'));

// console.log(myTasks.get('2'));
// console.log(myTasks.addComment('2', ''));
// console.log(myTasks.get('2'));
// console.log(myTasks.add('Add modal window', 'Add modal window in main page', 'Alex', 'Done', 'Low', false));
// console.log(tasks.length);
// console.log(myTasks.add('Add modal', 'Description', 'Serg', 'Complete', 'Low', 'false'));
// console.log(tasks.length);