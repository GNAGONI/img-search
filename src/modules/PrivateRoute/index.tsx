import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserIsAuthenticated } from '../Login/state/selectors';

const PrivateRoute = ({ children }: { children: ReactElement<any, any> }) => {
  const isAuthenticated = useSelector(getUserIsAuthenticated);
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
