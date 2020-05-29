import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./list-products.actions";
import { Products } from "src/app/shared/models/oven.interface";

export interface newState {
  products: Products[];
  error: string;
  loading: boolean;
}

const initialState: newState = {
  products: [],
  error: null,
  loading: false,
};

export const ListProductsReducer = createReducer<newState>(
  initialState,
  on(fromActions.fetchAllProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),

  on(fromActions.fetchAllProductsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
