import clientsClient from "Services/clientsService";

const REDUCER = "clients";
export const ACTION_TYPES = {
    GET_CLIENTS: `${REDUCER}/GET_CLIENTS`,
    GET_CLIENTS_SUCCESS: `${REDUCER}/GET_CLIENTS_SUCCESS`,
    GET_CLIENTS_FAIL: `${REDUCER}/GET_CLIENTS_FAIL`,
    GET_CLIENT: `${REDUCER}/GET_CLIENT`,
    GET_CLIENT_SUCCESS: `${REDUCER}/GET_CLIENT_SUCCESS`,
    GET_CLIENT_FAIL: `${REDUCER}/GET_CLIENT_FAIL`
};

const getClientsListing = dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_CLIENTS
  });
  clientsClient
    .getClients()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_CLIENTS_SUCCESS,
          payload: res.data
        });
        console.log("great success in action");
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_CLIENTS_FAIL,
        error: "Error getting clients "
      });
    });
};

const getClient = (id, dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_CLIENT
    });

    clientsClient
        .getClient(id)
        .then(res => {
            if (res && res.data) {
                dispatch({
                    type: ACTION_TYPES.GET_CLIENT_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch(e => {
            console.log("log errrror", e)
            dispatch({
                type: ACTION_TYPES.GET_CLIENT_FAIL,
                clientError: "Error getching client"
            })
        })
}

export { getClientsListing, getClient };
