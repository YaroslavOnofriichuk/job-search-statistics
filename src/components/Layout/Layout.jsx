import { Outlet, NavLink } from 'react-router-dom';
import { Section, Header, Main } from './Layout.Styled';
import {
  HomeIcon,
  StatisticIcon,
  ListIcon,
  CalendarIcon,
  UserIcon,
} from '../icons/icons';

export const Layout = () => {
  return (
    <Section>
      <Header>
        <nav>
          <ul>
            <li>
              <NavLink to="home" activeclassname="active">
                <HomeIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="notes" activeclassname="active">
                <ListIcon />
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="statistic" activeclassname="active">
                <StatisticIcon />
              </NavLink>
            </li> */}
            <li>
              <NavLink to="calendar" activeclassname="active">
                <CalendarIcon />
              </NavLink>
            </li>
            <li>
              <NavLink to="user" activeclassname="active">
                <UserIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Section>
  );
};
