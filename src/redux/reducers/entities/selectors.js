import { createSelector } from 'reselect'

export const getServicesEntities = createSelector([
  (state) => state.entities.services,
],
  (entities) => entities
)
