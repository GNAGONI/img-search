import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { StateStatus, UserState, LoginPayload } from './types';

const initialState: UserState = { 
  status: StateStatus.IDLE,
  username: null,
  isAuthenticated: false,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.status = StateStatus.RUNNING
    },
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => { 
      state.username = action.payload.username;
      state.isAuthenticated = true;
      state.status = StateStatus.SUCCESS;
    },
    loginError: (state) => {
      state.username = null;
      state.isAuthenticated = false;
      state.status = StateStatus.ERROR;
    },
    logoutRequest: (state) => { 
      state.status = StateStatus.RUNNING;
    },
    logoutSuccess: (state) => { 
      state.username = null
      state.isAuthenticated = false;
      state.status = StateStatus.SUCCESS;
    },
    logoutError: (state) => { 
      state.username = null;
      state.isAuthenticated = false;
      state.status = StateStatus.ERROR;
    }
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} = counterSlice.actions
export default counterSlice.reducer