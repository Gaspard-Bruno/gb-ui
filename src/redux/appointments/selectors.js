import { createSelector } from "reselect";

import { getAppointmentsEntities } from "redux/entities/selectors";

const selectAppointmentsState = state => state.appointments;

const getAppointments = createSelector(
  (state, { filter, pageNumber }) =>
    (!console.log(filter, pageNumber, " Filter page no") &&
      selectAppointmentsState(state)[
        (filter === "appointments" && filter) ||
          `${JSON.stringify(filter)}-${pageNumber}`
      ]) ||
    [],
  state => getAppointmentsEntities(state) || {},
  (ids, appointments) => ids.map(id => appointments[id])
);

const getLoading = createSelector(selectAppointmentsState, state => {
  return state.loading || false;
});

const getLoaded = createSelector(selectAppointmentsState, state => {
  return state.loaded || false;
});
const getRequestLoaded = createSelector(selectAppointmentsState, state => {
  return state.requestLoaded || false;
});
const getArchiveLoaded = createSelector(selectAppointmentsState, state => {
  return state.archiveLoaded || false;
});

const getError = createSelector(selectAppointmentsState, state => {
  return state.error || null;
});

const getAppointmentsTotalCount = createSelector(
  selectAppointmentsState,
  state => {
    return state.appointmentsTotalCount || null;
  }
);
const getAppointmentsTotalPages = createSelector(
  selectAppointmentsState,
  state => {
    return state.appointmentsTotalPages || null;
  }
);
const getAppointmentsCurrentPage = createSelector(
  selectAppointmentsState,
  state => {
    return state.appointmentsCurrentPage || null;
  }
);

// UPDATE
const getUpdateAppointmentLoading = createSelector(
  selectAppointmentsState,
  state => {
    return state.updateAppointmentLoading || null;
  }
);
const getUpdateAppointmentError = createSelector(
  selectAppointmentsState,
  state => {
    return state.updateAppointmentError || null;
  }
);

export {
  getAppointments,
  getLoading,
  getError,
  getLoaded,
  getRequestLoaded,
  getArchiveLoaded,
  getAppointmentsTotalCount,
  getAppointmentsTotalPages,
  getAppointmentsCurrentPage,
  getUpdateAppointmentLoading,
  getUpdateAppointmentError
};
