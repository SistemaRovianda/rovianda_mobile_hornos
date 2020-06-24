import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";

import { ListProductsComponent } from "./list-products.component";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";
import { ProductOvenModule } from "../../components/cards/product-oven-card/product-oven-card.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  ProductOvenModule,
  RouterModule,
  StepperModule,
];

const COMMON_DECLARATIONS = [ListProductsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListProductsModule {}
