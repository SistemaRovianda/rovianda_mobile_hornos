import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { IsAuthGuard } from "./shared/guards/is-auth.guard";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    canActivate: [IsAuthGuard],
    loadChildren: () =>
      import("./features/landing/layout/layout.module").then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: "product",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/products/products.module").then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: "user",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/users/users.module").then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
