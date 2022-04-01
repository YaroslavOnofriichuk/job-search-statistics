import { Outlet } from 'react-router-dom';
import { StyledLink } from '../../components/GlobalStyle/Link.Styled';

export const StatisticPage = () => {
  return (
    <>
      <h2>Сторінка на стадії розробки</h2>
      {/* <StyledLink to="feedback">Графік відгуків</StyledLink>
      <StyledLink to="source">Статистика джерел</StyledLink> */}
      <Outlet />
    </>
  );
};
