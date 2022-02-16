export const createElement = (nodeName, options, children) => {
  const nodeElement = document.createElement(nodeName);
  const { class: nodeClass, dataset, ...restOptions } = options;

  if (nodeClass) {
    const classList = nodeClass.split(' '); // ['title', 'description']
    nodeElement.classList.add(...classList); 
  }

  if (children) {
    const nodeChildren = Array.isArray(children) ? children : [children];
    nodeElement.append(...nodeChildren);
  }

  if (dataset) {
    Object.entries(dataset).forEach(dataAttr => {
      const [dataKey, dataValue] = dataAttr;
      nodeElement.setAttribute(`data-${dataKey}`, dataValue);
    });
  }

  Object.keys(restOptions).forEach(optionKey => {
    nodeElement[optionKey] = restOptions[optionKey];
  });

  return nodeElement;
};
