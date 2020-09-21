import { ACTION_TYPES } from "./actions";

const initialState = {
  loading: false,
  loaded: false,
  error: false,
  candidateLeads: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CANDIDATE_LEADS:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.GET_CANDIDATE_LEADS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.GET_CANDIDATE_LEADS_SUCCESS:
      return {
        ...state,
        candidateLeads: action.payload.data.map((d) => d.id),
        loading: false,
        loaded: true
      };

    default:
      return state;
  }
};
