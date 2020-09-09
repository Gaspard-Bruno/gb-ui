import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  clients: [],
  clientLoading: false,
  clientLoaded: false,
  clientError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CLIENTS:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_CLIENTS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload.data.map((d) => d.id),
        loading: false,
        loaded: true
      };

    case ACTION_TYPES.GET_CLIENT:
        return {
            ...state,
            clientLoading: true
        }
    case ACTION_TYPES.GET_CLIENT_SUCCESS:
        // console.log("ACTION ~~~~~~~~~~~~", action)
        // console.log("STATE ~~~~~~~~~~~~~", state)
        // let fetchedProvider = state.providers.find(providerId => providerId === action.payload.data.id)
        // console.log("testetststest", state)

        return {
          ...state,
          clientLoading: false,
          clientError: false,
          clientLoaded: true
        }
    case ACTION_TYPES.GET_CLIENT_FAIL:
        return {
            ...state,
            clientError: action.error,
            clientLoading: false,
            clientLoaded: true
        }

    default:
      return state;
  }
};
