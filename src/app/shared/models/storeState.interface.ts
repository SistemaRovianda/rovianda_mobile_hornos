import { DetailProduct, NewProduct } from "./oven.interface";
import { SteppersInterface } from "./stepper.interface";

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
}
