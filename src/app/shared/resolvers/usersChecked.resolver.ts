import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AppStateInterface } from "../models/storeState.interface";
import { Store } from "@ngrx/store";
import { fetchUsersChecked } from "src/app/features/products/store/usersChecked/users-checked.actions";

@Injectable()
export class UsersResolve implements Resolve<boolean> {
  constructor(private _store: Store<AppStateInterface>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(fetchUsersChecked({ processId: route.params.id }));
    return true;
  }
}
