import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NewRevisionPage } from "./new-revision.page";
import { RevisionDataFormModule } from "../../components/revision-data-form/revision-data-form.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RevisionDataFormModule],
  declarations: [NewRevisionPage],
  exports: [NewRevisionPage],
})
export class NewRevisionPageModule {}
