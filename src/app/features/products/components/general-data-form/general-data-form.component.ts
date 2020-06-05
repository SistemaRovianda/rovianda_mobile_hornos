import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: "general-data-form",
  templateUrl: "./general-data-form.component.html",
  styleUrls: ["./general-data-form.component.scss"],
})
export class GeneralDataFormComponent implements OnInit {
  @Output("onSubmit") submit = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      estimatedTime: ["", Validators.required],
      newLote: ["", Validators.required],
      pcc: ["", Validators.required],
      productId: ["",Validators.required],
      date: [
        { value: moment(new Date()).format("DD/MM/YYYY"), disabled: true },
      ],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { ...values } = this.form.value;
    const payload = {
      ...values,
      date: moment(new Date()).format("DD/MM/YYYY"),
    };

    this.submit.emit(payload);
  }
}
