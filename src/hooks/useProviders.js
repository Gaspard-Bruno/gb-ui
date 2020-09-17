import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/providers";

const useProviders = () => {
  const dispatch = useDispatch();
  const { getProvidersListing } = actions;
  const { getProviders, getLoading, getError, getLoaded } = selectors;

  const providers = useSelector(
    state => getProviders(state),
    shallowEqual
  );

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchGetProvidersListing = useCallback(() => {
    getProvidersListing(dispatch);
  }, [dispatch, getProvidersListing]);

  useEffect(() => {
    if (!loaded) {
      dispatchGetProvidersListing();
    }
  }, [dispatchGetProvidersListing, loaded]);

  return {
    providers,
    error,
    loading
  };
};

export default useProviders;
