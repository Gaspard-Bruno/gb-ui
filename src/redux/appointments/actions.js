import appointmentsClient from "Services/appointmentsService";

const REDUCER = "appointments";
export const ACTION_TYPES = {
    GET_APPOINTMENTS: `${REDUCER}/GET_APPOINTMENTS`,
    GET_APPOINTMENTS_SUCCESS: `${REDUCER}/GET_APPOINTMENTS_SUCCESS`,
    GET_APPOINTMENTS_FAIL: `${REDUCER}/GET_APPOINTMENTS_FAIL`,
    GET_APPOINTMENT: `${REDUCER}/GET_APPOINTMENT`,
    GET_APPOINTMENT_SUCCESS: `${REDUCER}/GET_APPOINTMENT_SUCCESS`,
    GET_APPOINTMENT_FAIL: `${REDUCER}/GET_APPOINTMENT_FAIL`,
    CREATE_APPOINTMENT: `${REDUCER}/CREATE_APPOINTMENT`,
    CREATE_APPOINTMENT_SUCCESS: `${REDUCER}/CREATE_APPOINTMENT_SUCCESS`,
    CREATE_APPOINTMENT_FAIL: `${REDUCER}/CREATE_APPOINTMENT_FAIL`,
    UPDATE_APPOINTMENT: `${REDUCER}/UPDATE_APPOINTMENT`,
    UPDATE_APPOINTMENT_SUCCESS: `${REDUCER}/UPDATE_APPOINTMENT_SUCCESS`,
    UPDATE_APPOINTMENT_FAIL: `${REDUCER}/UPDATE_APPOINTMENT_FAIL`,
};

const getAppointmentsListing = (dispatch, pageNumber) => {
  dispatch({
    type: ACTION_TYPES.GET_APPOINTMENTS
  });

  appointmentsClient
    .getAppointments(pageNumber)
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_APPOINTMENTS_SUCCESS,
          payload: res.data
        });
        console.log("great success in action");
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_APPOINTMENTS_FAIL,
        error: "Error getting appointments "
      });
    });
};

export { getAppointmentsListing };
