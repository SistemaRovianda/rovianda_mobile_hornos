import { createAction, props } from "@ngrx/store";

const STEPPER_INIT = "[STEPPER-]  Stepper Init";

const STEPPER_NEXT = "[STEPPER-]  Stepper Next";

const STEPPER_PREV = "[STEPPER-]  Stepper Prev";

const STEPPER_RESET = "[STEPPER-] Stepper Reset";

export const stepperInit = createAction(STEPPER_INIT);

export const stepperNext = createAction(
  STEPPER_NEXT,
  props<{ num: number; step: boolean }>()
);

export const stepperPrev = createAction(STEPPER_PREV);

export const stepperReset = createAction(STEPPER_RESET);
