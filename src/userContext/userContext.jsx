import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import {
  setUserData,
  getUserData,
  setAccessToken,
} from '../services/LocalStorage';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => getUserData('isLoggedIn'));
  const [user, setUser] = useState(() => getUserData('user'));
  // const [accessToken, setAccessToken] = useState(() =>
  //   getUserData('accessToken')
  // );

  useEffect(() => {
    setUserData({
      isLoggedIn,
      user,
    });
  }, [isLoggedIn, user]);

  const logIn = useCallback(data => {
    setIsLoggedIn(true);
    setUser(data.user);
    setAccessToken(data.accessToken);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
    setAccessToken(null);
  }, []);

  const changeUser = useCallback(data => {
    setUser(previousState => {
      return {
        ...previousState,
        ...data,
      };
    });
  }, []);

  const contextValue = useMemo(
    () => ({ isLoggedIn, user, logIn, logOut, changeUser }),
    [isLoggedIn, user, logIn, logOut, changeUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
