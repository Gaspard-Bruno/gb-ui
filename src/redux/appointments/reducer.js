import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  appointments: []
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
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
