import { createReducer, on } from "@ngrx/store";
import { IUser } from "../../../services/auth.service";
import { userFailure, userInit, userSuccess } from "./actions";

export interface UserInitialState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}
export const initialState: UserInitialState = {
  user: null,
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(userInit, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(userSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      loading: false
    };
  }),
  on(userFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error
    };
  })
);
