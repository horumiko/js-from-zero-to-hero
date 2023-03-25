const srcLogo = '../assets/Logo.svg'

export default class HeaderView {
    constructor(containerId) {
        this.id = containerId;
        this.username = "Guest"
    }

    setUser(user) {
        this.user = user;
    }


    display(params) {
        // Создаем основные элементы
        const logo = document.createElement('div');
        logo.classList.add('logo');

        const logoLink = document.createElement('a');
        logoLink.href = '#';

        const logoImg = document.createElement('img');
        logoImg.src = srcLogo;
        logoImg.alt = 'Логотип';

        const functionality = document.createElement('div');
        functionality.classList.add('functionality');

        const search = document.createElement('div');
        search.classList.add('search');

        const searchForm = document.createElement('form');

        const searchIcon = document.createElement('span');
        searchIcon.classList.add('search-icon');

        const searchIconImg = document.createElement('i');
        searchIconImg.classList.add('fas', 'fa-search');

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search...';

        const user = document.createElement('div');
        user.classList.add('user');

        const notificationBtn = document.createElement('button');
        notificationBtn.classList.add('notification');

        const notificationIcon = document.createElement('i');
        notificationIcon.classList.add('fas', 'fa-bell', 'fa-lg');

        const questionsBtn = document.createElement('button');
        questionsBtn.classList.add('questions');

        const questionsIcon = document.createElement('i');
        questionsIcon.classList.add('fas', 'fa-question', 'fa-lg');

        const usernameLink = document.createElement('a');
        usernameLink.href = '#';

        const username = document.createElement('h5');
        username.textContent = this.user;
        username.classList.add('.user__name');

        // Добавляем элементы в родительские элементы
        searchIcon.appendChild(searchIconImg);
        searchForm.appendChild(searchIcon);
        searchForm.appendChild(searchInput);
        search.appendChild(searchForm);

        notificationBtn.appendChild(notificationIcon);
        questionsBtn.appendChild(questionsIcon);
        usernameLink.appendChild(username);

        user.appendChild(notificationBtn);
        user.appendChild(questionsBtn);
        user.appendChild(usernameLink);

        logoLink.appendChild(logoImg);
        logo.appendChild(logoLink);

        functionality.appendChild(search);
        functionality.appendChild(user);

        // Добавляем созданные элементы на страницу
        const container = document.querySelector(this.id);
        container.appendChild(logo);
        container.appendChild(functionality);

        document.body.appendChild(container);

    }
}
