import { useUserContext } from '../../userContext/userContext';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LimitedRoute = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  return !isLoggedIn ? children : <Navigate to="/user" />;
};

LimitedRoute.propTypes = {
  children: PropTypes.object,
};
