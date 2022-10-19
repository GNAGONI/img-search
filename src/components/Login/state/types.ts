enum UserActionsTypes {
  USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR = "USER_LOGIN_ERROR",
  USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST",
  USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS",
  USER_LOGOUT_ERROR = "USER_LOGOUT_ERROR",
};

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

interface State {
  user: UserState,
}

interface LoginPayload { 
  username: string;
}

export { UserActionsTypes, StateStatus };
export type { State, UserState, LoginPayload }