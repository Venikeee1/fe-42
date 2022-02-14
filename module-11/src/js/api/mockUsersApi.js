import axios from 'axios';
import apiSettings from './settings';

const { MOCK_API_URL } = apiSettings;
const NAMESPACE = 'users';

// get users
export const getUsers = () => {
  return axios.get(`${MOCK_API_URL}/${NAMESPACE}`);
};

// get users by id
export const getUserById = id => {
  return axios.get(`${MOCK_API_URL}/${NAMESPACE}/${id}`);
};

// create user
export const createUser = userData => {
  return axios.post(`${MOCK_API_URL}/${NAMESPACE}`, userData);
};

// update user
export const updateUser = (id, userData) => {
  return axios.put(`${MOCK_API_URL}/${NAMESPACE}/${id}`, userData);
};

// delete user
export const deleteUser = id => {
  return axios.delete(`${MOCK_API_URL}/${NAMESPACE}/${id}`);
};
