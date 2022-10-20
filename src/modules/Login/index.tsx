import { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserIsAuthenticated } from './state/selectors';
import { loginRequest } from './state/slice';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Form from '../../components/Form';
import Wrapper from '../../components/Wrapper';
import useAppDispatch from '../../hooks/useAppDispatch';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const isAuthenticated = useSelector(getUserIsAuthenticated);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginRequest({ username }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Wrapper orientation='column'>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username || ''}
          onChange={(e: SyntheticEvent) => setUsername((e.target as HTMLTextAreaElement).value)}
        />
        <Button title="Log in" />
      </Form>
    </Wrapper>
  );
};

export default Login;
