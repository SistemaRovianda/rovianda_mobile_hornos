import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductReviewListPageComponent } from "./product-review-list.page";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { RouterModule } from "@angular/router";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";
import { ObservationsDialogModule } from "../../dialogs/observations-dialog/observations-dialog.module";
import { ProductReviewCardModule } from "../../components/cards/product-review-card/product-review-card.module";
import { DialogObservationsEndModule } from "../../components/dialog-observations-end/dialog-observations-end.module";
import { DialogObservationsEndComponent } from "../../components/dialog-observations-end/dialog-observations-end.component";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  RouterModule,
  StepperModule,
  ProductReviewCardModule,
  DialogObservationsEndModule
];

const COMMON_DECLARATIONS = [ProductReviewListPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents:[DialogObservationsEndComponent]
})
export class ProductReviewListPageModule {}
