import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { StateStatus, HomeState, IImage } from '../../../types';

const initialState: HomeState = { 
  status: StateStatus.IDLE,
  query: '',
  images: [],
  totalPages: 0,
  page: 1,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    imagesRequest: (state, action: PayloadAction<{ search: string }>) => {
      state.page = 1;
      state.totalPages = 0;
      state.query = action?.payload?.search;
      state.status = StateStatus.RUNNING
    },
    imagesSuccess: (state, action: PayloadAction<{ images: IImage[], totalPages: number }>) => { 
      state.images = action?.payload?.images;
      state.totalPages = action?.payload?.totalPages;
      state.status = StateStatus.SUCCESS;
    },
    imagesError: (state) => {
      state.images = [];
      state.totalPages = 0;
      state.page = 1;
      state.status = StateStatus.ERROR;
    },
    imagesClear: () => initialState,
    changeImagePage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action?.payload?.page;
    }
  },
})

export const {
  imagesRequest,
  imagesSuccess,
  imagesError,
  imagesClear,
  changeImagePage,
} = homeSlice.actions
export default homeSlice.reducer