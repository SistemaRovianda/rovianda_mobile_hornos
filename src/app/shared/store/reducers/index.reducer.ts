import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { AppStateInterface } from "../../models/storeState.interface";
import { StepperInitialReducer } from "../stepper/stepper.reducer";
import { ListProductsReducer } from "src/app/features/products/store/list-products/list-products.reducer";
export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  auth: authenticationReducer,
  stepper: StepperInitialReducer,
  listProducts: ListProductsReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
