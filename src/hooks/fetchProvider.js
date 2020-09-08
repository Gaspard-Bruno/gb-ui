import { useState, useEffect, useCallback, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { actions as providersActions, selectors as providersSelectors } from 'redux/providers'

const useFetchProvider = (fetchId) => {
  const [providerId, setProviderId] = useState(fetchId || null)

  const dispatch = useDispatch()
  const { getProvider } = providersActions;
  const { getProviderLoading, getProviderError, getProviderLoaded }  = providersSelectors;

  const error = useSelector(state => getProviderError(state));
  const loading = useSelector(state => getProviderLoading(state), shallowEqual);
  const loaded = useSelector(state => getProviderLoaded(state), shallowEqual);  
  
  const dispatchGetProvider = useCallback((providerId) => {
      getProvider(providerId, dispatch);
  }, [dispatch, getProvider])

  const makeProvider = useMemo(providersSelectors.makeGetProvider, [])
  const provider = useSelector((state) => makeProvider(state, providerId))
  console.log("prov", fetchId, provider)

  useEffect(() => {
      if (!loaded) {
        dispatchGetProvider(providerId)
      }
  }, [dispatchGetProvider, loaded])

  return {
      provider,
      error,
      loading
    }
}

export default useFetchProvider
