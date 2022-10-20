import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import useAppDispatch from '../../hooks/useAppDispatch';
import { getUserUsername, getUserIsAuthenticated } from '../../modules/Login/state/selectors';
import { logoutRequest } from '../../modules/Login/state/slice';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Text } from '../../constants';

const Layout = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(getUserIsAuthenticated);
  const username = useSelector(getUserUsername);

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <>
      {isAuthenticated &&
        <Header>
          <div>{Text.GREETING_MESSAGE}{username}</div>
          <Button onClick={logout} title="Log out" />
        </Header>
      }
      <Outlet />
    </>
  );
};

export default Layout;