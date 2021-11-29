const userInput = prompt('Enter car type');

// bmw, audi, kia, ford

/*
Выражение через if
if (userInput === 'bmw') {
  console.log('Почему не ауди?');
} else if (userInput === 'audi') {
  console.log('Вы знаете толк в машинах');
} else if (userInput === 'kia') {
  console.log('Оказывается вы любите Kpop');
} else if (userInput === 'ford') {
  console.log('Вы скорее всего с Америке');
}
*/

switch (userInput.toLowerCase()) {
  case 'bmw':
  case 'audi':
    console.log('Вы знаете толк в машинах');
    break;

  case 'kia':
    console.log('Оказывается вы любите Kpop');
    break;

  case 'ford':
    console.log('Вы скорее всего с Америке');
    break;

  default:
    console.log('А вам точно нужен автомобиль');
}
