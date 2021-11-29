const user1 = 'John';
const user2 = 'Alex';

const users = ['John', 'Alex'];
// Еще один способ объявления массива
const newArray = new Array(['John', 'Alex']);
console.log(users[1], '--- второй элемент массива');
users[2] = 'Lesli';
users[1] = 'Foo'; // можно перезаписывать элементы массива
users[10] = 'Kiwi'; // делает длину массива равнай 11 и элементы между 3 и 9 undefined

const usersLength = users.length;

console.log(users, '--- users');
console.log(`Длина массива: ${usersLength}`);
console.log(`Последний элемент массива: ${users[usersLength - 1]}`);
