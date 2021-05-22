import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogObservationsEndComponent } from './dialog-observations-end.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DialogObservationsEndComponent],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule,FormsModule
  ],
  exports:[DialogObservationsEndComponent]
})
export class DialogObservationsEndModule { }
