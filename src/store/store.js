import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { reducer as polyglotReducer } from "polyglot-react-redux-sdk";

import authReducer from "./auth";

const rootReducer = combineReducers({
  polyglot: polyglotReducer,
  auth: authReducer
});

const store = configureStore({
  reducer: rootReducer,
  ...getDefaultMiddleware
});

export default store;
