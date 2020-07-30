import { Routes, RouterModule } from "@angular/router";
import { CreateUserComponent } from "./pages/create-user/create-user.component";
import { NgModule } from "@angular/core";
import { CreateUserModule } from "./pages/create-user/create-user.module";
import { PrintReportPageComponent } from "./pages/print-report/print-report.page";
import { PrintReportPageModule } from "./pages/print-report/print-report.module";

const routes: Routes = [
  {
    path: ":id/create-user",
    component: CreateUserComponent,
  },
  {
    path: "print-report/:id",
    component: PrintReportPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CreateUserModule,
    PrintReportPageModule,
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
