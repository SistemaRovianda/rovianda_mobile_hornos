import { createAction, props } from "@ngrx/store";
import { ProductFormulation } from "src/app/shared/models/product.interface";

const LOAD_PRODUCTS_FORMULATION =
  "[Products Formulation] Load Products Formulation";

const LOAD_PRODUCTS_FORMULATION_SUCCESS =
  "[Products Formulation] Load Products Formulation Success";

const LOAD_PRODUCTS_FORMULATION_ERROR =
  "[Products Formulation] Load Products Formulation Error";

export const loadProductsFormulation = createAction(LOAD_PRODUCTS_FORMULATION);

export const loadProductsFormulationSuccess = createAction(
  LOAD_PRODUCTS_FORMULATION_SUCCESS,
  props<{ productsFormulation: ProductFormulation[] }>()
);

export const loadProductsFormulationError = createAction(
  LOAD_PRODUCTS_FORMULATION_ERROR,
  props<{ error: string }>()
);
