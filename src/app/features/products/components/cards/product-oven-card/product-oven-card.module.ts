import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductOvenCardComponent } from "./product-oven-card.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [ProductOvenCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProductOvenCardComponent],
})
export class ProductOvenModule {}
