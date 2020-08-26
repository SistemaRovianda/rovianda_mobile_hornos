import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/services/product.service";
import {
  loadProductsProcess,
  loadProductsProcessSuccess,
  loadProductsProcessError,
} from "./products-process.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class ProductsProcessEffects {
  constructor(
    private _actions$: Actions,
    private productsService: ProductService,
    private toastService: ToastService
  ) {}

  loadProductsProcess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadProductsProcess),
      exhaustMap((action) =>
        this.productsService.getProductsProcess().pipe(
          switchMap((products) => {
            return [
              loadProductsProcessSuccess({ productsProcess: products }),
            ];
          }),
          catchError((error) => {
            return of(loadProductsProcessError(error));
          })
        )
      )
    )
  );
}
