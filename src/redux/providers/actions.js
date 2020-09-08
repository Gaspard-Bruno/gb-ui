import providersClient from "Services/providersService";

const REDUCER = "providers";
export const ACTION_TYPES = {
    GET_PROVIDERS: `${REDUCER}/GET_PROVIDERS`,
    GET_PROVIDERS_SUCCESS: `${REDUCER}/GET_PROVIDERS_SUCCESS`,
    GET_PROVIDERS_FAIL: `${REDUCER}/GET_PROVIDERS_FAIL`,
    GET_PROVIDER: `${REDUCER}/GET_PROVIDER`,
    GET_PROVIDER_SUCCESS: `${REDUCER}/GET_PROVIDER_SUCCESS`,
    GET_PROVIDER_FAIL: `${REDUCER}/GET_PROVIDER_FAIL`,
    UPDATE_PROVIDER: `${REDUCER}/UPDATE_PROVIDER`,
    UPDATE_PROVIDER_SUCCESS: `${REDUCER}/UPDATE_PROVIDER_SUCCESS`,
    UPDATE_PROVIDER_FAIL: `${REDUCER}/UPDATE_PROVIDER_FAIL`,
};

const getProvidersListing = dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_PROVIDERS
  });
  providersClient
    .getProviders()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_PROVIDERS_SUCCESS,
          payload: res.data
        });
        console.log("great success in action");
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_PROVIDERS_FAIL,
        error: "Error getting providers "
      });
    });
};

const getProvider = (id, dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_PROVIDER
    });

    providersClient
        .getProvider(id)
        .then(res => {
            if (res && res.data) {
                dispatch({
                    type: ACTION_TYPES.GET_PROVIDER_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch(e => {
            console.log("log errrror", e)
            dispatch({
                type: ACTION_TYPES.GET_PROVIDER_FAIL,
                providerError: "Error getching provider"
            })
        })
}

export { getProvidersListing, getProvider };
