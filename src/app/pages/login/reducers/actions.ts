import { createAction, props } from "@ngrx/store";
import { IUser } from "../../../services/auth.service";

export const userInit = createAction(
  "[User] User Init",
  props<{
    token: string;
    success: boolean;
  }>()
);

export const userSuccess = createAction(
  "[User] User Success",
  props<{
    user: IUser | null;
  }>()
);

export const userFailure = createAction(
  "[User] User Failure",
  props<{
    error: string | null;
  }>()
);
