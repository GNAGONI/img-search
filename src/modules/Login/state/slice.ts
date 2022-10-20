import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserState, LoginPayload } from '../types';

const initialState: UserState = { 
  username: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.username = action.payload.username;
    },
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => { 
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
    loginError: (state) => {
      state.username = null;
      state.isAuthenticated = false;
    },
    logoutRequest: (state) => { 
      state.username = null;
    },
    logoutSuccess: (state) => { 
      state.username = null;
      state.isAuthenticated = false;
    },
    logoutError: (state) => { 
      state.username = null;
      state.isAuthenticated = false;
    }
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} = userSlice.actions;
export default userSlice.reducer;