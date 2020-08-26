import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { createSelector } from "@ngrx/store";

const PRODUCTS_FORMULATION_STATE = (state: AppStateInterface) =>
  state.productsProcess;

export const productsProcessSelect = createSelector(
  PRODUCTS_FORMULATION_STATE,
  (state) => state.productsProcess
);
