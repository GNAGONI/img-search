import { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserIsAuthenticated } from './state/selectors';
import { loginRequest } from './state/slice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const isAuthenticated = useSelector(getUserIsAuthenticated);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginRequest({ username }))
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username || ''}
          onChange={(e: SyntheticEvent) => setUsername((e.target as HTMLTextAreaElement).value)}
        />
        <button type="submit" color="primary">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
