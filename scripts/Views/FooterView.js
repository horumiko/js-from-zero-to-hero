export default class FooterView {

    display(params) {
        // Создаем элемент footer
        const footer = document.createElement('footer');
        // Добавляем ему класс footer
        footer.classList.add('footer');

        // Создаем элемент div
        const div = document.createElement('div');
        // Добавляем ему класс footer-info
        div.classList.add('footer-info');

        // Создаем элемент p с классом app-name и добавляем в div
        const appName = document.createElement('p');
        appName.classList.add('app-name');
        appName.textContent = 'Flaming Task';
        div.appendChild(appName);

        // Создаем элемент p с классом app-author и добавляем в div
        const appAuthor = document.createElement('p');
        appAuthor.classList.add('app-author');
        appAuthor.textContent = 'Author: @horumiko';
        div.appendChild(appAuthor);

        // Создаем элемент p с классом app-author-email и добавляем в div
        const appAuthorEmail = document.createElement('p');
        appAuthorEmail.classList.add('app-author-email');
        appAuthorEmail.textContent = 'uladzislau.rosgro@gmail.com';
        div.appendChild(appAuthorEmail);

        // Добавляем div в footer
        footer.appendChild(div);

        // Создаем элемент p с классом app-last-update и добавляем в footer
        const lastUpdate = document.createElement('p');
        lastUpdate.classList.add('app-last-update');
        lastUpdate.textContent = 'Last upd: 17/02/2023';
        footer.appendChild(lastUpdate);

        // Добавляем footer в нужное место на странице
        document.body.appendChild(footer);

    }
}