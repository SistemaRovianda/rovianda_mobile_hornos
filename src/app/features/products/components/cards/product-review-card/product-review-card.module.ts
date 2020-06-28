import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductReviewCardComponent } from "./product-review-card.component";
import { IonicModule } from "@ionic/angular";
import { ObservationsDialogModule } from "../../../dialogs/observations-dialog/observations-dialog.module";

@NgModule({
  declarations: [ProductReviewCardComponent],
  imports: [CommonModule, IonicModule, ObservationsDialogModule],
  exports: [ProductReviewCardComponent],
})
export class ProductReviewCardModule {}
