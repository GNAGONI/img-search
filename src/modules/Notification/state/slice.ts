import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NotificationData, NotificationKind, NotificationState } from '../types';

const initialState: NotificationState = {
  open: false,
  message: '',
  kind: NotificationKind.NULL,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showSuccessNotification: (state, action: PayloadAction<NotificationData>) => {
      state.open = true;
      state.message = action.payload.message;
      state.kind = NotificationKind.SUCCESS;
    },
    showErrorNotification: (state, action: PayloadAction<NotificationData>) => {
      state.open = true;
      state.message = action.payload.message;
      state.kind = NotificationKind.ERROR;
    },
    showInfoNotification: (state, action: PayloadAction<NotificationData>) => {
      state.open = true;
      state.message = action.payload.message;
      state.kind = NotificationKind.INFO;
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = '';
      state.kind = NotificationKind.NULL;
    },
  }
});

export const {
  hideNotification,
  showSuccessNotification,
  showErrorNotification,
  showInfoNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;