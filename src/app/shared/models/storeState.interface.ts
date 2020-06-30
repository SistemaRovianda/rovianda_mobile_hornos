import { DetailProduct, NewProduct } from "./oven.interface";
import { SteppersInterface } from "./stepper.interface";
import { UsersState } from "src/app/features/products/store/users/users.reducer";
import { RevisionState } from "src/app/features/products/store/revision/revision.reducer";
import { ProductsFormulationState } from "src/app/features/products/store/products-formulation/products-formulation.reducer";
import { UsersCheckedState } from "src/app/features/products/store/usersChecked/users-checked.reducer";

export interface LoginState {
  loading: boolean;
  error: string;
}

export interface AuthenticationUser {
  uid?: string;
  name?: string;
  email?: string;
  rol?: string;
  token?: string;
  currentToken?: string;
  job?: string;
}

export interface newProductState {
  product: NewProduct;
  error: string;
  loading: boolean;
}

export interface DetailReviewList {
  detail: DetailProduct;
  error: string;
  loading: boolean;
}

export interface AppStateInterface {
  login: LoginState;
  auth: AuthenticationUser;
  stepper: SteppersInterface;
  listProducts: any;
  newProduct: newProductState;
  detailReviewList: DetailReviewList;
  users: UsersState;
  revision: RevisionState;
  productsFormulation: ProductsFormulationState;
  usersChecked: UsersCheckedState;
}
