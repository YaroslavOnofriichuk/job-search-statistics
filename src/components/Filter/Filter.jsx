import { Input } from './Filter.Styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  const handleChange = event => {
    onFilter(event.currentTarget.value);
  };

  return <Input onChange={handleChange} placeholder="Пошук"></Input>;
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};
