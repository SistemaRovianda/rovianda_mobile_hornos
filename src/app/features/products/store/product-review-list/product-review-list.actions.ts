import { createAction, props } from "@ngrx/store";
import { DetailProduct } from "src/app/shared/models/oven.interface";

const FETCH_ALL_DETAIL = "['DETAIL'] Fetch All Detail";

const CLOSE_OVEN_PRODUCT = "[DETAIL] Close oven product";

const FETCH_ALL_DETAIL_SUCCESS = "['DETAIL'] Fetch All Detail Success";

const FETCH_ALL_DETAIL_ERROR = "['DETAIL'] Fetch All Detail Error";

export const fetchAllDetail = createAction(
  FETCH_ALL_DETAIL,
  props<{ id: number }>()
);

export const closeOvenProduct = createAction(
  CLOSE_OVEN_PRODUCT,
  props<{ productId: string,observations:string }>()
);

export const fetchAllDetailSuccess = createAction(
  FETCH_ALL_DETAIL_SUCCESS,
  props<{ detail: DetailProduct }>()
);

export const fetchAllDetailError = createAction(
  FETCH_ALL_DETAIL_ERROR,
  props<{ error: string }>()
);
