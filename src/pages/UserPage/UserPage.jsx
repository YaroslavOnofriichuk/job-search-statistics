import { Button } from '../../components/GlobalStyle/Button';
import { UserIcon } from '../../components/icons/icons';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { UserPageSection } from './UserPage.Styled';
import { getAuth, signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../userContext/userContext';

export const UserPage = () => {
  const auth = getAuth();
  const { isLoggedIn, user, logOut } = useUserContext();
  const location = useLocation();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserPageSection>
      <UserIcon size="5em" />

      {isLoggedIn && <h2>{user?.name || user?.email}</h2>}

      {!isLoggedIn && (
        <StyledLink to="register" state={{ from: location }}>
          Зареєструватися
        </StyledLink>
      )}

      {!isLoggedIn && (
        <StyledLink to="login" state={{ from: location }}>
          Авторизуватися
        </StyledLink>
      )}

      {isLoggedIn && (
        <StyledLink to="change" state={{ from: location }}>
          Редагувати профіль
        </StyledLink>
      )}

      {isLoggedIn && (
        <Button type="button" onClick={handleLogOut}>
          Вийти
        </Button>
      )}
    </UserPageSection>
  );
};
