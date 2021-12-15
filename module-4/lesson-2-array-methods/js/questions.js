const foo = [1, 2, 34];
// const result = foo.forEach();

// const calcVolume = (x) => (y) => (z) => x * y * z;
// const result = calcVolume(1)(2)(3)

const user = {
  name: 'John',
};

// Без деструктуризации
// const showName = (user) => {
//   console.log(user.name);
// };

const showName = ({ name }) => {
  console.log(name);
};

const matrix = [
  [1, 2],
  [3, 4],
];

for (const row of matrix) {
  for (const item of row) {
    console.log(item);
  }
}
// row = [1,2]; index: 0;
//-- item = 1; index: 0
//-- item = 2; index: 1
// row = [3,4]; index: 1;
//-- item = 3; index: 0
//-- item = 4; index: 1

const PRODUCT_PRICE = 10;

const calcProductsValue = (productQuantity) => {
  return productQuantity * PRODUCT_PRICE;
};

const logger = (value) => console.log(value);

const totalPrice1 = calcProductsValue(10);
// невозможно изменить константу
// PRODUCT_PRICE = 15;

const totalPrice2 = calcProductsValue(10);
console.log('totalPrice1', totalPrice1);
console.log('totalPrice2', totalPrice2);
logger('dsafsaf');
