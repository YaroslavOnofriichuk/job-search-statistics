import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../userContext/userContext';
import { HomePageSection } from './HomePage.Styled';
import { ImageList } from '../../components/ImageList/ImageList';

export const HomePage = () => {
  const { isLoggedIn } = useUserContext();
  const location = useLocation();

  return (
    <HomePageSection>
      <div>
        {isLoggedIn ? (
          <StyledLink to="/notes/create" state={{ from: location }}>
            Створити замітку
          </StyledLink>
        ) : (
          <>
            <StyledLink to="/user/register" state={{ from: location }}>
              Зареєструватися
            </StyledLink>

            <StyledLink to="/user/login" state={{ from: location }}>
              Авторизуватися
            </StyledLink>
          </>
        )}
      </div>

      <ImageList />
    </HomePageSection>
  );
};
