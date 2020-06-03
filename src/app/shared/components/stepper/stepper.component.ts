import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "../../models/storeState.interface";
import { SELECT_STEPS } from "../../store/stepper/stepper.selector";
import * as fromStepperActions from "../../../shared/store/stepper/stepper.actions";

export interface StepperInterface {
  value: boolean;
}

@Component({
  selector: "stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  steppers: StepperInterface[] = [];

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.store.select(SELECT_STEPS).subscribe((tempSteps) => {
      this.steppers = tempSteps;
    });
  }

  next(num, step) {
    this.store.dispatch(
      fromStepperActions.stepperNext({
        num,
        step,
      })
    );
  }

  prev() {
    this.store.dispatch(fromStepperActions.stepperPrev());
  }

  getStep(step) {
    return this.steppers[step].value;
  }
}
