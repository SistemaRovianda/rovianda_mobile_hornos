import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { ListProductsComponent } from "./list-products.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [ListProductsComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ListProductsModule {}
