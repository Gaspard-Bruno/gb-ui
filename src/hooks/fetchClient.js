import { useState, useEffect, useCallback, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { actions as clientsActions, selectors as clientsSelectors } from 'redux/clients'

const useFetchClient = (fetchId) => {
  const [clientId, setClientId] = useState(fetchId || null)

  const dispatch = useDispatch()
  // const { getClient } = clientsActions;
  const { getClientLoading, getClientError, getClientLoaded }  = clientsSelectors;

  const error = useSelector(state => getClientError(state));
  const loading = useSelector(state => getClientLoading(state), shallowEqual);
  const loaded = useSelector(state => getClientLoaded(state), shallowEqual);  
  
  // const dispatchGetClient = useCallback((clientId) => {
  //     getClient(clientId, dispatch);
  // }, [dispatch, getClient])

  const makeClient = useMemo(clientsSelectors.makeGetClient, [])
  const fetchedClient = useSelector((state) => makeClient(state, clientId))
  
  // console.log("prov", fetchId, fetchedClient)

  // useEffect(() => {
  //     if (!fetchedClient) {
  //       dispatchGetClient(clientId)
  //     }
  // }, [fetchedClient])

  return {
      fetchedClient,
      error,
      loading
    }
}

export default useFetchClient
