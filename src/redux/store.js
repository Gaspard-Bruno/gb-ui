import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { reducer as polyglotReducer } from "polyglot-react-redux-sdk";

import authReducer from "./auth";
import entitiesReducer from './entities';
import appointmentsReducer from './appointments';
import providersReducer from './providers';

const rootReducer = combineReducers({
  polyglot: polyglotReducer,
  // auth: authReducer,
  appointments: appointmentsReducer,
  providers: providersReducer,
  entities: entitiesReducer
});

const store = configureStore({
  reducer: rootReducer,
  ...getDefaultMiddleware
});

export default store;
