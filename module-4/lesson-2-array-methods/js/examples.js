/** Основные аргументы в большенстве перебирающих методов массива */
const callback = (item, index, currentArray) => {};

const products = [
  {
    id: 1,
    price: 1222,
    name: 'iphone',
    tags: ['phone', 'expensive'],
  },
  {
    id: 2,
    price: 222,
    name: 'samsung',
    tags: ['phone', 'mediumPrice'],
  },
  {
    id: 3,
    price: 10000,
    name: 'nokia3310',
    tags: ['phone', 'unbreakable'],
  },
  {
    id: 4,
    price: 100,
    name: 'star wars sword',
    tags: ['weapon'],
  },
];

/** Method map */
{
  // Получить массив цен
  // const productsPrices = products.map((product) => product.price);
  // Используя деструктуризацию
  const getPrice = ({ price }) => price;
  const logger = (product, index, array) =>
    console.log(
      `Product ${product.name}; Index: ${index}; Length: ${array.length}`
    );
  const productsPrices1 = products.map(getPrice);
  // console.log(productsPrices);

  const arrayMap = (array, callBack) => {
    // products
    // callBack = ({ price }) => price;
    let result = [];

    for (let i = 0; i < array.length; i++) {
      const newItem = callBack(array[i], i, array);
      result.push(newItem);
    }

    return result;
  };

  const productsPrices2 = arrayMap(products, getPrice);
  // arrayMap(products, logger);
  // console.log(productsPrices2);
}

/** Method flatMap */

{
  // const getTags = (product) => product.tags;
  const getTags = ({ tags }) => tags;

  const flatMap = (array, callBack) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      const newItem = callBack(array[i], i, array);
      // 0: ['phone', 'expensive']
      // 1: ['phone', 'mediumPrice']

      if (Array.isArray(newItem)) {
        for (const item of newItem) {
          result.push(item);
        }

        // с использованием спреда
        // result = [...result, ...newItem];
      } else {
        result.push(newItem);
      }
    }

    return result;
  };

  const tags = flatMap(products, getTags);
  // const tags = products.flatMap(getTags);
  // console.log(tags);
}

/** Method filter */

{
  const filterByPrice = (product) => product.price > 500;

  const filterArray = (array, callBack) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
      const isSelected = callBack(array[i], i, array);

      if (isSelected) {
        result.push(array[i]);
      }
    }

    return result;
  };

  const filteredProducts = filterArray(products, filterByPrice);
  // const filteredProducts = products.filter(filterByPrice);
  // console.log(filteredProducts);
}

/** Method find */
{
  const findSamsung = (product) => product.name === 'samsung';

  const findInArray = (array, callback) => {
    let searchedItem;

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        searchedItem = array[i];
        break;
      }
    }

    return searchedItem;
  };

  const phone = findInArray(products, findSamsung);
  const product = findInArray(products, (product) => product.name === ' ');
  // const phone = products.find(findSamsung);
  // console.log(phone);
  // console.log(product);
}

/** Method every & some */
{
  const hasName = (product) => product.name;

  const arrayEvery = (array, callBack) => {
    let result = true;

    for (let i = 0; i < array.length; i++) {
      if (!callBack(array[i], i, array)) {
        result = false;
        break;
      }
    }

    return result;
  };

  const arraySome = (array, callBack) => {
    let result = false;

    for (let i = 0; i < array.length; i++) {
      if (callBack(array[i], i, array)) {
        result = true;
        break;
      }
    }

    return result;
  };

  const productsHasNames = arrayEvery(products, hasName);
  // const productsHasNames = products.every(hasName);
  const someProductsHasNames = arraySome(products, hasName);
  // const someProductsHasNames = products.some(hasName);
  // console.log(productsHasNames);
  // console.log(someProductsHasNames);
}

/** Method reduce */
{
  // найти сумму всех елементов
  const sumProductPrice = (prevValue, product) => {
    return prevValue + product.price;
  };

  const showAllProductNames = (prevValue, product) => {
    return prevValue + product.name;
  };

  const arrayReduce = (array, callBack, initialValue) => {
    let accumulator = initialValue ?? array[0];
    const index = initialValue === undefined ? 1 : 0;

    for (let i = index; i < array.length; i++) {
      accumulator = callBack(accumulator, array[i], i, array);
    }

    return accumulator;
  };

  const sum = arrayReduce(products, sumProductPrice, 0);
  const allNames = arrayReduce(products, showAllProductNames, '');
  // const sum = products.reduce(sumProductPrice, 0);

  console.log('sum', sum);
  console.log('allNames', allNames);
}
