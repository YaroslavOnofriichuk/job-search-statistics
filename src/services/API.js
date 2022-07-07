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
