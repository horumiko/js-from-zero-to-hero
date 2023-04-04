/* eslint-disable consistent-return */
const list = [{
    value: 'Пункт 1.',
    children: null,
  },
  
  {
    value: 'Пункт 2.',
    children: [{
      value: 'Подпункт 2.1.',
      children: null,
    },
    {
      value: 'Подпункт 2.2.',
      children: [
        {
          value: 'Подпункт 2.2.1.',
          children: null,
        },
        {
          value: 'Подпункт 2.2.2.',
          children: [
            {
              value: 'Подпункт 2.2.2.1',
              children: null,
            }],
        },
      ],
    },
    {
      value: 'Подпункт 2.3.',
      children: [
        {
          value: 'Подпункт 2.3.1',
          children: [
            {
              value: 'Подпункт 2.3.1.1',
              children: null,
            },
            {
              value: 'Подпункт 2.3.1.2',
              children: null,
            },
          ],
        },
      ],
    },
    ],
  },
  {
    value: 'Пункт 3.',
    children: [{
      value: 'Подпункт 3.1.',
      children: null,
    },
    {
      value: 'Подпункт 3.2.',
      children: [
        {
          value: 'Подпункт 3.2.1.',
          children: null,
        },
        {
          value: 'Подпункт 3.2.2.',
          children: [
            {
              value: 'Подпункт 3.2.2.1',
              children: null,
            }],
        },
      ],
    },
    {
      value: 'Подпункт 3.3.',
      children: [
        {
          value: 'Подпункт 3.3.1',
          children: [
            {
              value: 'Подпункт 3.3.1.1',
              children: null,
            },
            {
              value: 'Подпункт 3.3.1.2',
              children: null,
            },
          ],
        },
      ],
    },
    {
      value: 'Подпункт 3.4.',
      children: null,
    },
    ],
  },
  ];
  
  function createElement(node, parent) {
    const li = document.createElement('li');
    const txt = document.createElement('span');
    txt.textContent = node.value;
    li.style.fontSize = '0.9em';
    txt.style.fontSize = '1em';
    txt.classList.add('li');
    const ul = document.createElement('ul');
    li.append(txt, ul);
    parent.append(li);
    
    node.children?.forEach(nod => createElement(nod, ul));
  }
  
  function createList(nodes, title) {
    const root = document.getElementById('main');
    root.style.fontSize = '24px';
    const titleList = document.createElement('h2');
    titleList.textContent = title;
    const root1 = document.createElement('ul');
    root.append(titleList, root1);
    if (!nodes.length) return;
    nodes.forEach((node) => createElement(node, root1));
  }

  createList(list, 'List');
  
  function hideFunction(e) {
    e.stopPropagation();
    e.target.nextElementSibling.classList.toggle('display_none');
  }
  document.querySelectorAll('.li').forEach((el) => el.addEventListener('click', hideFunction));