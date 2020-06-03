import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../models/storeState.interface";

const SELECT_STEPPER_INITIAL = (state: AppStateInterface) => state.stepper;

export const SELECT_STEPS = createSelector(
  SELECT_STEPPER_INITIAL,
  (state) => state.steps
);

export const SELECT_STEP = (position) =>
  createSelector(SELECT_STEPS, (state) => state[position].value);
