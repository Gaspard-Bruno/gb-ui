import { createSelector } from "reselect";

const selectEntitiesState = state => state?.entities;

export const getAppointmentsEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.appointments || [];
  }
);

export const getProvidersEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.providers || [];
  }
);

export const getClientsEntities = createSelector(selectEntitiesState, state => {
  return state?.clients || [];
});

export const getAdminEntities = createSelector(selectEntitiesState, state => {
  return state?.admins || [];
});

export const getServicesEntities = createSelector(
  selectEntitiesState,
  state => {
    return state?.services || [];
  }
);

export const getCandidateLeadsEntities = createSelector(selectEntitiesState, state => {
  return state.candidateLeads || [];
});