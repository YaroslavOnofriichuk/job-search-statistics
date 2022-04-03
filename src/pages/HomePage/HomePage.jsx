import { StyledLink } from '../../components/GlobalStyle/Link.Styled';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../userContext/userContext';
import { Tittle } from '../../components/GlobalStyle/Tittle';
import { Section } from './HomePage.Styled';
import { Circle } from '../../components/Circle/Circle';

export const HomePage = () => {
  const { isLoggedIn } = useUserContext();
  const location = useLocation();

  return (
    <Section>
      <Tittle>Статистика пошуку роботи</Tittle>
      {!isLoggedIn && (
        <div>
          <StyledLink to="/user/register" state={{ from: location }}>
            Зареєструватися
          </StyledLink>

          <StyledLink to="/user/login" state={{ from: location }}>
            Авторизуватися
          </StyledLink>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <Circle />
        </div>
      )}
    </Section>
  );
};
