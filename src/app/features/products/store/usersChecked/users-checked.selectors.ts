import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { createSelector } from "@ngrx/store";

const SELECT_USERS_CHECKED_STATE = (state: AppStateInterface) =>
  state.usersChecked;

export const SELECT_USERS_CHECKED = createSelector(
  SELECT_USERS_CHECKED_STATE,
  (state) => state.usersChecked
);
