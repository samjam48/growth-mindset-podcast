import { combineReducers } from "redux";
import { IAction } from "../actions";
import indexReducer from "./index-reducer";

export type Reducer<S> = (state: S, action: IAction) => S;

export default combineReducers({
  index: indexReducer,
});
