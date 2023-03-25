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

    export default tasks;