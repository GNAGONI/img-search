import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUserUsername, getUserIsAuthenticated } from '../Login/state/selectors';
import { logoutRequest } from '../Login/state/slice';
import Button from '../../components/Button';
import Header from '../../components/Header';

const Layout = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getUserIsAuthenticated);
  const username = useSelector(getUserUsername);

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <>
      {isAuthenticated &&
        <Header>
          <div>Hello, {username}</div>
          <Button onClick={logout} title="Log out" />
        </Header>
      }
      <Outlet />
    </>
  );
};

export default Layout;