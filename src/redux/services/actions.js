import servicesClient from "Services/servicesService";

const REDUCER = "services";
export const ACTION_TYPES = {
  GET_SERVICE: `${REDUCER}/GET_SERVICE`,
  GET_SERVICE_SUCCESS: `${REDUCER}/GET_SERVICE_SUCCESS`,
  GET_SERVICE_FAIL: `${REDUCER}/GET_SERVICE_FAIL`,
  GET_SERVICE_LISTING: `${REDUCER}/GET_SERVICE_LISTING`,
  GET_SERVICE_LISTING_SUCCESS: `${REDUCER}/GET_SERVICE_LISTING_SUCCESS`,
  GET_SERVICE_LISTING_FAIL: `${REDUCER}/GET_SERVICE_LISTING_FAIL`
};

const getService = (id, dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_SERVICE
  });

  servicesClient
    .getService(id)
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_SERVICE_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_SERVICE_FAIL,
        clientError: "Error getching service"
      });
    });
};

const getServicesListing = dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SERVICE_LISTING
  });
  servicesClient
    .getServices()
    .then(res => {
      if (res && res.data) {
        console.log(res.data, "DATA INCOMING");
        dispatch({
          type: ACTION_TYPES.GET_SERVICE_LISTING_SUCCESS,
          payload: res.data.data
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_SERVICE_LISTING_FAIL,
        error: "Error getting clients "
      });
    });
};

export { getService, getServicesListing };
