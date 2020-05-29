import { Routes, RouterModule } from "@angular/router";
import { ListProductsModule } from "./pages/list-products/list-products.module";
import { ListProductsComponent } from "./pages/list-products/list-products.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: ListProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ListProductsModule],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
