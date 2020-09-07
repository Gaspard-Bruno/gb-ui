import { createSelector } from 'reselect'

import { getAppointmentsEntities } from '../entities/selectors'

export const getAppointments = createSelector(
  (state) => state.appointments.appointments,
  getAppointmentsEntities,
  (appointments, entities) => appointments.map((o) => entities[o])
)

export const makeGetAppointment = () => (
  createSelector(
    getAppointmentsEntities,
    (_, appointmentId) => appointmentId,
    (entities, id) => entities[id]
  )
)

export const getCreateAppointmentLoading = createSelector([
    (state) => state.appointments.createAppointmentLoading
],
    (loading) => loading
)

export const getCreateAppointmentError = createSelector([
    (state) => state.appointments.createAppointmentError
],
    (error) => error
)

export const getUpdateAppointmentLoading = createSelector([
    (state) => state.appointments.updateAppointmentLoading
],
    (loading) => loading
)
  
export const getUpdateAppointmentError = createSelector([
    (state) => state.appointments.updateAppointmentError
],
    (error) => error
)
  
  