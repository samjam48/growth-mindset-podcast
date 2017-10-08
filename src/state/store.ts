import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const preloadedState: any = {};
// if (window && "__PRELOADED_STATE__" in window) {
//   preloadedState = window.__PRELOADED_STATE__;
//   delete window.__PRELOADED_STATE__;
// }

// const store = redux.createStore(reducers, preloadedState)
const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(thunk),
);

export default store;
