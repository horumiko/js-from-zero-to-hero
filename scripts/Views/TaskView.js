const editLogoSrc = '../assets/edit.svg';
const deleteLogoSrc = '../assets/delete.svg';
const lockLogoSrc = "../assets/lock.svg";
const authorImgSrc = "../assets/avatar.png"


export default class TaskView {
    constructor(id) {
        this.id = id;
    }

    display(task) {
        function getFormattedDate(d){
            const date = new Date(d);
            const day = date.getDate().toString().padStart(2, '0'); // день месяца (01-31)
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // месяц (01-12)
            const year = date.getFullYear().toString(); // год (yyyy)
            const hours = date.getHours().toString().padStart(2, '0'); // часы (00-23)
            const minutes = date.getMinutes().toString().padStart(2, '0'); // минуты (00-59)
    
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }

        const container = document.querySelector(this.id);
        const rightBlock = document.createElement('div');
        rightBlock.classList.add('right-block');

        // Создаем div элемент с классом "info-block"
        const infoBlock = document.createElement('div');
        infoBlock.className = 'info-block';

        // Создаем p элемент с текстом "Сходить покушать"
        const paragraph = document.createElement('p');
        paragraph.textContent = task.name;

        // Создаем первый a элемент с пустым href и вложенным элементом i с классом "fa-light fa-table-tree"
        const link1 = document.createElement('a');
        link1.href = '';
        const icon = document.createElement('i');
        icon.className = 'fa-light fa-table-tree';
        link1.appendChild(icon);

        // Создаем второй a элемент с классом "back-button" и текстом "Back"
        const link2 = document.createElement('a');
        link2.className = 'back-button';
        link2.textContent = 'Back';
        link2.href = './index.html'

        // Добавляем созданные элементы в div "info-block"
        infoBlock.appendChild(paragraph);
        infoBlock.appendChild(link1);
        infoBlock.appendChild(link2);

        rightBlock.appendChild(infoBlock);

        // создаем родительский элемент
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        // добавляем кнопки редактирования и удаления
        const taskButtons = document.createElement('div');
        taskButtons.classList.add('task-buttons');
        const editButton = document.createElement('img');
        editButton.src = editLogoSrc;
        const deleteButton = document.createElement('img');
        deleteButton.src = deleteLogoSrc;
        taskButtons.appendChild(editButton);
        taskButtons.appendChild(deleteButton);
        taskInfo.appendChild(taskButtons);

        // добавляем описание задачи
        const taskDescription = document.createElement('div');
        taskDescription.classList.add('task-info-description');

        const taskDescriptionHeader = document.createElement('h3');
        taskDescriptionHeader.innerText = 'Description: ';

        const taskDescriptionText = document.createElement('p');
        taskDescriptionText.innerText = task.description;

        taskDescription.appendChild(taskDescriptionHeader);
        taskDescription.appendChild(taskDescriptionText);
        taskInfo.appendChild(taskDescription);

        // добавляем комментарии
        const taskComments = document.createElement('div');
        taskComments.classList.add('task-info-comments');

        const taskCommentsHeader = document.createElement('h3');
        taskCommentsHeader.innerText = 'Comments: ';

        const addCommentInput = document.createElement('input');
        addCommentInput.classList.add('add-comment-text');
        addCommentInput.type = 'text';
        addCommentInput.placeholder = 'new comment';

        const addCommentButton = document.createElement('button');
        addCommentButton.classList.add('add-comment-button');
        addCommentButton.innerText = 'Add';

        addCommentButton.addEventListener('click', () => {
            let comment = {
                id: '912',
                text: addCommentInput.value,
                createdAt: Date.now(),
                author: JSON.parse(localStorage.getItem('user')).username,
            };
            task.comments.push(comment);

            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            this.display(task);

        })

        taskComments.appendChild(taskCommentsHeader);

        task.comments.forEach((comment) => {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");

            const commentAuthorInfoDiv = document.createElement("div");
            commentAuthorInfoDiv.classList.add("comment-author-info");

            const commentAuthorP = document.createElement("p");
            commentAuthorP.classList.add("comment-author");
            commentAuthorP.textContent = comment.author;

            const commentDateP = document.createElement("p");
            commentDateP.classList.add("comment-date");
            commentDateP.textContent = getFormattedDate(comment.createdAt);

            commentAuthorInfoDiv.appendChild(commentAuthorP);
            commentAuthorInfoDiv.appendChild(commentDateP);

            const commentTextP = document.createElement("p");
            commentTextP.classList.add("comment-text");
            commentTextP.textContent = comment.text;

            commentDiv.appendChild(commentAuthorInfoDiv);
            commentDiv.appendChild(commentTextP);

            taskComments.appendChild(commentDiv)
        })

        taskComments.appendChild(addCommentInput);
        taskComments.appendChild(addCommentButton);


        taskInfo.appendChild(taskComments);

        // создаем родительский элемент
        const taskAuthor = document.createElement('div');
        taskAuthor.classList.add('task-info-author');

        // добавляем аватар автора
        const authorImg = document.createElement('img');
        authorImg.classList.add('task-info-author-img');
        authorImg.src = authorImgSrc;
        taskAuthor.appendChild(authorImg);

        // добавляем информацию об авторе
        const authorInfo = document.createElement('div');
        const authorHeader = document.createElement('h4');
        authorHeader.innerText = 'Author:';
        const authorName = document.createElement('p');
        authorName.classList.add('task-info-author-name');
        authorName.innerText = task.assignee;
        authorInfo.appendChild(authorHeader);
        authorInfo.appendChild(authorName);
        taskAuthor.appendChild(authorInfo);

        // добавляем теги задачи
        const taskTagsHeader = document.createElement('h4');
        taskTagsHeader.innerText = 'Tags:';

        const taskTags = document.createElement('div');
        taskTags.classList.add('task-info-tags');

        const circleWithText1 = document.createElement('div');
        circleWithText1.classList.add('circle-with-text');

        const circle1 = document.createElement('div');
        circle1.classList.add('circle');

        if (task.priority == "Medium") {
            circle1.classList.add('medium')
        }
        if (task.priority == "Hard") {
            circle1.classList.add('hard')
        }


        const text1 = document.createElement('span');
        text1.classList.add('text');


        text1.innerText = task.priority;

        circleWithText1.appendChild(circle1);
        circleWithText1.appendChild(text1);

        const circleWithText2 = document.createElement('div');
        circleWithText2.classList.add('circle-with-text');
        const circle2 = document.createElement('div');

        circle2.classList.add('circle-todo');
        const text2 = document.createElement('span');

        text2.classList.add('text');
        text2.innerText = task.status;
        circleWithText2.appendChild(circle2);

        circleWithText2.appendChild(text2);
        const circleWithText3 = document.createElement('div');
        circleWithText3.classList.add('circle-with-text');
        const circle3 = document.createElement('div');
        circle3.classList.add('circle-todo');
        const text3 = document.createElement('span');
        text3.classList.add('text');

        text3.innerText = task.isPrivate ? "Private" : "Public";

        circleWithText3.appendChild(circle3);
        circleWithText3.appendChild(text3);
        taskTags.appendChild(circleWithText1);
        taskTags.appendChild(circleWithText2);
        taskTags.appendChild(circleWithText3);
        taskAuthor.appendChild(taskTagsHeader);
        taskAuthor.appendChild(taskTags);

        // добавляем дату создания задачи
        const taskCreatingDateHeader = document.createElement('h4');
        taskCreatingDateHeader.innerText = 'Date:';
        const taskCreatingDate = document.createElement('p');
        taskCreatingDate.classList.add('task-info-creating-date');


        taskCreatingDate.innerText = getFormattedDate(task.createdAt);

        taskAuthor.appendChild(taskCreatingDateHeader);
        taskAuthor.appendChild(taskCreatingDate);

        taskInfo.appendChild(taskAuthor);
        rightBlock.appendChild(taskInfo);


        container.appendChild(rightBlock);

    }
}