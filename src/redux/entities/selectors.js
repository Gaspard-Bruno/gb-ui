import { createSelector } from 'reselect'

const selectAppointmentsState = state => state.appointments;

const getAppointmentsEntities = createSelector(selectAppointmentsState, state => {
    return state.entities.appointments || [];
  });