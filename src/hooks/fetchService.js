import { useState, useEffect, useCallback, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { actions as servicesActions, selectors as servicesSelectors } from 'redux/services'

const useFetchService = (fetchId) => {
  const [serviceId, setServiceId] = useState(fetchId || null)

  const dispatch = useDispatch()
  // const { getService } = servicesActions;
  const { getServiceLoading, getServiceError, getServiceLoaded }  = servicesSelectors;

  const error = useSelector(state => getServiceError(state));
  const loading = useSelector(state => getServiceLoading(state), shallowEqual);
  const loaded = useSelector(state => getServiceLoaded(state), shallowEqual);  
  
  // const dispatchGetService = useCallback((serviceId) => {
  //     getService(serviceId, dispatch);
  // }, [dispatch, getService])

  const makeService = useMemo(servicesSelectors.makeGetService, [])
  const service = useSelector((state) => makeService(state, serviceId))
  
  // console.log("prov", fetchId, service)

  // useEffect(() => {
  //     if (!service) {
  //       dispatchGetService(serviceId)
  //     }
  // }, [service])

  return {
      service,
      error,
      loading
    }
}

export default useFetchService
