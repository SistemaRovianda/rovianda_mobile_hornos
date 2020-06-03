import { AppStateInterface } from "src/app/shared/models/storeState.interface";
import { createSelector } from "@ngrx/store";

const STATE = (state: AppStateInterface) => state.newProduct;

export const SELECT_LOADING = createSelector(STATE, (state) => state.loading);
