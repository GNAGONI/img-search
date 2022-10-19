import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { getSpinner } from './state/selectors';
import { hideSpinner } from './state/slice';

const Spinner = () => {
  const { open } = useSelector(getSpinner);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideSpinner());
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
