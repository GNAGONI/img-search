import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { getSpinner } from './state/selectors';
import { hideSpinner } from './state/slice';
import useAppDispatch from '../../hooks/useAppDispatch';

const Spinner = () => {
  const { open } = useSelector(getSpinner);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideSpinner());
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
