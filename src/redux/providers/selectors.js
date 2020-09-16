import { createSelector } from "reselect";

import { getProvidersEntities } from 'redux/entities/selectors'

const selectProvidersState = state => state.providers;

const getProviders = createSelector(
  state => selectProvidersState(state).providers || [],
  state => getProvidersEntities(state) || {},
  (ids, providers) => ids.map((id) => providers[id])
);
const getLoading = createSelector(selectProvidersState, state => {
  return state.loading || false;
});
const getLoaded = createSelector(selectProvidersState, state => {
  return state.loaded || false;
});
const getError = createSelector(selectProvidersState, state => {
  return state.error || null;
});

export const makeGetProvider = () => (
    createSelector(
        getProvidersEntities,
        (_, providerId) => providerId,
        (entities, id) => entities[id]
    )
)
export const getProviderLoading = createSelector(selectProvidersState, state => {
  return state.providerLoading || false;
});
export const getProviderLoaded = createSelector(selectProvidersState, state => {
  return state.providerLoaded || false;
});
export const getProviderError = createSelector(selectProvidersState, state => {
  return state.providerError || null;
});

export { getProviders, getLoading, getError, getLoaded };
