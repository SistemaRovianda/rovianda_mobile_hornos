import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/shared/services/product.service";
import * as fromActions from "./new-product.actions";
import { exhaustMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}

  product$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newProduct),
      exhaustMap((action) =>
        this.productsService.newProduct(action.product).pipe(
          map(() => fromActions.newProductSuccess()),
          catchError((error) => of(fromActions.newProductError(error)))
        )
      )
    )
  );
}
