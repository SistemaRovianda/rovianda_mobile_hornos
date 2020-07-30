import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-confirm-report",
  templateUrl: "./confirm-report.component.html",
  styleUrls: ["./confirm-report.component.scss"],
})
export class ConfirmReportComponent implements OnInit {
  @Input() id;

  constructor(private _modalCtrl: ModalController, private _router: Router) {}

  ngOnInit() {}

  cancel() {
    console.log("cancel");
    this._modalCtrl.dismiss();
  }

  save() {
    this._router.navigate([`/user/print-report/${this.id}`]);
    this._modalCtrl.dismiss();
  }
}
