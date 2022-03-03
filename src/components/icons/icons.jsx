import { IconContext } from 'react-icons';
import {
  BsHouseDoor,
  BsBarChartLine,
  BsCardText,
  BsCalendarWeek,
  BsPerson,
  BsArrowDownUp,
} from 'react-icons/bs';

export const HomeIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#ffffff', size: '2em' }}>
      <div>
        <BsHouseDoor />
      </div>
    </IconContext.Provider>
  );
};

export const StatisticIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#ffffff', size: '2em' }}>
      <div>
        <BsBarChartLine />
      </div>
    </IconContext.Provider>
  );
};

export const ListIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#ffffff', size: '2em' }}>
      <div>
        <BsCardText />
      </div>
    </IconContext.Provider>
  );
};

export const CalendarIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#ffffff', size: '2em' }}>
      <div>
        <BsCalendarWeek />
      </div>
    </IconContext.Provider>
  );
};

export const UserIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#ffffff', size: '2em' }}>
      <div>
        <BsPerson />
      </div>
    </IconContext.Provider>
  );
};

export const SortIcon = () => {
  return (
    <IconContext.Provider value={{ color: '#ffffff', size: '1em' }}>
      <div>
        <BsArrowDownUp />
      </div>
    </IconContext.Provider>
  );
};
