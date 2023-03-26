const list = [

    {

        value: 'Пункт 1.',

        children: null,

    },

    {

        value: 'Пункт 2.',

        children: [

            {

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

                        children: null,

                    }

                ],

            },

            {

                value: 'Подпункт 2.3.',

                children: null,

            }

        ]

    },

    {

        value: 'Пункт 3.',

        children: null,

    }

]

function createElement(node) {
    const li = document.createElement('li');
    li.textContent = node.value;
    li.style.fontSize = '0.9em';
    if (node.children) {
      const ul = document.createElement('ul');
      node.children.forEach((child) => {
        ul.append(createElement(child));
      });
      li.append(ul);
    }
    return li;
  }
  
  function createList(nodes, title) {
    const root = document.getElementById('main');
    root.style.fontSize = '24px';
  
    const titleList = document.createElement('h2');
    titleList.textContent = title;
  
    const list = document.createElement('ul');
    nodes.forEach((node) => {
      list.append(createElement(node));
    });
  
    root.append(titleList, list);
  }
  

createList(list, 'My list');