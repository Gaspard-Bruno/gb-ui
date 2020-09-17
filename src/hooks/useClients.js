import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/clients";

const useClients = () => {
  const dispatch = useDispatch();
  const { getClientsListing } = actions;
  const { getClients, getLoading, getError, getLoaded } = selectors;

  const clients = useSelector(
    state => getClients(state),
    shallowEqual
  );

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

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
    error,
    loading
  };
};

export default useClients;
