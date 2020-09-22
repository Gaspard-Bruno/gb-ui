import { createSelector } from "reselect";

import { getAppointmentsEntities } from 'redux/entities/selectors'

const selectAppointmentsState = state => state.appointments;

const getAppointments = createSelector(
  state => selectAppointmentsState(state).appointments || [],
  state => getAppointmentsEntities(state) || {},
  (ids, appointments) => ids.map((id) => appointments[id])
);
const getLoading = createSelector(selectAppointmentsState, state => {
  return state.loading || false;
});
const getLoaded = createSelector(selectAppointmentsState, state => {
  return state.loaded || false;
});
const getError = createSelector(selectAppointmentsState, state => {
  return state.error || null;
});
const getAppointmentsTotalCount = createSelector(selectAppointmentsState, state => {
  return state.appointmentsTotalCount || null;
});
const getAppointmentsTotalPages = createSelector(selectAppointmentsState, state => {
  return state.appointmentsTotalPages || null;
});
const getAppointmentsCurrentPage = createSelector(selectAppointmentsState, state => {
  return state.appointmentsCurrentPage || null;
});

// UPDATE
const getUpdateAppointmentLoading = createSelector(selectAppointmentsState, state => {
  return state.updateAppointmentLoading || null;
})
const getUpdateAppointmentError = createSelector(selectAppointmentsState, state => {
  return state.updateAppointmentError || null;
})

export { 
  getAppointments, 
  getLoading, 
  getError, 
  getLoaded,
  getAppointmentsTotalCount,
  getAppointmentsTotalPages,
  getAppointmentsCurrentPage,
  getUpdateAppointmentLoading,
  getUpdateAppointmentError
 };
