/** Logger */
{
  const logger = (callback) => {
    // console.log(callback(10));
  };

  const logMessage = (value) => `The value is: ${value}`;
  // console.log(logMessage(100));
  // logger(logMessage);
}

/** Вызывать колбек для каждого четного индекса */

{
  const arr = [2, 4, 1, 1, 1];
  const logValue = (value, index) => console.log(`Value: ${value}. N${index}`);
  const multiplyValue = (value) => console.log(value * 2);
  const logItemIndex = (_, index) => console.log(`Index is : ${index}`);

  // arr - массив
  // callback - функция коллбек которая принимает первым аргументом элемент массива,
  // а вторым аргументом индекс. Сам колбек вызывается когда его индекс элемента четный

  const callFunctionOnEvenIndex = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        callback(arr[i], i);
      }
    }
  };

  // callFunctionOnEvenIndex(arr, logValue);
  // можно использовать анонимные функции
  // callFunctionOnEvenIndex(arr, (value) => console.log(value * 2));
  // callFunctionOnEvenIndex(arr, multiplyValue);
  // callFunctionOnEvenIndex(arr, logItemIndex);
}

/** ForEach */
{
  let total = 0;
  const arr = [10, 20, 30, 40];
  const logItem = (item, index, currentArray) => {
    console.log('item', item);
    console.log('index', index);
    console.log('currentArray', currentArray);
  };

  const logValueWithEvenIndex = (item, index) => {
    if (index % 2 === 0) {
      console.log(item);
    }
  };

  const logger = (item) => console.log(item);

  const sumAllValues = (item) => {
    total += item;
  };

  // arr.forEach(logItem);
  // arr.forEach(logValueWithEvenIndex);
  // arr.forEach(logger);
  arr.forEach(sumAllValues);
  // console.log(total);
}

/** Filter */
{
  const numbers = [1, 2, 3, 4, 5];
  const callBack = (value) => value > 3;
  const isEven = (value) => value % 2 === 0;
  const filteredNumbers1 = numbers.filter(callBack);
  const filteredNumbers2 = numbers.filter(isEven);
  console.log('filtered items', filteredNumbers1);
  console.log('even Items', filteredNumbers2);
}
