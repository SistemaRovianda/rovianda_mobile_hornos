import { Injectable } from "@angular/core";
import { UsersService } from "src/app/shared/services/users.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersError,
  registerUsers,
  registerUsersError,
  getUserOfOven,
  setUserOfOven,
} from "./users.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { of, forkJoin } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersEffects {
  constructor(
    private _actions$: Actions,
    private _usersService: UsersService
  ) {}

  fetchUsersEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fetchUsers),
      exhaustMap((action) =>
        forkJoin(
          this._usersService.getUsers("quality"),
          this._usersService.getUsers("process")
        ).pipe(
          switchMap(([userQuality, usersProcess]) => [
            fetchUsersSuccess({ users: [...userQuality, ...usersProcess] }),
          ]),
          catchError((error) => of(fetchUsersError(error)))
        )
      )
    )
  );

  registerUserEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(registerUsers),
      exhaustMap((action) =>
        this._usersService.addUser(action.processId, action.users).pipe(
          switchMap((_) => []),
          catchError((error) => of(registerUsersError(error)))
        )
      )
    )
  );

  getUserOfOvenProcess$ = createEffect(()=>
  this._actions$.pipe(
    ofType(getUserOfOven),
    exhaustMap((action)=>this._usersService.getUsersChecked(action.ovenId.toString()).pipe(
      switchMap((users)=>[setUserOfOven({users})])
    ))
  ))
}
