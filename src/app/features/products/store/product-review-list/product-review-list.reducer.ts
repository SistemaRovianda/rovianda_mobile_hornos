import { createReducer, on, Action } from "@ngrx/store";
import { DetailReviewList } from "src/app/shared/models/storeState.interface";
import * as fromActions from "./product-review-list.actions";

const initialState: DetailReviewList = {
  detail: null,
  error: null,
  loading: false,
};

const _detailReviewListReducer = createReducer<DetailReviewList>(
  initialState,
  on(fromActions.fetchAllDetail, (state, { id }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllDetailSuccess, (state, { detail }) => ({
    ...state,
    detail,
    loading: false,
  })),

  on(fromActions.fetchAllDetailError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function detailReviewListReducer(
  state: DetailReviewList,
  action: Action
) {
  return _detailReviewListReducer(state, action);
}
