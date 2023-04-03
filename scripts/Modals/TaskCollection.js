
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

export default class TaskCollection {
    constructor(tasks) {
        this._tasks = tasks;
    }

    get tasks() {
        const taskForUser = this._tasks.filter(
            (task) => {
                return task.assignee.includes(localStorage.getItem('user')) || task.isPrivate === false;
            }
        );
        
        return taskForUser;
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