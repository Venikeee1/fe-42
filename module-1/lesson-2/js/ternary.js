// const password = 'qwerty';
// const userInput = prompt('Enter password');
// const isLoggedIn = password === userInput;
// const userRole = isLoggedIn ? 'admin' : 'user';

// console.log(userRole);

// Очень плохо
//const value = 100;
// const size = value > 100 ? 'xxxl' : value < 100 ? 'm' : 'l';

const boxSizeInput = prompt('Enter box size');
/*
Более длинный вариант
let boxSize;

if (boxSizeInput > 100) {
  boxSize = 'xl';
} else {
  boxSize = 'm';
}
*/

const boxSize = boxSizeInput > 100 && boxSizeInput < 150 ? 'xl' : 'm';
console.log(boxSize);
