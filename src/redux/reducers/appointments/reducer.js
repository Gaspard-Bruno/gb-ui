import produce from 'immer'

import * as actionTypes from './actionTypes'


const initialState = {
  appointments: [],
  appointmentsLoading: false,
  appointmentsError: null,
  appointmentLoading: false,
  appointmentError: null,
  createAppointmentError: null,
}

const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      // GET APPOINTMENTS
      case actionTypes.GET_APPOINTMENTS:
        draft.appointmentsLoading = true
        break
      case actionTypes.GET_APPOINTMENTS_SUCCESS:
        draft.appointmentsLoading = false
        draft.appointments = action.result.data.map((d) => d.id)
        break
      case actionTypes.GET_APPOINTMENTS_FAIL:
        draft.appointmentsLoading = false
        draft.appointmentsError = { status: action.error.status }
        break

      // GET APPOINTMENT
      case actionTypes.GET_APPOINTMENT:
        draft.appointmentLoading = true
        break
      case actionTypes.GET_APPOINTMENT_SUCCESS:
        let fetchedAppointment = draft.appointments.find(appId => appId === action.result.data.id)

        draft.appointmentLoading = false
        if (!fetchedAppointment) {
          draft.appointments = [action.result.data.id].concat(draft.appointments)
        }
        break
      case actionTypes.GET_APPOINTMENT_FAIL:
        draft.appointmentLoading = false
        draft.appointmentError = { status: action.error.status }
        break

      // CREATE APPOINTMENT
      case actionTypes.CREATE_APPOINTMENT:
        draft.createAppointment = true
        break
      case actionTypes.CREATE_APPOINTMENT_SUCCESS:
        draft.createAppointment = false
        draft.appointments = [action.result.data.id].concat(draft.appointments)
        break
      case actionTypes.CREATE_APPOINTMENT_FAIL:
        draft.createAppointment = false
        draft.createAppointmentError = { status: action.error.status }
        break

      // UPDATE APPOINTMENT
      case actionTypes.UPDATE_APPOINTMENT:
        draft.updateAppointment = true
        break
      case actionTypes.UPDATE_APPOINTMENT_SUCCESS:
        draft.updateAppointment = false
        draft.updateAppointmentError = null
        break
      case actionTypes.UPDATE_APPOINTMENT_FAIL:
        draft.updateAppointment = false
        draft.updateAppointmentError = { status: action.error.status }
        break
      default:
        break
    }
  })
}

export default reducer
