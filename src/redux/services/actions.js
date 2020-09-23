import servicesClient from "Services/servicesService";

const REDUCER = "services";
export const ACTION_TYPES = {
  GET_SERVICES: `${REDUCER}/GET_SERVICES`,
  GET_SERVICES_SUCCESS: `${REDUCER}/GET_SERVICES_SUCCESS`,
  GET_SERVICES_FAIL: `${REDUCER}/GET_SERVICES_FAIL`,  
  GET_SERVICE: `${REDUCER}/GET_SERVICE`,
  GET_SERVICE_SUCCESS: `${REDUCER}/GET_SERVICE_SUCCESS`,
  GET_SERVICE_FAIL: `${REDUCER}/GET_SERVICE_FAIL`,
  GET_SERVICE_LISTING: `${REDUCER}/GET_SERVICE_LISTING`,
  GET_SERVICE_LISTING_SUCCESS: `${REDUCER}/GET_SERVICE_LISTING_SUCCESS`,
  GET_SERVICE_LISTING_FAIL: `${REDUCER}/GET_SERVICE_LISTING_FAIL`
};

const getServicesListing = dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SERVICES
  });
  servicesClient
    .getServices()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_SERVICES_SUCCESS,
          payload: res.data
        });
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_SERVICES_FAIL,
        error: "Error getting services"
      });
    });
}

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

export { getServicesListing, getService };

export { getService, getServicesListing };
