import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/appointments";

const useAppointments = () => {
  const dispatch = useDispatch();
  const { getAppointmentsListing } = actions;
  const { getAppointments, getLoading, getError, getLoaded } = selectors;

  const appointments = useSelector(
    state => getAppointments(state)?.data || [],
    shallowEqual
  );

  console.log("+++++++", appointments)

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchGetAppointmentsListing = useCallback(() => {
    getAppointmentsListing(dispatch);
  }, [dispatch, getAppointmentsListing]);

  useEffect(() => {
    if (!loaded) {
      dispatchGetAppointmentsListing();
    }
  }, [dispatchGetAppointmentsListing, loaded]);

  return {
    appointments,
    error,
    loading
  };
};

export default useAppointments;
