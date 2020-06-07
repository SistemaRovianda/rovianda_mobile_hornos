import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/models/storeState.interface";

const STATE = (state: AppStateInterface) => state.detailReviewList;

export const fetchDetail = createSelector(STATE, (state) => state.detail);

export const fetchDetailRevision = createSelector(
  fetchDetail,
  (detail) => detail.revisions
);
