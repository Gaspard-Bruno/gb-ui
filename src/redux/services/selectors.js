import { createSelector } from "reselect";

import { getServicesEntities } from "redux/entities/selectors";

const selectServicesState = state => state.services;

export const getServices = createSelector(
  getServicesEntities,
  services => services
);

export const getServiceLoading = createSelector(selectServicesState, state => {
  return state.serviceLoading || false;
});
export const getServiceLoaded = createSelector(selectServicesState, state => {
  return state.serviceLoaded || false;
});
export const getServiceError = createSelector(selectServicesState, state => {
  return state.serviceError || null;
});
