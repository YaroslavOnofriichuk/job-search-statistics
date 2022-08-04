export const setUserData = newData => {
  try {
    const data = JSON.parse(localStorage.getItem('jss'));
    localStorage.setItem('jss', JSON.stringify({ ...data, ...newData }));
  } catch (error) {
    console.log(error);
    localStorage.setItem('jss', JSON.stringify(newData));
  }
};

export const setAccessToken = accessToken => {
  try {
    const data = JSON.parse(localStorage.getItem('jss'));
    localStorage.setItem('jss', JSON.stringify({ ...data, accessToken }));
  } catch (error) {
    console.log(error);
  }
};

export const setRefreshToken = refreshToken => {
  try {
    const data = JSON.parse(localStorage.getItem('jss'));
    localStorage.setItem('jss', JSON.stringify({ ...data, refreshToken }));
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = name => {
  try {
    const data = JSON.parse(localStorage.getItem('jss'));
    return data[name];
  } catch (error) {
    console.log(error);
    return null;
  }
};
