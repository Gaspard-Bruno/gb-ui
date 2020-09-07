import { createSelector } from "reselect";

const selectAppointmentsState = state => state.appointments;

const getAppointments = createSelector(selectAppointmentsState, state => {
  return state.appointments || [];
});
const getLoading = createSelector(selectAppointmentsState, state => {
  return state.loading || false;
});
const getLoaded = createSelector(selectAppointmentsState, state => {
  return state.loaded || false;
});
const getError = createSelector(selectAppointmentsState, state => {
  return state.error || null;
});

export { getAppointments, getLoading, getError, getLoaded };
