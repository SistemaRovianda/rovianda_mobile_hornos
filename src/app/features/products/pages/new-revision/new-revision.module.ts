import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewRevisionPage } from "./new-revision.page";
import { RevisionDataFormModule } from "../../components/revision-data-form/revision-data-form.module";
import { TitleHeaderModule } from "src/app/shared/components/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionDataFormModule,
    TitleHeaderModule,
  ],
  declarations: [NewRevisionPage],
  exports: [NewRevisionPage],
})
export class NewRevisionPageModule {}
