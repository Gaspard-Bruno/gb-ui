import { createSelector } from 'reselect'

import { getProvidersEntities } from '../entities/selectors'

export const getProviders = createSelector(
  (state) => state.providers.providers,
  getProvidersEntities,
  (providers, entities) => providers.map((o) => entities[o])
)

export const makeGetProvider = () => (
  createSelector(
    getProvidersEntities,
    (_, providerId) => providerId,
    (entities, id) => entities[id]
  )
)

export const getUpdateProviderLoading = createSelector([
    (state) => state.providers.updateProviderLoading
],
    (loading) => loading
)
  
export const getUpdateProviderError = createSelector([
    (state) => state.providers.updateProviderError
],
    (error) => error
)
  
  