import { createSelector } from "reselect";

import { getClientsEntities } from 'redux/entities/selectors'

const selectClientsState = state => state.clients;

const getClients = createSelector(
  state => selectClientsState(state).clients || [],
  state => getClientsEntities(state) || {},
  (ids, clients) => ids.map((id) => clients[id])
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

export const makeGetClient = () => (
    createSelector(
        getClientsEntities,
        (_, clientId) => clientId,
        (entities, id) => entities[id]
    )
)
export const getClientLoading = createSelector(selectClientsState, state => {
  return state.clientLoading || false;
});
export const getClientLoaded = createSelector(selectClientsState, state => {
  return state.clientLoaded || false;
});
export const getClientError = createSelector(selectClientsState, state => {
  return state.clientError || null;
});

export { getClients, getLoading, getError, getLoaded };
