import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import { ModalController } from "@ionic/angular";
import { ConfirmAddUserComponent } from "../../dialogs/confirm-add-user/confirm-add-user.component";
import { CreateUserFormComponent } from "../../components/create-user-form/create-user-form.component";
import { ConfirmReportComponent } from "../../dialogs/confirm-report/confirm-report.component";
import { getUserOfOven } from 'src/app/features/products/store/users/users.actions';

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  @ViewChild(CreateUserFormComponent, { static: false })
  usersForm: CreateUserFormComponent;

  users;

  path: string;
  ovenId:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<AppStateInterface>,
    private _modalCtrl: ModalController
  ) {
    this.path = `/product/${this.route.snapshot.paramMap.get("id")}/revisions`;
  }

  loading$;

  ngOnInit() {
    this.ovenId = +this.route.snapshot.paramMap.get("id");
  }

  onSubmitUsers(users) {
    this.confirmAddUsers(users);
  }

  addUsers() {
    this.usersForm.onSubmit();
  }

  onBack() {
    this.router.navigate([
      `product/${this.route.snapshot.paramMap.get("id")}/revisions`,
    ]);
  }

  async confirmAddUsers(users) {
    const modal = await this._modalCtrl.create({
      component: ConfirmAddUserComponent,
      cssClass: "modal-size",
      componentProps: {
        id: this.route.snapshot.paramMap.get("id"),
        users: users,
      },
    });
    modal.onDidDismiss().then(()=>{
      this._store.dispatch(getUserOfOven({ovenId:+this.route.snapshot.paramMap.get("id")}))
      this.onBack();
      }
    );
    return await modal.present();
  }

  onBackPage(evt) {
    this.router.navigate([`product/${this.route.snapshot.paramMap.get("id")}/revisions`]);
  }
}
