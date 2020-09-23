import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/clients";

const useClients = (clientId, shouldFetch) => {
  const dispatch = useDispatch();
  const { getClientsListing } = actions;

  const { 
    getClients, 
    getLoading, 
    getError, 
    getLoaded 
  } = selectors;


  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state));
  const loaded = useSelector(state => getLoaded(state));

  const clients = useSelector(state => getClients(state));
  const client = useMemo(() => clients?.[clientId]?.attributes, [
    clients,
    clientId
  ]);

  useEffect(() => {
    if (!loaded && shouldFetch) {
      getClientsListing(dispatch);
    }
  }, [loaded, shouldFetch]);

  return {
    clients,
    client,
    error,
    loaded,
    loading
  };
};

export default useClients;
