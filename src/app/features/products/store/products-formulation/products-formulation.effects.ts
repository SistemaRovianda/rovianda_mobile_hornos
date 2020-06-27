import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/services/product.service";
import {
  loadProductsFormulation,
  loadProductsFormulationSuccess,
  loadProductsFormulationError,
} from "./products-formulation.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class ProductsFormulationEffects {
  constructor(
    private _actions$: Actions,
    private productsService: ProductService,
    private toastService: ToastService
  ) {}

  loadProductsFormulation$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadProductsFormulation),
      exhaustMap((action) =>
        this.productsService.getProductsFormulation().pipe(
          switchMap((products) => {
            return [
              loadProductsFormulationSuccess({ productsFormulation: products }),
            ];
          }),
          catchError((error) => {
            return of(loadProductsFormulationError(error));
          })
        )
      )
    )
  );
}
