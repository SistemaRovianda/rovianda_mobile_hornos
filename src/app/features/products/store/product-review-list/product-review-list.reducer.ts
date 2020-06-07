import { createReducer, on } from "@ngrx/store";
import { DetailReviewList } from "src/app/shared/models/storeState.interface";
import * as fromActions from "./product-review-list.actions";

const initialState: DetailReviewList = {
  detail: null,
  error: null,
  loading: false,
};

export const DetailReviewListReducer = createReducer<DetailReviewList>(
  initialState,
  on(fromActions.fetchAllDetail, (state, { id }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllDetailSuccess, (state, { detail }) => ({
    ...state,
    deatil: detail,
    loading: false,
  })),

  on(fromActions.fetchAllDetailError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
