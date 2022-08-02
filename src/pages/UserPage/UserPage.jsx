import { useState } from 'react';
import { Button } from '../../components/GlobalStyle/Button';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { Avatar } from '../../components/Avatar/Avatar';
import { Loader } from '../../components/Loader/Loader';
import { UserPageSection } from './UserPage.Styled';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../userContext/userContext';
import { logOutUser } from '../../services/API';
import { checkError } from '../../helpers';

export const UserPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn, user, logOut } = useUserContext();
  const location = useLocation();

  const handleLogOut = async () => {
    setIsLoading(true);

    try {
      await logOutUser();
      logOut();
    } catch (error) {
      checkError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserPageSection>
      {!isLoading && <Avatar />}

      {isLoggedIn && !isLoading && (
        <>
          <h2>{user?.name || user?.email}</h2>

          <StyledLink to="change" state={{ from: location }}>
            Змінити ім'я
          </StyledLink>

          <StyledLink to="avatar" state={{ from: location }}>
            Змінити аватар
          </StyledLink>

          <Button type="button" onClick={handleLogOut}>
            Вийти
          </Button>
        </>
      )}

      {!isLoggedIn && !isLoading && (
        <>
          <StyledLink to="register" state={{ from: location }}>
            Зареєструватися
          </StyledLink>

          <StyledLink to="login" state={{ from: location }}>
            Авторизуватися
          </StyledLink>
        </>
      )}

      <Loader loading={isLoading} />
    </UserPageSection>
  );
};
