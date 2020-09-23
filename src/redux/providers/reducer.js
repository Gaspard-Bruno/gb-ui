import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  providers: [],
  providerLoading: false,
  providerLoaded: false,
  providerError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PROVIDERS:
      console.log("action triggered", action);
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_PROVIDERS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: action.payload.data.map(d => d.id),
        loading: false,
        loaded: true
      };

    case ACTION_TYPES.GET_PROVIDER:
      return {
        ...state,
        providerLoading: true
      };
    case ACTION_TYPES.GET_PROVIDER_SUCCESS:
      // console.log("ACTION ~~~~~~~~~~~~", action)
      // console.log("STATE ~~~~~~~~~~~~~", state)
      // let fetchedProvider = state.providers.find(providerId => providerId === action.payload.data.id)
      // console.log("testetststest", state)

      return {
        ...state,
        providerLoading: false,
        providerError: false,
        providerLoaded: true
      };
    case ACTION_TYPES.GET_PROVIDER_FAIL:
      return {
        ...state,
        providerError: action.error,
        providerLoading: false,
        providerLoaded: true
      };

    default:
      return state;
  }
};
