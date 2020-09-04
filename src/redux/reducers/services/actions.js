import * as actionTypes from './actionTypes'

export const getServices = () => ({
  types: [
    actionTypes.GET_SERVICES,
    actionTypes.GET_SERVICES_SUCCESS,
    actionTypes.GET_SERVICES_FAIL,
  ],
  promise: (client) => client.get('services')
})
