import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";

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

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      estimatedTime: ["", [Validators.required, whitespaceValidator]],
      newLote: ["", [Validators.required, whitespaceValidator]],
      pcc: ["", [Validators.required, whitespaceValidator]],
      productId: ["", [Validators.required, whitespaceValidator]],
      date: [
        { value: moment(new Date()).format("DD/MM/YYYY"), disabled: true },
      ],
    });
  }

  ngOnInit() {
    // this.form
    //   .get("productId")
    //   .valueChanges.subscribe((res) =>
    //     console.log("Producto seleccionado: ", res)
    //   );
  }

  onSubmit() {
    const { estimatedTime, newLote, pcc, productId } = this.form.value;
    const payload = {
      estimatedTime: estimatedTime.trim(),
      newLote: newLote,
      pcc: pcc.trim(),
      productId: productId,
      date: moment(new Date()).format("DD/MM/YYYY"),
    };

    this.submit.emit(payload);
  }

  onChange(event) {
    this.form.get("productId").setValue(event.detail.value);
    console.log("Producto seleccionado: ", event.detail.value);
  }
}
