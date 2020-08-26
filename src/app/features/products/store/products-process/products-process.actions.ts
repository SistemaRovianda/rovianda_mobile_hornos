import { createAction, props } from "@ngrx/store";
import { ProductFormulation, ProductProcess } from "src/app/shared/models/product.interface";

const LOAD_PRODUCTS_PROCESS =
  "[Products Formulation] Load Products Formulation";

const LOAD_PRODUCTS_PROCESS_SUCCESS =
  "[Products Formulation] Load Products Formulation Success";

const LOAD_PRODUCTS_PROCESS_ERROR =
  "[Products Formulation] Load Products Formulation Error";

export const loadProductsProcess = createAction(LOAD_PRODUCTS_PROCESS);

export const loadProductsProcessSuccess = createAction(
  LOAD_PRODUCTS_PROCESS_SUCCESS,
  props<{ productsProcess: ProductProcess[] }>()
);

export const loadProductsProcessError = createAction(
  LOAD_PRODUCTS_PROCESS_ERROR,
  props<{ error: string }>()
);
