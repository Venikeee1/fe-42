const arr = [4, 23, 11, 220];
const minValue = Math.min(...arr);

const getName = function (...restArgs) {
  console.log(restArgs);
};

getName(1, 2, 3, 4);

const user = {
  name: 'Tom',
  age: 22,
  salary: 20000,
};

const { name, ...restUserProps } = user;

// аналог записи выше
// const name = user.name;
// const restUserProps = {
//   age: user.age,
//   salary: user.salary,
// };

console.log(restUserProps);

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

const { genres, rating, ...shortBookInfo } = book;
console.log(shortBookInfo);

for (const key in book) {
  if (shortBookInfo.hasOwnProperty(key)) {
    console.log(`Key: ${key}: ${book[key]}`);
  }
}
