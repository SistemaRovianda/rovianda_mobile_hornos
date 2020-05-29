import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../models/storeState.interface";

const SELECT_STEPPER_INITIAL = (state: AppStateInterface) => state.stepper;

export const SELECT_STEPS = createSelector(
  SELECT_STEPPER_INITIAL,
  (state) => state.steps
);
