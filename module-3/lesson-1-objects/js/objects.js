const a = {
  22: 'dasdas',
};

const foo = {};

const bar = {
  a: 1,
  b: 2,
};

const arr = [1, 2, 3];

// Показывать ключ обэекта или индекс элемента в массиве
const showEveryItem = function (entity) {
  for (let item in entity) {
    console.log(`key: ${item}`);
    console.log(`Value: ${entity[item]}`);
  }
};

console.log(Object.entries(bar));
console.log('-------------');
showEveryItem(bar);
console.log('-------------');
showEveryItem(arr);
