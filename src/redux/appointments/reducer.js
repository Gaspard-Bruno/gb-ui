import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  // loaded: false,
  error: false,
  // appointments: [],
  requestAppointments: [],
  requestLoaded: false,
  archiveLoaded: false,
  archivedAppointments: [],
  appointmentsTotalCount: null,
  appointmentsTotalPages: null,
  appointmentsCurrentPage: null,
  updateAppointmentLoading: null,
  updateAppointmentError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_APPOINTMENTS:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_APPOINTMENTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_APPOINTMENTS_SUCCESS:
      console.log("in reducer")
      console.log(action)
      if (action.payload.meta) {
        return {
          ...state,
          archivedAppointments: action.payload.data.map((d) => d.id),
          appointmentsTotalCount: parseInt(action.payload.meta['Total-Count']),
          appointmentsTotalPages: parseInt(action.payload.meta['Total-Pages']),
          appointmentsCurrentPage: parseInt(action.payload.meta['Current-Page']),
          loading: false,
          loaded: true
        };  
      } else {
        return {
          ...state,
          requestAppointments: action.payload.data.map((d) => d.id),
          loading: false,
          loaded: true          
        }
      }


    // UPDATE
    case ACTION_TYPES.UPDATE_APPOINTMENT:
        return {
          ...state,
          updateAppointmentLoading: true,
        };
    case ACTION_TYPES.UPDATE_APPOINTMENT_SUCCESS:
        return {
          ...state,
          updateAppointmentLoading: false,
          updateAppointmentError: false
        };
    case ACTION_TYPES.UPDATE_APPOINTMENT_FAIL:
        return {
          ...state,
          updateAppointmentError: true,
          updateAppointmentLoading: false
        };        

    default:
      return state;
  }
};
