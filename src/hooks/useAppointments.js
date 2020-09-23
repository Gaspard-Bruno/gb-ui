import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/appointments";

const useAppointments = pageNumber => {
  const dispatch = useDispatch();
  const { getAppointmentsListing } = actions;
  const { getAppointments, getLoading, getError, getLoaded } = selectors;

  const appointments = useSelector(
    state => getAppointments(state),
    shallowEqual
  );

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchGetAppointmentsListing = useCallback(
    pageNumber => {
      getAppointmentsListing(dispatch, pageNumber);
    },
    [dispatch, getAppointmentsListing]
  );

  useEffect(() => {
    if (!loaded && pageNumber) {
      dispatchGetAppointmentsListing(pageNumber);
    }
  }, [dispatchGetAppointmentsListing, loaded, pageNumber]);

  return {
    appointments,
    error,
    loading
  };
};

export default useAppointments;
