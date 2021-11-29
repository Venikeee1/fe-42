const userName = prompt('Please eneter user name');
const userNameLength = userName.length;

if (userNameLength <= 2) {
  console.warn('Длина имени слишком коротка');
} else if (userNameLength > 10) {
  console.log('Имя превысело лимит символов');
} else {
  console.log('Имя прошло проверку');
}

// Получить случайное значение в диапазоне от 70 до 100
// 70 - 100
const minValue = 70;
const maxValue = 100;
const randomValue =
  minValue + Math.round(Math.random() * (maxValue - minValue));
console.log(randomValue);

// Пример nulish operator "??"
const incomingValue = undefined;
const defaultValue = 10;

const value = incomingValue ?? defaultValue;
console.log(value);
