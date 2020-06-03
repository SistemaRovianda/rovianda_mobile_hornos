import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { ListProductsReducer } from "src/app/features/products/store/list-products/list-products.reducer";
import { NewProductReducer } from "src/app/features/products/store/new-product/new-product.reducer";
import { AppStateInterface } from "../../models/storeState.interface";
import { StepperInitialReducer } from "../stepper/stepper.reducer";

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  auth: authenticationReducer,
  stepper: StepperInitialReducer,
  listProducts: ListProductsReducer,
  newProduct: NewProductReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
