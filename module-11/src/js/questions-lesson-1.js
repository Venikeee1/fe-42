const createElement = (nodeName, options, children) => {
  const nodeElement = document.createElement(nodeName);
  const { class: nodeClass, ...restOptions } = options;

  if (nodeClass) {
    const classList = nodeClass.split(' '); // ['title', 'description']
    nodeElement.classList.add(...classList);
  }

  Object.keys(restOptions).forEach(optionKey => {
    nodeElement[optionKey] = restOptions[optionKey];
  });

  if (children) {
    const nodeChildren = Array.isArray(children) ? children : [children];
    nodeElement.append(...nodeChildren);
  }

  return nodeElement;
};

const title = createElement(
  'h1',
  {
    class: 'title description',
  },
  'Super title',
);

const cardImg = createElement('img', {
  class: 'cardImg',
  src: 'https://fakeimg.png',
});

const cardTitle = createElement(
  'h2',
  {
    class: 'card-title',
  },
  'Card title',
);

const cardEl = createElement(
  'div',
  {
    class: 'card',
  },
  [cardImg, cardTitle],
);

console.log(cardEl);
