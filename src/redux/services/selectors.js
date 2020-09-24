import { createSelector } from "reselect";

import { getServicesEntities } from "redux/entities/selectors";

const selectServicesState = state => state.services;

export const getServices = createSelector(
  getServicesEntities,
  services => services
);

export const getServiceLoading = createSelector(selectServicesState, state => {
  return state.serviceLoading || state.loading || false;
});
export const getServiceLoaded = createSelector(selectServicesState, state => {
  return state.serviceLoaded || state.loaded || false;
});
export const getServiceError = createSelector(selectServicesState, state => {
  return state.serviceError || state.error || null;
});
