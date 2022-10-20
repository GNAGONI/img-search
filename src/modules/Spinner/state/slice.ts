import { createSlice } from '@reduxjs/toolkit';
import { SpinnerState } from '../../../types';

const initialState: SpinnerState = { 
  open: false,
};

export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.open = true;
    },
    hideSpinner: (state) => {
      state.open = false;
    },
  }
});

export const {
  showSpinner,
  hideSpinner,
} = spinnerSlice.actions;
export default spinnerSlice.reducer;
