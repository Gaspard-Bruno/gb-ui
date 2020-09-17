import { ACTION_TYPES } from "./actions";

const initialState = {
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
        }
    case ACTION_TYPES.GET_SERVICE_SUCCESS:
        // console.log("ACTION ~~~~~~~~~~~~", action)
        // console.log("STATE ~~~~~~~~~~~~~", state)
        // let fetchedProvider = state.providers.find(providerId => providerId === action.payload.data.id)
        // console.log("testetststest", state)

        return {
          ...state,
          serviceLoading: false,
          serviceError: false,
          serviceLoaded: true
        }
    case ACTION_TYPES.GET_SERVICE_FAIL:
        return {
            ...state,
            serviceError: action.error,
            serviceLoading: false,
            serviceLoaded: true
        }

    default:
      return state;
  }
};
