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

@Injectable({
  providedIn: "root",
})
export class RevisionEffects {
  constructor(
    private _actions$: Actions,
    private _revisionService: RevisionService,
    private _router: Router,
    private _modalCtrl: ModalController
  ) {}

  registerRevisionEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(registerRevision),
      exhaustMap((action) =>
        this._revisionService
          .registerRevision(action.productId, action.revision)
          .pipe(
            switchMap((_) => {
              this._router.navigate([`product/${action.productId}/revisions`]);
              return [registerRevisionSuccess()];
            }),
            catchError((error) => this.errorHandler(error))
          )
      )
    )
  );

  errorHandler(error: any) {
    this.openModal("Error", "¡Ha ocurrido un problema, intente de nuevo!");
    return of(registerRevisionError(error));
  }

  async openModal(title: string, message: string) {
    const modal = await this._modalCtrl.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        title: title,
        message: message,
      },
    });
    return await modal.present();
  }
}
