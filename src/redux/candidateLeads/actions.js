import candidateLeadsClient from "Services/candidateLeadsService";

const REDUCER = "candidateLeads";
export const ACTION_TYPES = {
    GET_CANDIDATE_LEADS: `${REDUCER}/GET_CANDIDATE_LEADS`,
    GET_CANDIDATE_LEADS_SUCCESS: `${REDUCER}/GET_CANDIDATE_LEADS_SUCCESS`,
    GET_CANDIDATE_LEADS_FAIL: `${REDUCER}/GET_CANDIDATE_LEADS_FAIL`,
    GET_CANDIDATE_LEAD: `${REDUCER}/GET_CANDIDATE_LEAD`,
    GET_CANDIDATE_LEAD_SUCCESS: `${REDUCER}/GET_CANDIDATE_LEAD_SUCCESS`,
    GET_CANDIDATE_LEAD_FAIL: `${REDUCER}/GET_CANDIDATE_LEAD_FAIL`
};

const getCandidateLeadsListing = dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_CANDIDATE_LEADS
  });
  candidateLeadsClient
    .getCandidateLeads()
    .then(res => {
      if (res && res.data) {
        dispatch({
          type: ACTION_TYPES.GET_CANDIDATE_LEADS_SUCCESS,
          payload: res.data
        });
        console.log("great success in action");
      }
    })
    .catch(e => {
      dispatch({
        type: ACTION_TYPES.GET_CANDIDATE_LEADS_FAIL,
        error: "Error getting clients "
      });
    });
};

export { getCandidateLeadsListing };
