import { Routes, RouterModule } from "@angular/router";
import { ListProductsModule } from "./pages/list-products/list-products.module";
import { ListProductsComponent } from "./pages/list-products/list-products.component";
import { NgModule } from "@angular/core";
import { NewProductPageComponent } from "./pages/new-product/new-product.page";
import { NewProductPageModule } from "./pages/new-product/new-product.module";

const routes: Routes = [
  {
    path: "list",
    component: ListProductsComponent,
  },
  {
    path: "new-product",
    component: NewProductPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ListProductsModule,
    NewProductPageModule,
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
