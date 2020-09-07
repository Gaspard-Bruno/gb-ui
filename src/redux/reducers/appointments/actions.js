import * as actionTypes from './actionTypes'

export const getAppointments = (params = {}) => {
  let url = 'appointments'

  Object.keys(params).forEach((k, index) => {
    if (index === 0) {
      url += '?'
    } else {
      url += '&'
    }

    url += `${k}=${params[k]}`
  })

  return ({
    types: [
      actionTypes.GET_APPOINTMENTS,
      actionTypes.GET_APPOINTMENTS_SUCCESS,
      actionTypes.GET_APPOINTMENTS_FAIL,
    ],
    promise: (client) => client.get(url)
  })
}

export const getAppointment = (id) => ({
  types: [
    actionTypes.GET_APPOINTMENT,
    actionTypes.GET_APPOINTMENT_SUCCESS,
    actionTypes.GET_APPOINTMENT_FAIL,
  ],
  promise: (client) => client.get(`appointments/${id}`)
})

export const createAppointment = (appointmentId) => ({
  types: [
    actionTypes.CREATE_APPOINTMENT,
    actionTypes.CREATE_APPOINTMENT_SUCCESS,
    actionTypes.CREATE_APPOINTMENT_FAIL,
  ],
  promise: (client) => client.post(
    'appointments',
    { data: { appointment: { appointmentId } } })
  })

export const updateAppointment = (status, appointmentId) => ({
types: [
    actionTypes.UPDATE_APPOINTMENT,
    actionTypes.UPDATE_APPOINTMENT_SUCCESS,
    actionTypes.UPDATE_APPOINTMENT_FAIL,
],
promise: (client) => client.put(
    `appointment/${appointmentId}`,
    { data: { appointment: { status } } })
})