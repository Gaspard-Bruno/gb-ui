import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  services: [],
  error: null,
  serviceLoading: false,
  serviceLoaded: false,
  serviceError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_SERVICE:
      return {
        ...state,
        serviceLoading: true
      };
    case ACTION_TYPES.GET_SERVICE_SUCCESS:
      return {
        ...state,
        serviceLoading: false,
        serviceError: false,
        serviceLoaded: true
      };
    case ACTION_TYPES.GET_SERVICE_FAIL:
      return {
        ...state,
        serviceError: action.error,
        serviceLoading: false,
        serviceLoaded: true
      };
    case ACTION_TYPES.GET_SERVICE_LISTING:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_SERVICE_LISTING_SUCCESS:
      return {
        ...state,
        services: action.payload,
        loading: false,
        error: false,
        loaded: true
      };
    case ACTION_TYPES.GET_SERVICE_LISTING_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
};
