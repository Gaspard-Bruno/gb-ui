import { createSelector } from 'reselect'

export const getServicesEntities = createSelector([
  (state) => state.entities.services,
],
  (entities) => entities
)


export const getAppointmentsEntities = createSelector([
  (state) => state.entities.appointments,
],
  (entities) => entities
)


export const getProvidersEntities = createSelector([
  (state) => state.entities.providers,
],
  (entities) => entities
)
