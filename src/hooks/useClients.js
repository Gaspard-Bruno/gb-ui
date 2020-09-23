import { useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/clients";

const useClients = clientId => {
  const dispatch = useDispatch();
  const { getClientsListing } = actions;
  const { getClients, getLoading, getError, getLoaded } = selectors;

  const clients = useSelector(state => getClients(state), shallowEqual);

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const client = useMemo(() => clients?.[clientId]?.attributes, [
    clients,
    clientId
  ]);

  const dispatchGetClientsListing = useCallback(() => {
    getClientsListing(dispatch);
  }, [dispatch, getClientsListing]);

  useEffect(() => {
    if (!loaded) {
      dispatchGetClientsListing();
    }
  }, [dispatchGetClientsListing, loaded]);

  return {
    clients,
    client,
    error,
    loading
  };
};

export default useClients;
