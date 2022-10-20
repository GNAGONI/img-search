import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HomeState, ImageData } from '../types';

const initialState: HomeState = { 
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
    },
    imagesSuccess: (state, action: PayloadAction<{ images: ImageData[], totalPages: number }>) => { 
      state.images = action?.payload?.images;
      state.totalPages = action?.payload?.totalPages;
    },
    imagesError: (state) => {
      state.images = [];
      state.totalPages = 0;
      state.page = 1;
    },
    imagesClear: () => initialState,
    changeImagePage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action?.payload?.page;
    }
  },
});

export const {
  imagesRequest,
  imagesSuccess,
  imagesError,
  imagesClear,
  changeImagePage,
} = homeSlice.actions;
export default homeSlice.reducer;