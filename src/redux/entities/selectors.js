import { createSelector } from 'reselect'

const selectEntitiesState = state => state.entities;

export const getAppointmentsEntities = createSelector(selectEntitiesState, state => {
    return state.appointments || [];
  });

export const getProvidersEntities = createSelector(selectEntitiesState, state => {
    return state.providers || [];
});