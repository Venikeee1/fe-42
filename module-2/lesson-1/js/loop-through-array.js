const cars = ['audi', 'bmw', 'ford', 'fiat'];
let result = '';

/** Цикл for */
// вывесьти только четные элементы в строку
for (let i = 0; i < cars.length; i += 2) {
  result += ` ${cars[i]}`;
}

console.log(`Результат суммы четных: ${result.trim()}`);

/** Цикл for of */
let allCars = '';
for (const car of cars) {
  allCars += ` ${car}`;
}

console.log(`Все машины: ${allCars.trim()}`);

/** Найти индекс элемента */
let carIndex;

for (let i = 0; i < cars.length; i += 1) {
  if (cars[i] === 'bmw') {
    carIndex = i;
    break;
  }
}

console.log(`БМВ находится под индексом: ${carIndex}`);

/** Если ауди или бмв сказать, что отличные маштны */
const niceCars = ['audi', 'bmw', 'toyota'];

for (const car of cars) {
  if (niceCars.includes(car)) {
    console.log(`Отличная машина: ${car}`);
    continue;
  }

  console.log(`Выбраная машина ничего так: ${car}`);
}

/** Присвоение по ссылке и по значению */
const a = 10;
let b = a;
b = 5;

console.log(a, b);

const foo = [1, 2, 3];
const baz = [1, 2, 3];
const bar = foo;
bar[0] = 15;

console.log(foo, bar);
// Здесь вернет true так как сравниваются по ссылке
console.log(foo === bar, 'равны ли массивы foo & bar');
// Здесь вернет false так как ссылки разные
console.log(foo === baz, 'равны ли массивы foo & baz');
