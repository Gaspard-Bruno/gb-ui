import produce from 'immer'

import * as actionTypes from './actionTypes'


const initialState = {
  providers: [],
  providersLoading: false,
  providersError: null,
  providerLoading: false,
  providerError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // GET PROVIDER
      case actionTypes.GET_PROVIDER:
        draft.providersLoading = true
        break
      case actionTypes.GET_PROVIDERS_SUCCESS:
        draft.providersLoading = false
        draft.providers = action.result.data.map((d) => d.id)
        break
      case actionTypes.GET_PROVIDERS_FAIL:
        draft.providersLoading = false
        draft.providersError = { status: action.error.status }
        break

      // GET PROVIDER
      case actionTypes.GET_PROVIDER:
        draft.providerLoading = true
        break
      case actionTypes.GET_PROVIDER_SUCCESS:
        let fetchedProvider = draft.providers.find(providerId => providerId === action.result.data.id)

        draft.providerLoading = false
        if (!fetchedProvider) {
          draft.providers = [action.result.data.id].concat(draft.providers)
        }
        break
      case actionTypes.GET_PROVIDER_FAIL:
        draft.providerLoading = false
        draft.providerError = { status: action.error.status }
        break

      // UPDATE PROVIDER
      case actionTypes.UPDATE_PROVIDER:
        draft.updateProvider = true
        break
      case actionTypes.UPDATE_PROVIDER_SUCCESS:
        draft.updateProvider = false
        draft.updateProviderError = null
        break
      case actionTypes.UPDATE_PROVIDER_FAIL:
        draft.updateProvider = false
        draft.updateProviderError = { status: action.error.status }
        break
      default:
        break
    }
  })
}

export default reducer
