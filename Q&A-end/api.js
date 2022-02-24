// import axios from 'axios';
// // api
// export const fetchUser = async () => {
//   try {
//     return await axios.get('https://api.com/users');
//   } catch (error) {
//     await axios.post('https://error-statistic.com', error);

//     return Promise.reject(error);
//   }
// };

// export const fetchUser = () => {
//   return axios.get('https://api.com/users');
// };

// User settings page

// import { fetchUser } from './api.js';

// const displayUserSettings = async () => {
//   try {
//     const { data: user } = await axios.get('https://api.com/users');
//   } catch (error) {
//     console.error(error);
//   }
// };

// app.get('/news/:slug', async function (req, res) {
//   const { slug } = req.params;
//   const news = await axios.get(`news?slug=${slug}`);

//   res.json(slug);
// });

// Прокинуть ошибку
try {
  try {
  } catch (error) {
    console.error(error);
    throw error;
  }
} catch (error) {
  console.log(error);
}

// Порядок выполнения

console.log('1');

const sum = (a, b) => {
  const res = a + b;
  console.log(res);

  return res;
};

const func = async () => {
  console.log('2');
  const value = await sum(4, 6);
  const value = await Promise.resolve(10);
  console.log(value);
  console.log('4');
};
func();
console.log('5');

Promise.resolve(10).then((val) => console.log(val));
// const promise = {
//   resolvedValue: 10,
//   status: 'fulfilled',
//   onSuccess: [],
//   then(cb) {
//     this.onSuccess.push(cb)
//     return cb(this.resolvedValue)
//   }
// }

const foo = (brand) => {
  for (let item of [1, 2, 3]) {
    if (item === 2) return;
  }

  if (brand === 'audi') {
    return 'audi';
  }

  if (brand === 'bmw') {
    return 'bmw';
  }

  if (brand === 'mersedes') {
    return 'audi';
  }

  return 'ford';
};
