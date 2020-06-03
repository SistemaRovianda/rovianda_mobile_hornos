import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "revision-data-form",
  templateUrl: "./revision-data-form.component.html",
  styleUrls: ["./revision-data-form.component.scss"],
})
export class RevisionDataFormComponent implements OnInit {
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
      hour: ["", Validators.required],
      interTemp: ["", Validators.required],
      ovenTemp: ["", Validators.required],
      humidity: ["", Validators.required],
      observations: [""],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { ...value } = this.form.value;
    const firstRevision = {
      ...value,
    };
    this.submit.emit(firstRevision);
  }
}
