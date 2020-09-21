import { useMemo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { selectors as servicesSelectors } from "redux/services";

const useServices = serviceId => {
  // const dispatch = useDispatch();
  // const { getService } = servicesActions;
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
    loaded,
    error,
    loading
  };
};

export default useServices;
