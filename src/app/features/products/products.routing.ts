import { Routes, RouterModule } from "@angular/router";
import { ListProductsModule } from "./pages/list-products/list-products.module";
import { ListProductsComponent } from "./pages/list-products/list-products.component";
import { NgModule } from "@angular/core";
import { NewProductPageComponent } from "./pages/new-product/new-product.page";
import { NewProductPageModule } from "./pages/new-product/new-product.module";
import { ProductReviewListPageModule } from "./pages/product-review-list/product-review-list.module";
import { ProductReviewListPageComponent } from "./pages/product-review-list/product-review-list.page";
import { UsersResolve } from "src/app/shared/resolvers/users.resolver";
import { ProductsResolve } from "src/app/shared/resolvers/new-product.resolver";
import { NewRevisionPage } from "./pages/new-revision/new-revision.page";
import { NewRevisionPageModule } from "./pages/new-revision/new-revision.module";
import { ReportPage } from "./pages/report/report.page";
import { ReportPageModule } from "./pages/report/report.module";

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
  {
    path: ":id/report",
    component: ReportPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ListProductsModule,
    NewProductPageModule,
    NewRevisionPageModule,
    ReportPageModule,
    ProductReviewListPageModule,
  ],
  providers: [UsersResolve, ProductsResolve],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
