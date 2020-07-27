import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, tap } from "rxjs/operators";
import { ProductService } from "src/app/shared/services/product.service";
import { ToastService } from "src/app/shared/services/toast.service";
import { stepperReset } from "src/app/shared/store/stepper/stepper.actions";
import * as fromActions from "./new-product.actions";

@Injectable({
  providedIn: "root",
})
export class NewProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService,
    public modalController: ModalController,
    public toast: ToastService
  ) {}

  product$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newProduct),
      exhaustMap((action) =>
        this.productsService.newProduct(action.product).pipe(
          tap(() => {
            fromActions.newProductSuccess();
            stepperReset();
            this.toast.presentToastSuccess();
          }),
          catchError((error) => this.errorHandler(error))
        )
      )
    )
  );

  errorHandler(error: any) {
    this.toast.presentToastError();
    return of(fromActions.newProductError(error));
  }
}
