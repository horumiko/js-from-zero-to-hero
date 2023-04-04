export default class FilterView {
    constructor(containerId) {
        this.id = containerId;
    }

    display(params) {
        // создаем элементы
        const container = document.querySelector(this.id);

        const leftBlock = document.createElement('div');
        leftBlock.classList.add('left-block');

        const rightBlock = document.createElement("div");
        rightBlock.className = "right-block";

        const filtersDiv = document.createElement('div');
        filtersDiv.classList.add('filters');

        const filtersHeading = document.createElement('h2');
        filtersHeading.textContent = 'Filters';

        const usernameHeading = document.createElement('h3');
        usernameHeading.textContent = 'Username:';

        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = 'username';

        const priorityHeading = document.createElement('h3');
        priorityHeading.textContent = 'Priority:';

        const lowPriorityLabel = document.createElement('label');
        const lowPriorityCheckbox = document.createElement('input');
        lowPriorityCheckbox.type = 'checkbox';
        lowPriorityCheckbox.name = 'priority';
        lowPriorityCheckbox.value = 'Low';
        lowPriorityLabel.appendChild(lowPriorityCheckbox);
        lowPriorityLabel.appendChild(document.createTextNode('Low'));

        const mediumPriorityLabel = document.createElement('label');
        const mediumPriorityCheckbox = document.createElement('input');
        mediumPriorityCheckbox.type = 'checkbox';
        mediumPriorityCheckbox.name = 'priority';
        mediumPriorityCheckbox.value = 'Medium';
        mediumPriorityLabel.appendChild(mediumPriorityCheckbox);
        mediumPriorityLabel.appendChild(document.createTextNode('Medium'));

        const hardPriorityLabel = document.createElement('label');
        const hardPriorityCheckbox = document.createElement('input');
        hardPriorityCheckbox.type = 'checkbox';
        hardPriorityCheckbox.name = 'priority';
        hardPriorityCheckbox.value = 'High';
        hardPriorityLabel.appendChild(hardPriorityCheckbox);
        hardPriorityLabel.appendChild(document.createTextNode('Hard'));

        const statusHeading = document.createElement('h3');
        statusHeading.textContent = 'Status:';

        const publicStatusLabel = document.createElement('label');
        const publicStatusCheckbox = document.createElement('input');
        publicStatusCheckbox.type = 'checkbox';
        publicStatusCheckbox.name = 'status';
        publicStatusCheckbox.value = 'public';
        publicStatusLabel.appendChild(publicStatusCheckbox);
        publicStatusLabel.appendChild(document.createTextNode('Public'));

        const privateStatusLabel = document.createElement('label');
        const privateStatusCheckbox = document.createElement('input');
        privateStatusCheckbox.type = 'checkbox';
        privateStatusCheckbox.name = 'status';
        privateStatusCheckbox.value = 'private';
        privateStatusLabel.appendChild(privateStatusCheckbox);
        privateStatusLabel.appendChild(document.createTextNode('Private'));

        const dateHeading = document.createElement('h3');
        dateHeading.textContent = 'Date:';

        const dateFilterDiv = document.createElement('div');
        dateFilterDiv.classList.add('date-filter');

        const fromDateInput = document.createElement('input');
        fromDateInput.type = 'date';
        fromDateInput.name = 'from-date';

        const toDateInput = document.createElement('input');
        toDateInput.type = 'date';
        toDateInput.name = 'to-date';

        // добавляем элементы на страницу
        filtersDiv.appendChild(filtersHeading);
        filtersDiv.appendChild(usernameHeading);
        filtersDiv.appendChild(usernameInput);
        filtersDiv.appendChild(priorityHeading);
        filtersDiv.appendChild(lowPriorityLabel);
        filtersDiv.appendChild(mediumPriorityLabel);
        filtersDiv.appendChild(hardPriorityLabel);
        filtersDiv.appendChild(statusHeading);
        filtersDiv.appendChild(publicStatusLabel);
        filtersDiv.appendChild(privateStatusLabel);
        filtersDiv.appendChild(dateHeading);
        dateFilterDiv.appendChild(fromDateInput);
        dateFilterDiv.appendChild(toDateInput);
        filtersDiv.appendChild(dateFilterDiv);

        leftBlock.appendChild(filtersDiv);
    
        container.appendChild(leftBlock);
        container.appendChild(rightBlock)
    }
}