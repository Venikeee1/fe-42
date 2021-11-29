const words = ['JavaScript', 'это', 'интересно'];
console.log(words.join('😈')); // "JavaScript-это-интересно"

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
if (clients.indexOf('Monkong') === -1) {
  console.log('Monkong не найден');
}

if (!clients.includes('Monkong')) {
  console.log('Monkong не найден');
}

/** Заставить пользователя создать массив машин */
let cars = [];

// while (true) {
//   const car = prompt('Введите имя машины');

//   if (!car) break;

//   cars.push(car);
//   console.log(cars);
// }

const lastCar = cars.pop();
console.log(`Последний автомобиль ${lastCar}`);
console.log(cars, 'Массив после метода pop');

/** Забрать все элементы кроме первого и последнего */
{
  const fruits = ['kiwi', 'banana', 'apple', 'ananas', 'cucumber'];

  const fruitsWithoutEdgeElements = fruits.slice(1, fruits.length - 1);
  console.log(fruits, 'исходные фрукты после slice');
  console.log(fruitsWithoutEdgeElements, 'фрукты без крайних элементов');

  const fruitsSplice = fruits.splice(1, 3, 'audi');
  console.log(fruitsSplice, 'splice fruits');
  console.log(fruits, 'исходные фрукты после splice');
}

/** объеденить массивы в товары */
{
  const fruits = ['kiwi', 'banana', 'apple', 'ananas'];
  const vegetables = ['cabbage', 'tomato', 'cucumber'];

  const meals = fruits.concat(vegetables);
  // использования spread оператора
  // const meals1 = [...fruits, ...vegetables];
  console.log(`Все товары: ${meals}`);
}
