import { createReducer, on, Action } from "@ngrx/store";
import { NewProduct } from "src/app/shared/models/oven.interface";
import * as fromActions from "./new-product.actions";
import { newProductState } from "src/app/shared/models/storeState.interface";

const initialState: newProductState = {
  product: null,
  error: null,
  loading: false,
};

const _newProductReducer = createReducer<newProductState>(
  initialState,
  on(fromActions.newProduct, (state, { product }) => ({
    ...state,
    product,
    loading: true,
  })),

  on(fromActions.newProductSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(fromActions.newProductError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function newProductReducer(state: newProductState, action: Action) {
  return _newProductReducer(state, action);
}
