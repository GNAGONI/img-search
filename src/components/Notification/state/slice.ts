import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NotificationState, NotificationData, NotificationKind } from '../../../types';

const initialState: NotificationState = {
  open: false,
  message: '',
  kind: NotificationKind.NULL,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationData>) => {
      state.open = true;
      state.message = action.payload.message;
      state.kind = action.payload.kind;
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = '';
      state.kind = NotificationKind.NULL;
    },
  }
})

export const {
  showNotification,
  hideNotification,
} = notificationSlice.actions
export default notificationSlice.reducer