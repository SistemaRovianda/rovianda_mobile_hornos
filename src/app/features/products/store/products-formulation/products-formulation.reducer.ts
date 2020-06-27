import { ProductFormulation } from "src/app/shared/models/product.interface";
import { createReducer, on } from "@ngrx/store";
import {
  loadProductsFormulation,
  loadProductsFormulationSuccess,
  loadProductsFormulationError,
} from "./products-formulation.actions";

export interface ProductsFormulationState {
  loading: boolean;
  productsFormulation: ProductFormulation[];
  error: string;
}

const initialState: ProductsFormulationState = {
  loading: false,
  productsFormulation: [],
  error: null,
};

export const productsFormulationReducer = createReducer<
  ProductsFormulationState
>(
  initialState,
  on(loadProductsFormulation, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadProductsFormulationSuccess, (state, { productsFormulation }) => ({
    ...state,
    productsFormulation,
  })),
  on(loadProductsFormulationError, (state, { error }) => ({
    ...state,
    error,
  }))
);
