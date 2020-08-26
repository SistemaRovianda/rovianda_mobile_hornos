import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { listProductsReducer } from "src/app/features/products/store/list-products/list-products.reducer";
import { newProductReducer } from "src/app/features/products/store/new-product/new-product.reducer";
import { AppStateInterface } from "../../models/storeState.interface";
import { stepperInitialReducer } from "../stepper/stepper.reducer";
import { detailReviewListReducer } from "src/app/features/products/store/product-review-list/product-review-list.reducer";
import { usersReducer, usersOfOvenReducer } from "src/app/features/products/store/users/users.reducer";
import { revisionReducer } from "src/app/features/products/store/revision/revision.reducer";
import { usersCheckedReducer } from "src/app/features/products/store/usersChecked/users-checked.reducer";
import { productsProcessReducer } from 'src/app/features/products/store/products-process/products-process.reducer';

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  auth: authenticationReducer,
  stepper: stepperInitialReducer,
  listProducts: listProductsReducer,
  newProduct: newProductReducer,
  detailReviewList: detailReviewListReducer,
  users: usersReducer,
  revision: revisionReducer,
  productsProcess: productsProcessReducer,
  usersChecked: usersCheckedReducer,
  usersOfOven:usersOfOvenReducer
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
