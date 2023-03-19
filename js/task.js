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

class Task {
    constructor(id, name, description, createdAt, assignee, status, priority, isPrivate, comments) {
        this._id = id;
        this.name = name;
        this.description = description;
        this._createdAt = createdAt;
        this.assignee = assignee;
        this.status = status;
        this.priority = priority;
        this.isPrivate = isPrivate;
        this.comments = comments;
    }

    get id() {
        return this._id;
    }

    set id(new_id) {
        console.log('Can not change current id');
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(new_createdAt) {
        console.log('Can not change current date');
    }

    static validate(task) {
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
}