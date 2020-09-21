import { useCallback, useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/providers";

const useProviders = providerId => {
  const dispatch = useDispatch();
  const { getProvidersListing } = actions;
  const { getProviders, getLoading, getError, getLoaded } = selectors;

  const providers = useSelector(state => getProviders(state), shallowEqual);

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchGetProvidersListing = useCallback(() => {
    getProvidersListing(dispatch);
  }, [dispatch, getProvidersListing]);

  const provider = useMemo(() => providers?.[providerId]?.attributes, [
    providers,
    providerId
  ]);

  useEffect(() => {
    if (!loaded) {
      dispatchGetProvidersListing();
    }
  }, [dispatchGetProvidersListing, loaded]);

  return {
    providers,
    provider,
    error,
    loading
  };
};

export default useProviders;
