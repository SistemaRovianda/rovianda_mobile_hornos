import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import { ProductFormulation } from "src/app/shared/models/product.interface";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { productsFormulationSelect } from "../../store/products-formulation/products-formulation.selectors";

@Component({
  selector: "general-data-form",
  templateUrl: "./general-data-form.component.html",
  styleUrls: ["./general-data-form.component.scss"],
})
export class GeneralDataFormComponent implements OnInit {
  @Input() set generalData(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }
  @Output("onSubmit") submit = new EventEmitter();
  form: FormGroup;

  productsFormulation$: Observable<ProductFormulation[]>;

  lotesByProductFormulation: String[];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {
    this.form = fb.group({
      estimatedTime: ["", [Validators.required, whitespaceValidator]],
      newLote: ["", [Validators.required, whitespaceValidator]],
      pcc: ["", [Validators.required, whitespaceValidator]],
      productId: ["", [Validators.required, whitespaceValidator]],
      date: [
        { value: moment(new Date()).format("YYYY-MM-DD"), disabled: true },
      ],
      oven: ["", [Validators.required, whitespaceValidator]],
      assignmentLot: fb.group({
        newLotId: ["", [Validators.required]],
        dateEntry: ["", [Validators.required]],
      }),
    });
  }

  ngOnInit() {
    this.productsFormulation$ = this.store.select(productsFormulationSelect);
  }

  onSubmit() {
    const { estimatedTime, newLote, pcc, productId, oven } = this.form.value;
    const payload = {
      estimatedTime: estimatedTime.trim(),
      newLote: newLote,
      pcc: pcc.trim(),
      productId: productId.productRoviandaId,
      date: moment(new Date()).format("YYYY-MM-DD"),
      oven: parseInt(oven),
      assignmentLot: {
        newLotId: this.form.get("assignmentLot").get("newLotId").value,
        dateEntry: this.form
          .get("assignmentLot")
          .get("dateEntry")
          .value.split("T")[0],
      },
    };

    this.submit.emit(payload);
  }

  onChange(event) {
    console.log("Producto seleccionado: ", event.detail.value);
    this.lotesByProductFormulation = event.detail.value.lots;
  }

  get newLotId() {
    return this.form.get("assignmentLot").get("newLotId");
  }

  get dateEntry() {
    return this.form.get("assignmentLot").get("dateEntry");
  }
}
