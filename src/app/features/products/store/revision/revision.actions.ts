import { createAction, props } from "@ngrx/store";
import { Revision } from "src/app/shared/models/oven.interface";

const REGISTER_REVISION = "[REVISION] Register Revision";

const REGISTER_REVISION_SUCCESS = "[REVISION] Register Revision Success";

const REGISTER_REVISION_ERROR = "[REVISION] Register Revision Error";

export const registerRevision = createAction(
  REGISTER_REVISION,
  props<{ productId: string; revision: Revision }>()
);

export const registerRevisionSuccess = createAction(REGISTER_REVISION_SUCCESS);

export const registerRevisionError = createAction(
  REGISTER_REVISION_ERROR,
  props<{ error: string }>()
);
