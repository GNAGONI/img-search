enum StateStatus { 
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
};

interface UserState {
  status: StateStatus;
  username: string | null;
  isAuthenticated: boolean;
}

interface LoginPayload { 
  username: string;
}

interface HomeState {
  status: StateStatus;
  images: any[];
  totalPages: number;
  page: number;
}

type SpinnerState = {
  open: boolean;
};

enum NotificationKind { 
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  NULL = ''
}

type NotificationData = { 
  message: string;
  kind: NotificationKind;
}

type NotificationState = {
  open: boolean;
} & NotificationData;

interface State {
  user: UserState,
  home: HomeState,
  spinner: SpinnerState,
  notification: NotificationState,
}

export { StateStatus, NotificationKind };
export type {
  State,
  UserState,
  HomeState,
  SpinnerState,
  NotificationState,
  NotificationData,
  LoginPayload,
};
