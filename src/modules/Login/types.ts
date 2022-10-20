import { StateStatus } from '../../types';

type UserState = {
  status: StateStatus;
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
