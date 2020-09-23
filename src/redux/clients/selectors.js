import { createSelector } from "reselect";

import { getClientsEntities } from "redux/entities/selectors";

const selectClientsState = state => state.clients;

const getClients = createSelector(
  state => getClientsEntities(state) || {},
  clients => clients
);
const getLoading = createSelector(selectClientsState, state => {
  return state.loading || false;
});
const getLoaded = createSelector(selectClientsState, state => {
  return state.loaded || false;
});
const getError = createSelector(selectClientsState, state => {
  return state.error || null;
});
export { getClients, getLoading, getError, getLoaded };
