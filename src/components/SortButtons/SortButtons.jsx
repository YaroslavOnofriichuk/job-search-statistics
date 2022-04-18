import { SortIcon } from '../icons/icons';
import { Div } from './SortButtons.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const SortButtons = ({ handleSort }) => {
  const [isOpenList, setIsOpenList] = useState(false);

  const handleClick = e => {
    const data = e.target.attributes.data.value;
    handleSort(data);
  };

  const onClick = () => {
    setIsOpenList(!isOpenList);
  };

  return (
    <Div onClick={onClick}>
      <div>
        Сортувати &nbsp;
        <SortIcon size="1em" />
      </div>

      {isOpenList && (
        <ul>
          <li data="date" onClick={handleClick}>
            По даті
          </li>
          <li data="position" onClick={handleClick}>
            По позиції
          </li>
          <li data="company" onClick={handleClick}>
            По компанії
          </li>
          <li data="source" onClick={handleClick}>
            По джерелу
          </li>
          <li data="description" onClick={handleClick}>
            По опису
          </li>
          <li data="status" onClick={handleClick}>
            По статусу
          </li>
        </ul>
      )}
    </Div>
  );
};

SortButtons.propTypes = {
  handleSort: PropTypes.func,
};
