import { Outlet } from 'react-router-dom';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';

export const StatisticPage = () => {
  return (
    <>
      <StyledLink to="feedback">Графік відгуків</StyledLink>
      <StyledLink to="source">Статистика джерел</StyledLink>
      <Outlet />
    </>
  );
};
