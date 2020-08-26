import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";

import { AppStateInterface } from "../models/storeState.interface";
import { loadProductsProcess } from 'src/app/features/products/store/products-process/products-process.actions';

@Injectable()
export class ProductsResolve implements Resolve<boolean> {
  constructor(private _store: Store<AppStateInterface>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(loadProductsProcess());
    return true;
  }
}
