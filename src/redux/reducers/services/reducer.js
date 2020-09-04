import produce from 'immer'

import * as actionTypes from './actionTypes'


const initialState = {
  services: [],
  servicesLoading: false,
  servicesError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // GET SERVICES
      case actionTypes.GET_SERVICES:
        draft.servicesLoading = true
        break
      case actionTypes.GET_SERVICES_SUCCESS:
        draft.servicesLoading = false
        draft.services = action.result.data.map((d) => d.id)
        break
      case actionTypes.GET_SERVICES_FAIL:
        draft.servicesLoading = false
        draft.servicesError = { status: action.error.status }
        break

      default:
        break
    }
  })
}

export default reducer
