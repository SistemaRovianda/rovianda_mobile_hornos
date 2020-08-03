import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AppStateInterface } from "../models/storeState.interface";
import { Store } from "@ngrx/store";
import { fetchUsers } from "src/app/features/products/store/users/users.actions";
import { Storage } from "@ionic/storage";

@Injectable()
export class UsersResolve implements Resolve<boolean> {
  constructor(
    private _store: Store<AppStateInterface>,
    private storage: Storage
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(fetchUsers({ role: "quality" }));

    return true;
  }
}
