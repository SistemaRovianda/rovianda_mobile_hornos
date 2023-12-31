import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsResolve } from "src/app/shared/resolvers/new-product.resolver";
import { UsersResolve } from "src/app/shared/resolvers/users.resolver";
import { ListProductsComponent } from "./pages/list-products/list-products.component";
import { ListProductsModule } from "./pages/list-products/list-products.module";
import { NewProductPageModule } from "./pages/new-product/new-product.module";
import { NewProductPageComponent } from "./pages/new-product/new-product.page";
import { NewRevisionPageModule } from "./pages/new-revision/new-revision.module";
import { NewRevisionPage } from "./pages/new-revision/new-revision.page";
import { ProductReviewListPageModule } from "./pages/product-review-list/product-review-list.module";
import { ProductReviewListPageComponent } from "./pages/product-review-list/product-review-list.page";

const routes: Routes = [
  {
    path: "list",
    component: ListProductsComponent,
  },
  {
    path: "new-product",
    resolve: {
      productsFormulation: ProductsResolve,
    },
    component: NewProductPageComponent,
  },
  {
    path: ":id",
    component: NewRevisionPage,
  },
  {
    path: ":id/revisions",
    resolve: {
      users: UsersResolve,
    },
    component: ProductReviewListPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ListProductsModule,
    NewProductPageModule,
    NewRevisionPageModule,
    ProductReviewListPageModule,
  ],
  providers: [UsersResolve, ProductsResolve],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
