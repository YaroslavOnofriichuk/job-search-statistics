import { useUserContext } from '../../userContext/userContext';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  return isLoggedIn ? children : <Navigate to="/user" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
