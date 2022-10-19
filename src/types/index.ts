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
}

interface State {
  user: UserState,
  home: HomeState,
}

export { StateStatus };
export type { State, UserState, HomeState, LoginPayload };
