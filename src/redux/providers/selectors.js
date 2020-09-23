import { createSelector } from "reselect";

import { getProvidersEntities } from "redux/entities/selectors";

const selectProvidersState = state => state.providers;

const getProviders = createSelector(
  state => getProvidersEntities(state) || {},
  providers => providers
);
const getLoading = createSelector(selectProvidersState, state => {
  return state.loading || state.providerLoading || false;
});
const getLoaded = createSelector(selectProvidersState, state => {
  return state.loaded || state.providerLoaded || false;
});
const getError = createSelector(selectProvidersState, state => {
  return state.error || null;
});

export { getProviders, getLoading, getError, getLoaded };
