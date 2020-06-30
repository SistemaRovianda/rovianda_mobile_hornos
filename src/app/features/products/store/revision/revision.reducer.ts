import { Revision } from "src/app/shared/models/oven.interface";
import { createReducer, on, Action } from "@ngrx/store";
import {
  registerRevision,
  registerRevisionSuccess,
  registerRevisionError,
} from "./revision.actions";

export interface RevisionState {
  loading: boolean;
  revision: Revision;
  error: string;
}

const initialState: RevisionState = {
  loading: false,
  revision: null,
  error: null,
};

const _revisionReducer = createReducer(
  initialState,
  on(registerRevision, (state) => ({
    ...state,
    loading: true,
  })),
  on(registerRevisionSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(registerRevisionError, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function revisionReducer(state: RevisionState, action: Action) {
  return _revisionReducer(state, action);
}
