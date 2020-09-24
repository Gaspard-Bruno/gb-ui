import { ACTION_TYPES } from "./actions";

import useStorage from "Hooks/useStorage";

const { user } = useStorage();
const initialState = {
  loading: false,
  loaded: false,
  error: false,
  user
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER:
      return {
        ...state,
        loading: true
      };
    case ACTION_TYPES.LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: true
      };
    case ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
