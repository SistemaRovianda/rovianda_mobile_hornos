import { createReducer, on, Action } from "@ngrx/store";
import * as fromStepperActions from "./stepper.actions";
import { SteppersInterface } from "../../models/stepper.interface";

const STATE_INITIAL_STEPPER: SteppersInterface = {
  steps: [
    {
      value: true,
    },
    {
      value: false,
    },
  ],
};

const _stepperInitialReducer = createReducer<SteppersInterface>(
  STATE_INITIAL_STEPPER,
  on(fromStepperActions.stepperNext, (state, { num, step }) => ({
    ...state,
    steps: state.steps.concat().map((tempStep, i) => {
      if (i === num) {
        return { value: step };
      }
      return tempStep;
    }),
  })),
  on(fromStepperActions.stepperPrev, (state) => ({
    ...state,
    steps: state.steps.slice(1).concat({ value: false }),
  })),
  on(fromStepperActions.stepperInit, (state) => STATE_INITIAL_STEPPER),
  on(fromStepperActions.stepperReset, (state) => ({
    ...state,
    steps: [
      {
        value: true,
      },
      {
        value: false,
      },
    ],
  }))
);

export function stepperInitialReducer(
  state: SteppersInterface,
  action: Action
) {
  return _stepperInitialReducer(state, action);
}
