import { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getUserIsAuthenticated } from './state/selectors';
import { loginRequest } from './state/slice';

const useStyles = makeStyles(() => ({
  description: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    flex: '1 auto',

    '& .MuiTextField-root': {
      margin: '8px',
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: '16px',
      width: '300px',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
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
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          type="text"
          required
          value={username || ''}
          onChange={(e: SyntheticEvent) => setUsername((e.target as HTMLTextAreaElement).value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
