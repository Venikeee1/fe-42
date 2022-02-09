export const apiService = (url, options) => {
  return fetch(url, options).then(res => {
    if (!res.ok) {
      return res.json().then(error => Promise.reject(error));
    }
    return res.json();
  });
};
