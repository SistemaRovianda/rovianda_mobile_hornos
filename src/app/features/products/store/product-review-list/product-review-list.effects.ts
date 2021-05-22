import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { ProductService } from "src/app/shared/services/product.service";
import * as fromActions from "./product-review-list.actions";
import { RevisionService } from "src/app/shared/services/revision.service";
import { ToastService } from "src/app/shared/services/toast.service";
import { Router } from "@angular/router";
import { fetchAllProducts } from '../list-products/list-products.actions';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/models/storeState.interface';

@Injectable({
  providedIn: "root",
})
export class DetailReviewListEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService,
    private revisionService: RevisionService,
    private toastService: ToastService,
    private router: Router,
    private store:Store<AppStateInterface>
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

  closeOvenProduct$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.closeOvenProduct),
        exhaustMap((action) =>
          this.revisionService.closedRevision(action.productId,action.observations).pipe(
            tap((_) => {
              this.router.navigate(["/product/list"]);
              this.toastService.presentToastSuccess();
              this.store.dispatch(fetchAllProducts())
            }),
            catchError((error) => this.toastService.presentToastError())
          )
        )
      ),
    {
      dispatch: false,
    }
  );
}
