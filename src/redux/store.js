import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { reducer as polyglotReducer } from "polyglot-react-redux-sdk";

const rootReducer = combineReducers({
  polyglot: polyglotReducer,
});

const store = configureStore({
  reducer: rootReducer,
  ...getDefaultMiddleware,
});

export default store;
