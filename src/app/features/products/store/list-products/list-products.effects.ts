import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";

import * as fromActions from "./list-products.actions";
import { ProductService } from "src/app/shared/services/product.service";
@Injectable({
  providedIn: "root",
})
export class ListProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllProducts),
      exhaustMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => fromActions.fetchAllProductsSuccess({ products })),
          catchError((error) => of(fromActions.fetchAllProductsError(error)))
        )
      )
    )
  );
}
