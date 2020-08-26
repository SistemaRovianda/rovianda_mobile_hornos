import { ProductFormulation, ProductProcess } from "src/app/shared/models/product.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  loadProductsProcess,
  loadProductsProcessSuccess,
  loadProductsProcessError,
} from "./products-process.actions";

export interface ProductsProcessState {
  loading: boolean;
  productsProcess: ProductProcess[];
  error: string;
}

const initialState: ProductsProcessState = {
  loading: false,
  productsProcess: [],
  error: null,
};

const _productsProcessReducer = createReducer<ProductsProcessState>(
  initialState,
  on(loadProductsProcess, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadProductsProcessSuccess, (state, { productsProcess }) => ({
    ...state,
    productsProcess,
  })
),
  on(loadProductsProcessError, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function productsProcessReducer(
  state: ProductsProcessState,
  action: Action
) {
  return _productsProcessReducer(state, action);
}
