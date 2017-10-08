import { IAction } from "../actions";
import { actionType } from "../actions/index-actions";
import { Reducer } from "./index";

interface IIndexData {
  [key: string]: any;
}

const initialState: IIndexData = {
};

const reducer: Reducer<IIndexData> = (state: IIndexData = initialState, action: IAction): IIndexData => {
  switch (action.type) {
    // case actionTypes.SOMETHING:
    //   return null
    default:
      return state;
  }
};

export default reducer;
