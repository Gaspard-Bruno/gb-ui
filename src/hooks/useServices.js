import { useMemo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import {
  selectors as servicesSelectors,
  actions as servicesActions
} from "redux/services";

const useServices = serviceId => {
  const dispatch = useDispatch();
  const { getServicesListing } = servicesActions;
  const {
    getServiceLoading,
    getServiceError,
    getServices,
    getServiceLoaded
  } = servicesSelectors;

  const services = useSelector(state => getServices(state));
  const error = useSelector(state => getServiceError(state));
  const loading = useSelector(state => getServiceLoading(state), shallowEqual);
  const loaded = useSelector(state => getServiceLoaded(state), shallowEqual);

  const service = useMemo(() => services?.[serviceId]?.attributes, [
    services,
    serviceId
  ]);

  useEffect(() => {
    if (!loaded && !loading) {
      getServicesListing(dispatch);
    }
  }, [dispatch, getServices, getServicesListing, loaded, loading]);

  // const dispatchGetService = useCallback((serviceId) => {
  //     getService(serviceId, dispatch);
  // }, [dispatch, getService])

  // console.log("prov", fetchId, service)

  // useEffect(() => {
  //     if (!service) {
  //       dispatchGetService(serviceId)
  //     }
  // }, [service])

  return {
    service,
    services,
    loaded,
    error,
    loading
  };
};

export default useServices;
