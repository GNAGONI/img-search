import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import { getNotification } from './state/selectors';
import { hideNotification } from './state/slice';
import useAppDispatch from '../../hooks/useAppDispatch';

const Notification = () => {
  const { message, kind, open } = useSelector(getNotification);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideNotification());
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={kind || 'info'} sx={{ width: '100%' }}>
          {message || ''}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Notification;
