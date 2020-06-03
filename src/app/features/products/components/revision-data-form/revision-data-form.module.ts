import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";
import { RevisionDataFormComponent } from "./revision-data-form.component";

const COMMON_IMPORTS = [CommonModule, IonicModule, ReactiveFormsModule];

const COMMON_DECLARATIONS = [RevisionDataFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class RevisionDataFormModule {}
