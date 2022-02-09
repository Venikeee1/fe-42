import { apiService } from './apiService';

const BASE_URL = 'https://api.opendota.com/api';

export const getHeroesList = () => {
  return apiService(`${BASE_URL}/heroes`);
};

export const getHeroById = id => {
  return apiService(`${BASE_URL}/heroes/${id}`);
};

// export const getHeroesList = () => {
//   return fetch(`${BASE_URL}/heroes1`).then(res => {
//     if (!res.ok) {
//       return res.json().then(error => Promise.reject(error));
//     }
//     return res.json();
//   });
// };

// export const getHeroById = id => {
//   return fetch(`${BASE_URL}/heroes/${id}`).then(res =>
//     {
//       if (!res.ok) {
//       return res.json().then(error => Promise.reject(error));
//     }
//     return res.json();
//     });
// };
