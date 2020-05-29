import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";

const CATALOG_PRODUCTS = (state: AppStateInterface) => state.listProducts;

export const fetchAllProducts = createSelector(
  CATALOG_PRODUCTS,
  (state) => state.products
);
