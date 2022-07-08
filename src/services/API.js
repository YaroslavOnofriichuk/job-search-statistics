import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7000/api/v1/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async data => {
  const user = await axios.post('auth/register', data);
  return user;
};

export const loginUser = async data => {
  const user = await axios.post('auth/login', data);
  token.set(user.data.token);
  return user;
};

export const logOutUser = async () => {
  const user = await axios.get('auth/logout');
  token.unset();
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
