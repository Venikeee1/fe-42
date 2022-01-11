const h1 = document.querySelector('h1');
// метод превращения псевдомассива элементов в массив
// const items = [...document.querySelectorAll('li')];
const items = Array.from(document.querySelectorAll('li'));
// console.log(h1);
// console.log(h1.parentNode);
// console.log('previousElementSibling', h1.previousElementSibling);
// console.log('nextElementSibling', h1.nextElementSibling);
// console.log('children', h1.children);
// console.log('childNodes', h1.childNodes);

// console.log(items);
const buttonRef = document.querySelector('.action');
buttonRef.classList.add('alert');
buttonRef.style.fontSize = '20px';
buttonRef.setAttribute('disabled', true);
buttonRef.setAttribute('data-foo', 222);
// console.log(buttonRef);

const textRef = document.querySelector('.text');
console.log(textRef.textContent);
