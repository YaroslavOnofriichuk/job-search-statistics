import { Button } from '../../components/GlobalStyle/Button';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { Avatar } from '../../components/Avatar/Avatar';
import { UserPageSection } from './UserPage.Styled';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../userContext/userContext';
import { logOutUser } from '../../services/API';

export const UserPage = () => {
  const { isLoggedIn, user, logOut } = useUserContext();
  const location = useLocation();

  const handleLogOut = async () => {
    try {
      await logOutUser();
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserPageSection>
      <Avatar />

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
          Змінити ім'я
        </StyledLink>
      )}

      {isLoggedIn && (
        <StyledLink to="avatar" state={{ from: location }}>
          Змінити аватар
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
