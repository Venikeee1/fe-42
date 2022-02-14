import axios from 'axios';
import apiSettings from './settings';

const { movieApiUrl, movieKey } = apiSettings;

export const getPopularMovies = (page = 1) => {
  return axios.get(`${movieApiUrl}/movie/popular?api_key=${movieKey}&page=${page}`);
};
