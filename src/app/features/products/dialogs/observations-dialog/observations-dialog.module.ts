import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ObservationsDialogComponent } from "./observations-dialog.component";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

const COMMON_IMPORTS = [CommonModule, IonicModule, ReactiveFormsModule];

const COMMON_DECLARATIONS = [ObservationsDialogComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  declarations: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class ObservationsDialogModule {}
