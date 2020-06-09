import { User } from "firebase";
import { createReducer, on } from "@ngrx/store";
import {
  registerUsersError,
  fetchUsersError,
  fetchUsersSuccess,
  fetchUsers,
  clearUsers,
} from "./users.actions";

export interface UsersState {
  loading: boolean;
  users: User;
  error: string;
}

const initialState: UsersState = {
  loading: false,
  users: null,
  error: null,
};

export const usersReducer = createReducer<UsersState>(
  initialState,
  on(fetchUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(fetchUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users,
  })),
  on(fetchUsersError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(registerUsersError, (state, { error }) => ({
    ...state,
    error,
  })),
  on(clearUsers, (state) => ({
    ...state,
    users: null,
  }))
);
