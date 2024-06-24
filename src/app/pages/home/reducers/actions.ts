import { createAction, props } from "@ngrx/store";

interface IProps {
  value: number;
}

export const increment = createAction("[Counter] Increment");
export const decrement = createAction("[Counter] Decrement", props<IProps>());
