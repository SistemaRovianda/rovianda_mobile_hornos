import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, tap, switchMap } from "rxjs/operators";
import { ProductService } from "src/app/shared/services/product.service";
import { ToastService } from "src/app/shared/services/toast.service";
import { stepperReset } from "src/app/shared/store/stepper/stepper.actions";
import * as fromActions from "./new-product.actions";
import { Router } from '@angular/router';
import { fetchAllProducts } from '../list-products/list-products.actions';

@Injectable({
  providedIn: "root",
})
export class NewProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService,
    public modalController: ModalController,
    public toast: ToastService,
    private router: Router
  ) {}

  product$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newProduct),
      exhaustMap((action) =>
        this.productsService.newProduct(action.product).pipe(
          switchMap((_) => {
            this.toast.presentToastSuccess();
            return [stepperReset(),fromActions.newProductSuccess(),fetchAllProducts()]
          }),
          catchError((error) => {
            this.errorHandler(error)
            return [];
          })
        )
      )
    )
  );

  success$ = createEffect(() => 
          this.actions$.pipe(
            ofType(fromActions.newProductSuccess),
            tap( _ => {
              this.router.navigate(['/product/list'])
            })
          ),
          {
            dispatch: false
          }
  )

  errorHandler(error: any) {
    this.toast.presentToastError();
    return of(fromActions.newProductError(error));
  }
}
