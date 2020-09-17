import { createSelector } from "reselect";

import { getServicesEntities } from 'redux/entities/selectors'

const selectServicesState = state => state.services;

export const makeGetService = () => (
    createSelector(
        getServicesEntities,
        (_, serviceId) => serviceId,
        (entities, id) => entities[id]
    )
)
export const getServiceLoading = createSelector(selectServicesState, state => {
  return state.serviceLoading || false;
});
export const getServiceLoaded = createSelector(selectServicesState, state => {
  return state.serviceLoaded || false;
});
export const getServiceError = createSelector(selectServicesState, state => {
  return state.serviceError || null;
});


