import { createSelector } from 'reselect'

import { getServicesEntities } from '../entities/selectors'

export const getServices = createSelector(
  (state) => state.services.services,
  getServicesEntities,
  (services, entities) => services.map((o) => entities[o])
)
