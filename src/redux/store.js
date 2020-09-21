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
import clientsReducer from './clients';
import servicesReducer from './services';
import adminReducer from './admin';
import candidateLeadsReducer from './candidateLeads';

const rootReducer = combineReducers({
  polyglot: polyglotReducer,
  auth: authReducer,
  appointments: appointmentsReducer,
  providers: providersReducer,
  clients: clientsReducer,
  services: servicesReducer,
  admins: adminReducer,
  candidateLeads: candidateLeadsReducer,
  entities: entitiesReducer
});

const store = configureStore({
  reducer: rootReducer,
  ...getDefaultMiddleware
});

export default store;
