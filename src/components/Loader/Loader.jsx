import ClipLoader from 'react-spinners/ClipLoader';
import { Div } from './Loader.Styled';
import PropTypes from 'prop-types';

export const Loader = ({ color = '#ffffff', loading = true, size = 150 }) => {
  return (
    <Div>
      <ClipLoader color={color} loading={loading} size={size} />
    </Div>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number,
};
