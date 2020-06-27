import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { createSelector } from "@ngrx/store";

const PRODUCTS_FORMULATION_STATE = (state: AppStateInterface) =>
  state.productsFormulation;

export const productsFormulationSelect = createSelector(
  PRODUCTS_FORMULATION_STATE,
  (state) => state.productsFormulation
);
