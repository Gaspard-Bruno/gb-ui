import { ACTION_TYPES } from "./actions";

const initialState = {
  adminLoading: false,
  adminLoaded: false,
  adminError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ADMIN:
        return {
            ...state,
            adminLoading: true
        }
    case ACTION_TYPES.GET_ADMIN_SUCCESS:

        return {
          ...state,
          adminLoading: false,
          adminError: false,
          adminLoaded: true
        }
    case ACTION_TYPES.GET_ADMIN_FAIL:
        return {
            ...state,
            adminError: action.error,
            adminLoading: false,
            adminLoaded: true
        }

    default:
      return state;
  }
};
