// найти самое длинное слово;
const findLongestWord = function (words) {
  let longestWord = '';
  const arrayOfWords = words.split(' ');
  console.log(arrayOfWords);

  for (const word of arrayOfWords) {
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

const testFindLongestWord = function (result, expectedValue) {
  if (result === expectedValue) {
    console.log('Hooorey');
    return;
  }

  console.error('ошибка');
};

const words1 = 'kiwi banana tomato potato cucumber';
const words2 = 'audi bmw';

testFindLongestWord(findLongestWord(words1), 'cucumber');
testFindLongestWord(findLongestWord(words2), 'audi');

/** Напиши функцию которая получает два массива произвольной длины в параметры
 *  array1 и array2,
 *  и возвращает новый массив, состоящий из тех элементов,
 *  которые присутствуют в обоих исходных массивах. */

const getCommonElements = function (arr1, arr2) {
  const result = [];

  for (const item of arr1) {
    const hasItem = arr2.includes(item);

    if (hasItem) {
      result.push(item);
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [10, 15, 22, 4, 222, 7];

console.log(getCommonElements(arr1, arr2));

/** Найти среднее значение элементов массива */

const getAvarageValue = function (arr) {
  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  return sum / arr.length;
};

console.log(getAvarageValue([1, 5, 2, 3, 4]), '---getAvarageValue');

/** Найти масимальное число */
const getMaxValue = function (arr) {
  if (!arr) {
    console.log('array is not valid');
    return;
  }

  let maxValue = arr[0];

  for (const item of arr) {
    if (typeof item === 'string') {
      continue;
    }

    if (item > maxValue) {
      maxValue = item;
    }
  }

  return maxValue;
};

console.log(getMaxValue([22, 11, 2222, 111]), '---getMaxValue');
console.log(getMaxValue(), '---getMaxValue');
