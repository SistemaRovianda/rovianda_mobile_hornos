import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { createSelector } from "@ngrx/store";

const USERS_STATE = (state: AppStateInterface) => state.users;

export const usersSelector = createSelector(
  USERS_STATE,
  (state) => state.users
);

const USERS_OF_OVEN = (state:AppStateInterface)=>state.usersOfOven;
export const usersOfOvenSelector = createSelector(USERS_OF_OVEN,(state)=>({...state}));