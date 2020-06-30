import { createReducer, on, Action } from "@ngrx/store";

import * as fromLoginActions from "./login.action";
import { LoginState } from "src/app/shared/models/storeState.interface";

const STATE_INITIAL_LOGIN: LoginState = { error: null, loading: false };

const _loginReducer = createReducer<LoginState>(
  STATE_INITIAL_LOGIN,
  on(fromLoginActions.signIn, (state) => ({ ...state, loading: true })),
  on(fromLoginActions.finishLoad, (state) => ({ ...state, loading: false })),
  on(fromLoginActions.signInFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function loginReducer(state: LoginState, action: Action) {
  return _loginReducer(state, action);
}
