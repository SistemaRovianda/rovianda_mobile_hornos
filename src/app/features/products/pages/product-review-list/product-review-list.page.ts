import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Revision } from "src/app/shared/models/oven.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromDetailActions from "../../store/product-review-list/product-review-list.actions";
import * as fromDetailSelector from "../../store/product-review-list/product-review-list.selector";
import { ActivatedRoute } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ObservationsDialogComponent } from "../../dialogs/observations-dialog/observations-dialog.component";

@Component({
  selector: "app-product-review-list",
  templateUrl: "./product-review-list.page.html",
  styleUrls: ["./product-review-list.page.scss"],
})
export class ProductReviewListPageComponent implements OnInit {
  products$: Observable<Revision[]>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) {
    this.store.dispatch(fromDetailActions.fetchAllDetail({ id: this.id }));
  }

  ngOnInit() {
    this.store.select(fromDetailSelector.loadingDetail).subscribe((loading) => {
      if (loading == false) {
        this.products$ = this.store.select(
          fromDetailSelector.fetchDetailRevision
        );
      }
    });
  }

  get id(): number {
    return parseInt(this.route.snapshot.paramMap.get("id"));
  }

  observations(product: Revision) {
    const revision = {
      hour: product.hour,
      interTemp: product.interTemp,
      ovenTemp: product.ovenTemp,
      observations: product.observations,
    };
    this.openModal(revision);
  }

  async openModal(revision) {
    const modal = await this.modalController.create({
      component: ObservationsDialogComponent,
      cssClass: "modal-observations",
      componentProps: {
        revision: revision,
      },
    });
    return await modal.present();
  }
}
