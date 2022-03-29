import { IconContext } from 'react-icons';
import {
  BsHouseDoor,
  BsBarChartLine,
  BsCardText,
  BsCalendarWeek,
  BsPerson,
  BsArrowDownUp,
} from 'react-icons/bs';

export const HomeIcon = ({ size = '2em', color = '#ffffff' }) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsHouseDoor />
      </div>
    </IconContext.Provider>
  );
};

export const StatisticIcon = ({ size = '2em', color = '#ffffff' }) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsBarChartLine />
      </div>
    </IconContext.Provider>
  );
};

export const ListIcon = ({ size = '2em', color = '#ffffff' }) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsCardText />
      </div>
    </IconContext.Provider>
  );
};

export const CalendarIcon = ({ size = '2em', color = '#ffffff' }) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsCalendarWeek />
      </div>
    </IconContext.Provider>
  );
};

export const UserIcon = ({ size = '2em', color = '#ffffff' }) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsPerson />
      </div>
    </IconContext.Provider>
  );
};

export const SortIcon = ({ size = '2em', color = '#ffffff' }) => {
  return (
    <IconContext.Provider value={{ color: `${color}`, size: `${size}` }}>
      <div>
        <BsArrowDownUp />
      </div>
    </IconContext.Provider>
  );
};
