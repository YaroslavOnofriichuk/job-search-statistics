import axios from 'axios';
import { getUserData, setAccessToken } from './LocalStorage';

axios.defaults.baseURL =
  'https://job-search-statistics-api.herokuapp.com/api/v1/';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getUserData('accessToken')}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.data.message === 'Token expired' &&
      error.config &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const user = await axios.post('auth/refresh');
        setAccessToken(user.data.accessToken);
        axios.request(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export const registerUser = async data => {
  const user = await axios.post('auth/register', data);
  return user;
};

export const loginUser = async data => {
  const user = await axios.post('auth/login', data);
  setAccessToken(user.data.accessToken);
  return user;
};

export const logOutUser = async () => {
  const user = await axios.get('auth/logout');
  setAccessToken(null);
  return user;
};

export const changeName = async data => {
  const user = await axios.patch('users/name', data);
  return user;
};

export const changeAvatar = async data => {
  const user = await axios.patch('users/avatar', data);
  return user;
};

export const getCurrentUser = async () => {
  const user = await axios.get('users/current');
  return user;
};

export const addNote = async data => {
  const note = await axios.post('notes', data);
  return note;
};

export const getAllNotes = async (sortfield = 'date', sortType = 'desc') => {
  const notes = await axios.get(
    `notes/?sortfield=${sortfield}&sortType=${sortType}`
  );
  return notes;
};

export const getOneNote = async id => {
  const note = await axios.get(`notes/${id}`);
  return note;
};

export const deleteNote = async id => {
  const note = await axios.delete(`notes/${id}`);
  return note;
};

export const updateNote = async (id, data) => {
  const note = await axios.patch(`notes/${id}`, data);
  return note;
};
