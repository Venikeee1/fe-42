const sum = function (a, b) {
  return a + b;
};

foo();

const printUserInput = function () {
  const input = prompt('Введите слово');
  console.log(input);
};

console.log(sum(10, 20));
// printUserInput();

const testSum = function (result, expectedValue) {
  if (result === expectedValue) {
    console.log('Тест пройден');
    return;
  }

  console.error('Тест не пройден');
};

testSum(sum(3, 5), 8);

function foo() {
  console.log('foo');
}

// -------
// arg - произвольное название переменной
{
  const fn = function (...arg) {
    const firstTwoElements = arg.slice(0, 2);
    const restPaparms = arg.slice(2);
    console.log(firstTwoElements);
  };

  fn(10, 20, 30, 40, 50);
}

// return undefined
{
  const fn = function (a, b) {
    const c = a + b;
  };

  console.log(fn(5, 10));
}

// значения по умолчанию
{
  const sum = function (a = 1, b) {
    return a + b;
  };

  console.log(sum(5, 10));
  console.log(sum(5));
  console.log(sum());
}

// arguments; найти сумму всех аргументов функции
{
  const sum = function () {
    let total = 0;
    const arrOfArguments = Array.from(arguments);

    for (let i = 0; i < arrOfArguments.length; i++) {
      total += arguments[i];
    }

    return total;
  };

  console.log(sum(1, 2, 34, 5, 67, 10), '---total');
}

// Получение массива аргументов при помощи rest оператора
// args - произвольное имя
{
  const foo = function (...args) {
    console.log(args);
  };

  foo(1, 2, 3, 4, 5);
}

// Имя аргументов не зависит от имени параметров
{
  const sum = function (val1, val2) {
    return val1 + val2;
  };

  const potato1 = 10;
  const potato2 = 15;
  sum(potato1, potato2);
}

// Пример с собеседования
{
  const c = 15;

  const bar = function () {
    console.log(c);
  };

  const foo = function () {
    const c = 25;
    bar();
  };

  foo();
}
