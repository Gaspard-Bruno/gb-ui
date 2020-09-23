import { useEffect, useMemo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/providers";

const useProviders = (providerId, shouldFetch) => {
  const dispatch = useDispatch();
  const { getProvidersListing } = actions;

  const { 
    getProviders, 
    getLoading, 
    getError, 
    getLoaded
  } = selectors;

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state));
  const loaded = useSelector(state => getLoaded(state));

  const providers = useSelector(state => getProviders(state), shallowEqual);
  const provider = useMemo(() => providers?.[providerId]?.attributes, [
    providers,
    providerId
  ]);

  useEffect(() => {
    if (!loaded && !loading) {
      getProvidersListing(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, shouldFetch]);

  return {
    providers,
    provider,
    error,
    loaded,
    loading
  };
};

export default useProviders;
