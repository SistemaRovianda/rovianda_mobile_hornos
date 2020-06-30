import { Component, OnInit, ViewChild } from "@angular/core";
import { RevisionDataFormComponent } from "../../components/revision-data-form/revision-data-form.component";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { registerRevision } from "../../store/revision/revision.actions";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-new-revision",
  templateUrl: "./new-revision.page.html",
  styleUrls: ["./new-revision.page.scss"],
})
export class NewRevisionPage implements OnInit {
  @ViewChild(RevisionDataFormComponent, { static: false })
  revisionDataForm: RevisionDataFormComponent;

  revisionData;

  constructor(
    private _Store: Store<AppStateInterface>,
    private _route: ActivatedRoute,
    private _router: Router,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onRevisionSubmit(revision) {
    this.revisionData = revision;
  }

  addRevision() {
    this.revisionDataForm.onSubmit();
    this._Store.dispatch(
      registerRevision({
        productId: this._route.snapshot.paramMap.get("id"),
        revision: this.revisionData,
      })
    );
  }

  navToHistory() {
    this._router.navigate([
      `product/${this._route.snapshot.paramMap.get("id")}/revisions`,
    ]);
  }

  onBackPage(evt) {
    this._router.navigate(["product/list"]);
  }
}
