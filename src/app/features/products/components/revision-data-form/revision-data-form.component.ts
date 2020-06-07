import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";

@Component({
  selector: "revision-data-form",
  templateUrl: "./revision-data-form.component.html",
  styleUrls: ["./revision-data-form.component.scss"],
})
export class RevisionDataFormComponent implements OnInit {
  @Input() set revisionData(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup = this.fb.group({
    hour: ["", Validators.required],
    interTemp: ["", Validators.required],
    ovenTemp: ["", Validators.required],
    humidity: ["", Validators.required],
    observations: [""],
  });

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      hour: ["", [Validators.required, whitespaceValidator]],
      interTemp: ["", [Validators.required, whitespaceValidator]],
      ovenTemp: ["", [Validators.required, whitespaceValidator]],
      humidity: ["", [Validators.required, whitespaceValidator]],
      observations: [""],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { hour, interTemp, ovenTemp, humidity, ...values } = this.form.value;
    const firstRevision = {
      ...values,
      hour: hour.trim(),
      interTemp: interTemp.trim(),
      ovenTemp: ovenTemp.trim(),
      humidity: humidity.trim(),
    };
    this.submit.emit(firstRevision);
  }
}
