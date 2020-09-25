import { useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/appointments";

const useAppointments = (pageNumber = 1, filters = {}, type = 'request') => {
  const dispatch = useDispatch();
  const { getAppointmentsListing, updateAppointment } = actions;
  const { getAppointments, getLoading, getError, getLoaded } = selectors;
  const { 
    getAppointments, 
    getArchivedAppointments, 
    getRequestAppointments, 
    getLoading, 
    getError, 
    getLoaded,
    getRequestLoaded,
    getArchiveLoaded
  } = selectors;


  // const appointments = useSelector(
  //   state => getAppointments(state),
  //   shallowEqual
  // );

  const archivedAppointments = useSelector(
    state => getArchivedAppointments(state),
    shallowEqual
  )

  const requestAppointments = useSelector(
    state => getRequestAppointments(state),
    shallowEqual
  )

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const requestLoaded = useSelector(state => getRequestLoaded(state), shallowEqual);
  const archiveLoaded = useSelector(state => getArchiveLoaded(state), shallowEqual);

  const loaded = useMemo(
    () => type === 'request' ?
      requestLoaded
      :
      archiveLoaded, [type, requestLoaded, archiveLoaded])

  const dispatchGetAppointmentsListing = useCallback((pageNumber, filters) => {
      getAppointmentsListing(dispatch, pageNumber, filters);
    },
    [dispatch, getAppointmentsListing]
  );

  useEffect(() => {
    if (!loaded) {
      dispatchGetAppointmentsListing(pageNumber, filters);
    }
  }, [dispatchGetAppointmentsListing, loaded, pageNumber]);

  const dispatchUpdateAppointment = useCallback(
    (newStatus, id) => {
      updateAppointment(dispatch, newStatus, id);
    },
    [dispatch, updateAppointment]
  );
  return {
    // appointments,
    archivedAppointments,
    requestAppointments,
    updateAppointment: dispatchUpdateAppointment,
    getPageAppointments: dispatchGetAppointmentsListing,
    error,
    loading
  };
};

export default useAppointments;
