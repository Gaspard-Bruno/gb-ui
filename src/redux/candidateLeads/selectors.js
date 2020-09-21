import { createSelector } from "reselect";

import { getCandidateLeadsEntities } from 'redux/entities/selectors'

const selectCandidateLeadsState = state => state.candidateLeads;

const getCandidateLeads = createSelector(
  state => selectCandidateLeadsState(state).candidateLeads || [],
  state => getCandidateLeadsEntities(state) || {},
  (ids, candidateLeads) => ids.map((id) => candidateLeads[id])
);
const getLoading = createSelector(selectCandidateLeadsState, state => {
  return state.loading || false;
});
const getLoaded = createSelector(selectCandidateLeadsState, state => {
  return state.loaded || false;
});
const getError = createSelector(selectCandidateLeadsState, state => {
  return state.error || null;
});

export const makeGetCandidateLead = () => (
    createSelector(
        getCandidateLeadsEntities,
        (_, candidateLeadId) => candidateLeadId,
        (entities, id) => entities[id]
    )
)
export const getCandidateLeadLoading = createSelector(selectCandidateLeadsState, state => {
  return state.candidateLeadLoading || false;
});
export const getCandidateLeadLoaded = createSelector(selectCandidateLeadsState, state => {
  return state.candidateLeadLoaded || false;
});
export const getCandidateLeadError = createSelector(selectCandidateLeadsState, state => {
  return state.candidateLeadError || null;
});

export { getCandidateLeads, getLoading, getError, getLoaded };
