// const foo = function (callback) {
//   callback(10);
// };

// const logger = function (value) {
//   console.log(value);
// };

// foo(logger);

/** В чем разница между forEach и map? */

{
  const arr = [1, 2, 3, 4, 10];
  const callback = (item) => item * 2;
  const newArr = arr.map(callback);
  const foreachArr = arr.forEach(callback);

  // метод map на минималках

  const map = function (arr, callback) {
    let res = [];

    for (const item of arr) {
      res.push(callback(item));
    }

    return res;
  };

  // метод foreach на минималках

  const forEach = function (arr, callback) {
    for (const item of arr) {
      callback(item);
    }
  };

  console.log(newArr);
  console.log(foreachArr);
}
