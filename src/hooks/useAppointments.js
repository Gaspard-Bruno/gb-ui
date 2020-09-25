import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/appointments";

const useAppointments = (pageNumber = 1, filters = "appointments") => {
  const dispatch = useDispatch();
  const { getAppointmentsListing, updateAppointment } = actions;
  const { getAppointments, getLoading, getError, getLoaded } = selectors;
  console.log(filters);
  const appointments = useSelector(state => getAppointments(state, filters));

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);

  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchUpdateAppointment = useCallback(
    (newStatus, id) => {
      updateAppointment(dispatch, newStatus, id);
    },
    [dispatch, updateAppointment]
  );

  const dispatchGetAppointmentsListing = useCallback(
    (pageNumber, filters) => {
      getAppointmentsListing(dispatch, pageNumber, filters);
    },
    [dispatch, getAppointmentsListing]
  );

  useEffect(() => {
    if ((!loaded && !loading) || (filters && !appointments.length)) {
      dispatchGetAppointmentsListing(pageNumber, filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    appointments,
    updateAppointment: dispatchUpdateAppointment,
    getPageAppointments: dispatchGetAppointmentsListing,
    error,
    loading
  };
};

export default useAppointments;
