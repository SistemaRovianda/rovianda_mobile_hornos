import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { loadProductsFormulation } from "src/app/features/products/store/products-formulation/products-formulation.actions";
import { AppStateInterface } from "../models/storeState.interface";

@Injectable()
export class ProductsResolve implements Resolve<boolean> {
  constructor(private _store: Store<AppStateInterface>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(loadProductsFormulation());
    return true;
  }
}
