import authClient from "Services/authClient";

const REDUCER = "auth";
export const ACTION_TYPES = {
  LOGIN_USER: `${REDUCER}/LOGIN_USER`,
  LOGIN_USER_FAIL: `${REDUCER}/LOGIN_USER_FAIL`,
  LOGIN_USER_SUCCESS: `${REDUCER}/LOGIN_USER_SUCCESS`
};

const getServicesListing = (dispatch, { email, password }) => {
  dispatch({
    type: ACTION_TYPES.LOGIN_USER
  });
  authClient
    .loginUser({ email, password })
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.LOGIN_USER_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.LOGIN_USER_FAIL,
        error: "Error getting logging in"
      });
    });
};

export { getServicesListing };
