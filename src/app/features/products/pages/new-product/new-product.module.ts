import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";
import { GeneralDataFormModule } from "../../components/general-data-form/general-data-form.module";
import { RevisionDataFormModule } from "../../components/revision-data-form/revision-data-form.module";
import { NewProductPageComponent } from "./new-product.page";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  RouterModule,
  TitleHeaderModule,
  GeneralDataFormModule,
  RevisionDataFormModule,
  StepperModule,
];

const COMMON_DECLARTIONS = [NewProductPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARTIONS,
  exports: COMMON_DECLARTIONS,
})
export class NewProductPageModule {}
