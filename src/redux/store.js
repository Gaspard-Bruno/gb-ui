import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { reducer as polyglotReducer } from "polyglot-react-redux-sdk";

import authReducer from "./auth";
import entitiesReducer from './entities';
import appointmentsReducer from './appointments';

const rootReducer = combineReducers({
  polyglot: polyglotReducer,
  auth: authReducer,
  appointments: appointmentsReducer,
  entities: entitiesReducer
});

const store = configureStore({
  reducer: rootReducer,
  ...getDefaultMiddleware
});

export default store;
