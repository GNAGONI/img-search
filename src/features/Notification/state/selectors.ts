import { State } from '../../../providers/StateProvider';

export const getNotification = (state: State) => state?.notification;
