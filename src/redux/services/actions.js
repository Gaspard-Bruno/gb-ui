import servicesClient from "Services/servicesService";

const REDUCER = "services";
export const ACTION_TYPES = {
    GET_SERVICE: `${REDUCER}/GET_SERVICE`,
    GET_SERVICE_SUCCESS: `${REDUCER}/GET_SERVICE_SUCCESS`,
    GET_SERVICE_FAIL: `${REDUCER}/GET_SERVICE_FAIL`
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
                })
            }
        })
        .catch(e => {
            console.log("log errrror", e)
            dispatch({
                type: ACTION_TYPES.GET_SERVICE_FAIL,
                clientError: "Error getching service"
            })
        })
}

export { getService };
