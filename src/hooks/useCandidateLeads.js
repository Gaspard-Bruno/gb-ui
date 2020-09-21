import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { actions, selectors } from "Redux/candidateLeads";

const useCandidateLeads = () => {
  const dispatch = useDispatch();
  const { getCandidateLeadsListing } = actions;
  const { getCandidateLeads, getLoading, getError, getLoaded } = selectors;

  const candidateLeads = useSelector(
    state => getCandidateLeads(state),
    shallowEqual
  );

  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchGetCandidateLeadsListing = useCallback(() => {
    getCandidateLeadsListing(dispatch);
  }, [dispatch, getCandidateLeadsListing]);

  useEffect(() => {
    if (!loaded) {
      dispatchGetCandidateLeadsListing();
    }
  }, [dispatchGetCandidateLeadsListing, loaded]);

  return {
    candidateLeads,
    error,
    loading
  };
};

export default useCandidateLeads;
