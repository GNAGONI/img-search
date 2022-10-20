import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../providers/StateProvider';

function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}

export default useAppDispatch;