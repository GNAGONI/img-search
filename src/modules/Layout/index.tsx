import { useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUserUsername, getUserIsAuthenticated } from '../Login/state/selectors';
import { logoutRequest } from '../Login/state/slice';


const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(getUserIsAuthenticated);
  const username = useSelector(getUserUsername);

  const logout = () => {
    dispatch(logoutRequest());
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {isAuthenticated &&
        <>
          <div>Hello: {username}</div>
          <button onClick={logout}>
            Log out
          </button>
        </>
      }
      <Outlet />
    </>
  )
};

export default Layout;