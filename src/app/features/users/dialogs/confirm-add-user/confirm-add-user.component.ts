import { Component, OnInit, Input } from "@angular/core";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import { ModalController } from "@ionic/angular";
import { registerUsers } from "src/app/features/products/store/users/users.actions";

@Component({
  selector: "app-confirm-add-user",
  templateUrl: "./confirm-add-user.component.html",
  styleUrls: ["./confirm-add-user.component.scss"],
})
export class ConfirmAddUserComponent implements OnInit {
  @Input() users;
  @Input() id;

  constructor(
    private store: Store<AppStateInterface>,
    private _modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  accept() {
    this.store.dispatch(
      registerUsers({ processId: this.id, users: this.users })
    );
    this._modalCtrl.dismiss();
  }

  cancel() {
    this._modalCtrl.dismiss();
  }
}
