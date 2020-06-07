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

  ngOnInit() {}

  onSubmit() {
    const { estimatedTime, newLote, pcc, productId } = this.form.value;
    const payload = {
      estimatedTime: estimatedTime.trim(),
      newLote: newLote.trim(),
      pcc: pcc.trim(),
      productId: productId.trim(),
      date: moment(new Date()).format("DD/MM/YYYY"),
    };

    this.submit.emit(payload);
  }
}
