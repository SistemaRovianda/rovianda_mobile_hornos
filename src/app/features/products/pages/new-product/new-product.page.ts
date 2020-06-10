import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, BehaviorSubject } from "rxjs";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromStepperActions from "../../../../shared/store/stepper/stepper.actions";
import * as fromStepperSelect from "../../../../shared/store/stepper/stepper.selector";
import { GeneralDataFormComponent } from "../../components/general-data-form/general-data-form.component";
import { RevisionDataFormComponent } from "../../components/revision-data-form/revision-data-form.component";
import * as fromActionsProduct from "../../store/new-product/new-product.actions";
import * as fromSelectorProduct from "../../store/new-product/new-product.selector";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.page.html",
  styleUrls: ["./new-product.page.scss"],
})
export class NewProductPageComponent implements OnInit {
  @ViewChild(GeneralDataFormComponent, { static: false })
  generalDataForm: GeneralDataFormComponent;

  @ViewChild(RevisionDataFormComponent, { static: false })
  revisionDataForm: RevisionDataFormComponent;

  loading$: Observable<boolean> = this.store.select(
    fromSelectorProduct.SELECT_LOADING
  );

  disabledButton: boolean = true;

  disabledSaveButton: boolean = true;

  next$: Observable<boolean> = this.store.select(
    fromStepperSelect.SELECT_STEP(1)
  );

  generalData;

  revisionData;

  index$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private store: Store<AppStateInterface>,
    private _router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.generalDataForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.generalDataForm.form.invalid;
      });
    }, 500);
  }

  onSubmit(payload) {
    this.generalData = payload;
    console.log(payload);
    this.index$.next(1);

    setTimeout(() => {
      this.revisionDataForm.form.valueChanges.subscribe(() => {
        this.disabledSaveButton = this.revisionDataForm.form.invalid;
      });
    }, 200);
  }

  onSubmitRevison(payload) {
    this.revisionData = payload;
  }

  validateForm() {
    this.store.dispatch(
      fromStepperActions.stepperNext({
        num: 1,
        step: this.generalDataForm.form.valid,
      })
    );
    this.generalDataForm.onSubmit();
  }

  addProduct() {
    this.revisionDataForm.onSubmit();
    const product = {
      ...this.generalData,
      firstRevision: { ...this.revisionData },
    };

    this.store.dispatch(fromActionsProduct.newProduct({ product: product }));
  }

  position(i: number) {
    console.log(i);

    this.index$.next(i);
  }

  cancel() {
    this._router.navigate(["product/list"]);
  }
}
