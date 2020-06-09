import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-observations-dialog",
  templateUrl: "./observations-dialog.component.html",
  styleUrls: ["./observations-dialog.component.scss"],
})
export class ObservationsDialogComponent implements OnInit {
  @Input() set revision(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }

  form: FormGroup;

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      hour: [""],
      interTemp: [""],
      ovenTemp: [""],
      observations: [{ value: "", disabled: true }],
    });
  }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  get hour() {
    return this.form.get("hour").value;
  }

  get interTemp() {
    return this.form.get("interTemp").value;
  }

  get ovenTemp() {
    return this.form.get("ovenTemp").value;
  }

  get observations() {
    return this.form.get("observations").value;
  }
}
