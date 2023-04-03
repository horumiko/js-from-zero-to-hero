const editLogoSrc = '../assets/edit.svg';
const deleteLogoSrc = '../assets/delete.svg';
const lockLogoSrc = "../assets/lock.svg";
const commentsLogoSrc =  "../assets/comments.png";


export default class TaskFeedView {
    constructor(id) {
        this.id = id;
    }

    display(tasks) {
        const container = document.querySelector(this.id);
        // Создание элементов
        const rightBlock = document.createElement("div");
        rightBlock.className = "right-block";

        const infoBlock = document.createElement("div");
        infoBlock.className = "info-block";

        const boardTitle = document.createElement("p");
        boardTitle.textContent = "Board";

        const tableLink = document.createElement("a");
        tableLink.href = "";
        const tableIcon = document.createElement("i");
        tableIcon.className = "fa-light fa-table-tree";
        tableLink.appendChild(tableIcon);

        const newTaskButton = document.createElement("button");
        newTaskButton.className = "add-task-button";
        newTaskButton.textContent = "New Task";

        const board = document.createElement("div");
        board.className = "board";

        const todoColumn = document.createElement("div");
        todoColumn.className = "todo-column";

        const preTodoBoard = document.createElement("div");
        preTodoBoard.className = "pre-board";

        const todoTitle = document.createElement("h2");
        todoTitle.textContent = "Todo";

        const todoPlusIcon = document.createElement("i");
        todoPlusIcon.className = "fa-regular fa-plus";

        const todoList = document.createElement("ul");
        todoList.className = "todo-list";

        const todoLoadMoreButton = document.createElement("button");
        todoLoadMoreButton.className = "load-more-button";
        todoLoadMoreButton.textContent = "Load more tasks";

        const inProgressColumn = document.createElement("div");
        inProgressColumn.className = "in-progress-column";

        const preInProgressBoard = document.createElement("div");
        preInProgressBoard.className = "pre-board";

        const inProgressTitle = document.createElement("h2");
        inProgressTitle.textContent = "In Progress";

        const inProgressPlusIcon = document.createElement("i");
        inProgressPlusIcon.className = "fa-regular fa-plus";

        const inProgressList = document.createElement("ul");
        inProgressList.className = "in-progress-list";

        const inProgressLoadMoreButton = document.createElement("button");
        inProgressLoadMoreButton.className = "load-more-button";
        inProgressLoadMoreButton.textContent = "Load more tasks";

        const doneColumn = document.createElement("div");
        doneColumn.className = "done-column";

        const preDoneBoard = document.createElement("div");
        preDoneBoard.className = "pre-board";

        const doneTitle = document.createElement("h2");
        doneTitle.textContent = "Done";

        const donePlusIcon = document.createElement("i");
        donePlusIcon.className = "fa-regular fa-plus";

        const doneList = document.createElement("ul");
        doneList.className = "done-list";

        const doneLoadMoreButton = document.createElement("button");
        doneLoadMoreButton.className = "load-more-button";
        doneLoadMoreButton.textContent = "Load more tasks";


        tasks.forEach((task) => {
            const li = document.createElement("li");

            const divTask = document.createElement("div");
            divTask.className = "task";

            const divButtons = document.createElement("div");
            divButtons.className = "task-buttons";

            const editImg = document.createElement("img");
            editImg.src = editLogoSrc;
            divButtons.appendChild(editImg);

            const deleteImg = document.createElement("img");
            deleteImg.src = deleteLogoSrc;
            divButtons.appendChild(deleteImg);

            divTask.appendChild(divButtons);

            const divTags = document.createElement("div");
            divTags.className = "tags";

            const circleWithText1 = document.createElement("div");
            circleWithText1.className = "circle-with-text";

            const circle1 = document.createElement("div");


            circle1.className = "circle";

            if(task.priority == "Medium"){
                circle1.classList.add('medium')
            }
            if(task.priority == "Hard"){
                circle1.classList.add('hard')
            }

            circleWithText1.appendChild(circle1);

            const span1 = document.createElement("span");
            span1.className = "text";
            
            span1.textContent = task.priority;
            
            circleWithText1.appendChild(span1);

            divTags.appendChild(circleWithText1);

            const circleWithText2 = document.createElement("div");
            circleWithText2.className = "circle-with-text";

            const circleTodo = document.createElement("div");


            circleTodo.className = "circle-todo";
            circleWithText2.appendChild(circleTodo);

            const span2 = document.createElement("span");
            span2.className = "text";
            span2.textContent = task.status;
            circleWithText2.appendChild(span2);

            divTags.appendChild(circleWithText2);

            if(task.isPrivate){
                const lockImg = document.createElement("img");
                lockImg.src = lockLogoSrc;
                lockImg.alt = "private";
                divTags.appendChild(lockImg);
            }

            divTask.appendChild(divTags);

            const taskNameP = document.createElement("p");
            taskNameP.className = "task-name";
            taskNameP.textContent = task.name;
            divTask.appendChild(taskNameP);

            const taskDescriptionP = document.createElement("p");
            taskDescriptionP.className = "task-description";
            taskDescriptionP.textContent = task.description;
            divTask.appendChild(taskDescriptionP);

            const divOtherInfo = document.createElement("div");
            divOtherInfo.className = "other-info";

            const authorDiv = document.createElement("div");
            authorDiv.className = "author";

            const authorDescP = document.createElement("p");
            authorDescP.className = "desc";
            authorDescP.textContent = "Author:";
            authorDiv.appendChild(authorDescP);

            const authorNameP = document.createElement("p");
            authorNameP.className = "author-name";
            authorNameP.textContent = task.assignee;
            authorDiv.appendChild(authorNameP);

            divOtherInfo.appendChild(authorDiv);

            const commentsImg = document.createElement("img");
            commentsImg.src = commentsLogoSrc;
            divOtherInfo.appendChild(commentsImg);

            const taskDateP = document.createElement("p");
            taskDateP.className = "task-date";

            const date = task.createdAt;
            const day = date.getDate().toString().padStart(2, '0'); // день месяца (01-31)
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // месяц (01-12)
            const year = date.getFullYear().toString(); // год (yyyy)
            const hours = date.getHours().toString().padStart(2, '0'); // часы (00-23)
            const minutes = date.getMinutes().toString().padStart(2, '0'); // минуты (00-59)

            const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

            taskDateP.textContent = formattedDate;

            divOtherInfo.appendChild(taskDateP);

            divTask.appendChild(divOtherInfo);

            li.appendChild(divTask);

            if (task.status === 'To Do') {
                todoList.append(li);
              }
        
              if (task.status === 'In Progress') {
                inProgressList.append(li);
              }
        
              if (task.status === 'Done') {
                doneList.append(li);
              }
        })

        preTodoBoard.appendChild(todoTitle);
        preTodoBoard.appendChild(todoPlusIcon);
        todoColumn.appendChild(preTodoBoard);
        todoColumn.appendChild(todoList);
        todoColumn.appendChild(todoLoadMoreButton);

        preInProgressBoard.appendChild(inProgressTitle);
        preInProgressBoard.appendChild(inProgressPlusIcon);
        inProgressColumn.appendChild(preInProgressBoard);
        inProgressColumn.appendChild(inProgressList);
        inProgressColumn.appendChild(inProgressLoadMoreButton);

        preDoneBoard.appendChild(doneTitle);
        preDoneBoard.appendChild(donePlusIcon);
        doneColumn.appendChild(preDoneBoard);
        doneColumn.appendChild(doneList);
        doneColumn.appendChild(doneLoadMoreButton);

        infoBlock.appendChild(boardTitle);
        infoBlock.appendChild(tableLink);
        infoBlock.appendChild(newTaskButton);

        board.appendChild(todoColumn);
        board.appendChild(inProgressColumn);
        board.appendChild(doneColumn);

        rightBlock.appendChild(infoBlock);
        rightBlock.appendChild(board);

        container.appendChild(rightBlock);

    }
}