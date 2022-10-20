type UserState = {
  username: string | null;
  isAuthenticated: boolean;
}

type LoginPayload = { 
  username: string;
}

export type {
  UserState,
  LoginPayload,
};
