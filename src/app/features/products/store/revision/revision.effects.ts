import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RevisionService } from "src/app/shared/services/revision.service";
import {
  registerRevision,
  registerRevisionSuccess,
  registerRevisionError,
} from "./revision.actions";
import { exhaustMap, catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class RevisionEffects {
  constructor(
    private _actions$: Actions,
    private _revisionService: RevisionService,
    private _router: Router,
    private _modalCtrl: ModalController,
    private toastService: ToastService
  ) {}

  registerRevisionEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(registerRevision),
      exhaustMap((action) =>
        this._revisionService
          .registerRevision(action.productId, action.revision)
          .pipe(
            switchMap((_) => {
              this.toastService.presentToastSuccess();
              this._router.navigate([`product/${action.productId}/revisions`]);
              return [registerRevisionSuccess()];
            }),
            catchError((error) => this.errorHandler(error))
          )
      )
    )
  );

  errorHandler(error: any) {
    this.toastService.presentToastError();
    return of(registerRevisionError(error));
  }
}
