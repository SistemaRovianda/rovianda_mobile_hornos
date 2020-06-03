import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Products } from "src/app/shared/models/oven.interface";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { Store } from "@ngrx/store";
import * as fromProductsActions from "../../store/list-products/list-products.actions";
import * as fromProductSelector from "../../store/list-products/list-products.selector";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.scss"],
})
export class ListProductsComponent implements OnInit {
  products$: Observable<Products[]> = this.store.select(
    fromProductSelector.fetchAllProducts
  );

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.store.dispatch(fromProductsActions.fetchAllProducts());
  }
}
