import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { StateStatus, HomeState } from '../../../types';

const initialState: HomeState = { 
  status: StateStatus.IDLE,
  images: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    imagesRequest: (state, action: PayloadAction<{ search: string }>) => {
      state.status = StateStatus.RUNNING
    },
    imagesSuccess: (state, action: PayloadAction<{ images: any[] }>) => { 
      state.images = action?.payload?.images;
      state.status = StateStatus.SUCCESS;
    },
    imagesError: (state) => {
      state.images = [];
      state.status = StateStatus.ERROR;
    },
  },
})

export const {
  imagesRequest,
  imagesSuccess,
  imagesError,
} = homeSlice.actions
export default homeSlice.reducer