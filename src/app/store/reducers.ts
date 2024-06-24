import { counterReducer } from "../pages/home/reducers";
import { UserInitialState, userReducer } from "../pages/login/reducers";

export interface IStore {
  counter: number;
  user: UserInitialState;
}

export const store = {
  counter: counterReducer,
  user: userReducer
};
