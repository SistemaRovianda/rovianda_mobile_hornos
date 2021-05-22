import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { GeneralDataFormComponent } from "./general-data-form.component";


const COMMON_IMPORTS = [CommonModule, IonicModule, ReactiveFormsModule];

const COMMON_DECLARATIONS = [GeneralDataFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents:[]
})
export class GeneralDataFormModule {}
