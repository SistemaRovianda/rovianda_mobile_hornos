import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { ProductService } from "src/app/shared/services/product.service";
import * as fromActions from "./product-review-list.actions";

@Injectable({
  providedIn: "root",
})
export class DetailReviewListEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}

  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.fetchAllDetail),
      exhaustMap((action) =>
        this.productsService.getDetailProduct(action.id).pipe(
          map((detail) => fromActions.fetchAllDetailSuccess({ detail })),
          catchError((error) => of(fromActions.fetchAllDetailError(error)))
        )
      )
    )
  );
}
