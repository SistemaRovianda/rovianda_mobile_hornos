import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  isAuth: boolean;

  constructor(private _authService: AuthService, private _router: Router) {
    console.log("Holi desde authGuard");
    // this.isAuth = false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    // if (this._authService.isAuth()) {
    //   return true;
    // }

    //this._router.navigate([""], { replaceUrl: true });
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this._authService.isAuth().pipe(
      mergeMap(
        (val) => this._authService.verifyRole(),
        (val1, val2) => {
          console.log("[Auth] mergeMap: token: ", val1, "role: ", val2);
          return val1 && val2 ? true : false;
        }
      )
    );
  }
}
