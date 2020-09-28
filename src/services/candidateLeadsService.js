import client from "./client";

const getCandidateLeads = () => {
  return client.get("/candidate_leads");
};

export default { getCandidateLeads, client };
