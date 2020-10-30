import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { catchError, delay, exhaustMap, switchMap, tap } from "rxjs/operators";
import * as fromLoginActions from "src/app/features/landing/store/login/login.action";
import * as fromAuthActions from "src/app/features/landing/store/authentication/authentication.action";
import { AuthService } from "src/app/shared/services/auth.service";
import { Platform, NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Injectable()
export class LogginEffects {
  constructor(
    private action$: Actions,
    private _authService: AuthService,
    private _router: NavController,
    private _storage: Storage,
    private _ptl: Platform
  ) {}

  signInEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signIn),
      delay(2000),
      exhaustMap((action) =>
        this._authService.signIn(action.email, action.password).pipe(
          switchMap(({ uid, token }) => {
            return [
              fromLoginActions.startLoad(),
              fromAuthActions.loadUser({ uid, token }),
              fromAuthActions.loadCurrentToken({
                uid,
              }),
            ];
          }),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure({ error: error.message })
            )
          )
        )
      )
    )
  );

  loadCurrentTokenEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromAuthActions.loadCurrentToken),
      exhaustMap((action) =>
        this._authService.getTokenCurrentUser().pipe(
          switchMap(({ currentToken }) => {
            this._storage.set("token", currentToken);
            return [
              fromAuthActions.loadUser({ currentToken }),
              fromLoginActions.signAuthSuccess({ uid: action.uid }),
            ];
          }),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure(error)
            )
          )
        )
      )
    )
  );

  signAuthSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signAuthSuccess),
      exhaustMap((action) =>
        this._authService.getUserData(action.uid).pipe(
          delay(3000),
          switchMap(({ name, lastSurname, firstSurname, rol, job }) => {
            this._storage.set("uid", action.uid);
            this._storage.set("role", rol);
            this._storage.set(
              "currentUser",
              name
            );
            this._storage.set("job", job);
            return [
              fromAuthActions.loadUser({
                name,
                lastSurname,
                firstSurname,
                rol,
                job,
              }),
              fromLoginActions.signInSuccess(),
            ];
          }),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure(error)
            )
          )
        )
      )
    )
  );

  signInSuccessEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signInSuccess),
      exhaustMap((action) =>
        from(this._router.navigateRoot(["/product/list"])).pipe(
          switchMap((result) =>
            result
              ? [fromLoginActions.finishLoad()]
              : [fromLoginActions.signInFailure({ error: "Usuario no valido" })]
          ),
          catchError((error) =>
            of(
              fromLoginActions.finishLoad(),
              fromLoginActions.signInFailure(error)
            )
          )
        )
      )
    )
  );

  signInFailureEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(fromLoginActions.signInFailure),
        tap((action) => this._storage.clear())
      ),
    {
      dispatch: false,
    }
  );

  signOutEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromLoginActions.signOut),
      exhaustMap((action) =>
        this._authService.signOut().pipe(
          switchMap((_) => [fromAuthActions.clearUser()]),
          catchError((error) => of(fromLoginActions.signInFailure(error)))
        )
      )
    )
  );
}
