import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./actions";

export const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state, { value }) => state - value)
);
