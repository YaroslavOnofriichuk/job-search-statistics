import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          token: currentUser.accessToken,
          id: currentUser.uid,
          name: currentUser.displayName,
          image: currentUser.photoURL,
        });
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
  }, []);

  const logIn = useCallback(data => {
    setIsLoggedIn(true);
    setUser(data);
  }, []);

  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
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
