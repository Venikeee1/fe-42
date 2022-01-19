const mouseDecoratorEl = document.createElement('div');
const decoratorWidth = 30;
const decoratorHeight = 30;
mouseDecoratorEl.classList.add('cursor-decorator');

const scrollHandler = ({ clientX, clientY }) => {
  const x = clientX - decoratorWidth / 2;
  const y = clientY - decoratorHeight / 2;
  mouseDecoratorEl.style.transform = `translate(${x}px, ${y}px)`;
};

const debouncedScrollHandler = _.throttle(scrollHandler, 100);

window.addEventListener('mousemove', debouncedScrollHandler);

document.body.append(mouseDecoratorEl);
