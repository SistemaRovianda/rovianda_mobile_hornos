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
      productId: [""],
      date: [
        { value: moment(new Date()).format("DD/MM/YYYY"), disabled: true },
      ],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
