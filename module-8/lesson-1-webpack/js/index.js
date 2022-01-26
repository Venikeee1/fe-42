import { User as SuperUser } from './user';
import superFunction from './user';
import '../css/style.css';

const fooRef = document.querySelector('#foo');
const barRef = document.querySelector('#bar');

console.log(fooRef, barRef);

const user = new SuperUser();
user.say();

superFunction('dsadasdasdas');

const foo = {
  sada: 123,
  sada: 123,
};
