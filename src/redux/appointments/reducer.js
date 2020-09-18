import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  appointments: [],
  appointmentsTotalCount: null,
  appointmentsTotalPages: null,
  appointmentsCurrentPage: null,
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
      return {
        ...state,
        appointments: action.payload.data.map((d) => d.id),
        appointmentsTotalCount: parseInt(action.payload.meta['Total-Count']),
        appointmentsTotalPages: parseInt(action.payload.meta['Total-Pages']),
        appointmentsCurrentPage: parseInt(action.payload.meta['Current-Page']),
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
