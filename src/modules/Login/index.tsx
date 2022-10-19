import { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { getUserIsAuthenticated } from './state/selectors';
import { loginRequest } from './state/slice';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Form from '../../components/Form';

const LoginWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <LoginWrapper>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username || ''}
          onChange={(e: SyntheticEvent) => setUsername((e.target as HTMLTextAreaElement).value)}
        />
        <Button title="Log in" />
      </Form>
    </LoginWrapper>
  );
};

export default Login;
