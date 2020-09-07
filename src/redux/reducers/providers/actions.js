import * as actionTypes from './actionTypes'

export const getProviders = (params = {}) => ({
    types: [
      actionTypes.GET_PROVIDERS,
      actionTypes.GET_PROVIDERS_SUCCESS,
      actionTypes.GET_PROVIDERS_FAIL,
    ],
    promise: (client) => client.get('providers')
})

export const getProvider = (id) => ({
  types: [
    actionTypes.GET_PROVIDER,
    actionTypes.GET_PROVIDER_SUCCESS,
    actionTypes.GET_PROVIDER_FAIL,
  ],
  promise: (client) => client.get(`providers/${id}`)
})


export const updateProvider = (status, providerId) => ({
types: [
    actionTypes.UPDATE_PROVIDER,
    actionTypes.UPDATE_PROVIDER_SUCCESS,
    actionTypes.UPDATE_PROVIDER_FAIL,
],
promise: (client) => client.put(
    `provider/${providerId}`,
    { data: { provider: { status } } })
})