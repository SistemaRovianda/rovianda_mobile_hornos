import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import * as fromProductsActions from "../../store/list-products/list-products.actions";
import { Observable } from "rxjs";
import { Products } from "src/app/shared/models/oven.interface";
import { fetchAllProducts } from "../../store/list-products/list-products.selector";
import { signOut } from "src/app/features/landing/store/login/login.action";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.scss"],
})
export class ListProductsComponent implements OnInit {
  products$: Observable<Products[]> = this.store.select(fetchAllProducts);

  // products$: any = new Array(35);

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.store.dispatch(fromProductsActions.fetchAllProducts());
  }

  signOut(evt) {
    this.store.dispatch(signOut());
  }
}
