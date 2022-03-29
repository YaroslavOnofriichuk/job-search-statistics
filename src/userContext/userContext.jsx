import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const logIn = useCallback(data => {
    setIsLoggedIn(true);
    setUser(data);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({ isLoggedIn, user, logIn, logOut }),
    [isLoggedIn, user, logIn, logOut]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
