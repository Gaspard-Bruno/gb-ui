import adminClient from "Services/adminService";

const REDUCER = "admins";
export const ACTION_TYPES = {
  GET_ADMIN: `${REDUCER}/GET_ADMIN`,
  GET_ADMIN_SUCCESS: `${REDUCER}/GET_ADMIN_SUCCESS`,
  GET_ADMIN_FAIL: `${REDUCER}/GET_ADMIN_FAIL`
};

const getAdmin = (id, dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_ADMIN
  });
  adminClient
    .getAdmin(id)
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_ADMIN_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_ADMIN_FAIL,
        error: "Error getting admin "
      });
    });
};

export { getAdmin };
