const getUsers = async () => {
  const res = await fetch('https://some-site');
  const user = await res.json();
  console.log(user.name);

  // const user = {
  //   name: 'Tom'
  // }

  //return await res.json();
  return res.json();
};

getUsers().then(res => console.log(res));

const wait = delay => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

const asyncActions = async () => {
  await wait(2000);
  console.log(1312312);
  await wait(4000);
  console.log(1312312);
};

const fetchAll = async () => {
  let arrOfUsers = [];

  for (let id of userIds) {
    const res = await fetch(`${baseUrl}/users/${id}`);
    const user = await res.json();
    arrOfUsers.push(user);
  }
  // const arrayOfPromises = userIds.map(async userId => {
  //   const response = await fetch(`${baseUrl}/users/${userId}`);
  //   return response.json();
  // });
};

const getUser = () => {
  return fetch('https://usesr.com');
};

export const apiService = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    const error = await res.json();
    return Promise.reject(error);
  }

  return res.json();
};

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.pagination = new Pagination({
      onChange(currentPage) {
        fetchImg(currentPage);
      },
    });
  }

  async fetchImg(page) {
    const BASE_URL = 'https://pixabay.com/api';
    const API_KEY = '12565678-dacc4bb7fef27484506aaaffc';
    const SEARCH_OPTIONS = 'image_type=photo&orientation=horizontal&safesearch=true';

    try {
      const response = await axios.get(
        `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&${SEARCH_OPTIONS}&page=${page}&per_page=40`,
      );
      this.incrementPage();
      return await response.data;
    } catch (error) {}
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
