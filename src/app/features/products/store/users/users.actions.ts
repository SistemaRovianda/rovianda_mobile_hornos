import { createAction, props } from "@ngrx/store";
import { User } from "firebase";

const FETCH_USERS = "[USERS] Fetch all users";

const FETCH_USERS_SUCCESS = "[USERS] Fetch all users success";

const FETCH_USERS_ERROR = "[USERS] Fetch all users error";

const REGISTER_USERS = "[USERS] Register Users";

const REGISTER_USERS_ERROR = "[USERS] Register users error";

const CLEAR_USERS = "[USERS] Clear Users";

export const fetchUsers = createAction(
  FETCH_USERS,
  props<{ processId: string }>()
);

export const fetchUsersSuccess = createAction(
  FETCH_USERS_SUCCESS,
  props<{ users: User }>()
);

export const fetchUsersError = createAction(
  FETCH_USERS_ERROR,
  props<{ error: string }>()
);

export const registerUsers = createAction(
  REGISTER_USERS,
  props<{ users: User; processId: string }>()
);

export const registerUsersError = createAction(
  REGISTER_USERS_ERROR,
  props<{ error: string }>()
);

export const clearUsers = createAction(CLEAR_USERS);
