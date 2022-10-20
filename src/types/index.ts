import { UserState } from '../modules/Login/types';
import { HomeState } from '../modules/Home/types'; 
import { NotificationState } from '../features/Notification/types';
import { SpinnerState } from '../features/Spinner/types';

enum StateStatus { 
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

type State = {
  user: UserState,
  home: HomeState,
  spinner: SpinnerState,
  notification: NotificationState,
}

export { StateStatus };
export type { State };
