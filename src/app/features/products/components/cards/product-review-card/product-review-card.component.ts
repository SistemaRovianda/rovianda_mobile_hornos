import { Component, OnInit, Input } from "@angular/core";
import { Revision } from "src/app/shared/models/oven.interface";
import { ObservationsDialogComponent } from "../../../dialogs/observations-dialog/observations-dialog.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-product-review-card",
  templateUrl: "./product-review-card.component.html",
  styleUrls: ["./product-review-card.component.scss"],
})
export class ProductReviewCardComponent implements OnInit {
  @Input() productReview;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

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
