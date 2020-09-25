export default {
  appName: "55+",
  locale: "PT",
  social: {
    facebook: "http://facebook.com"
  },
  apiOrigin: process.env.REACT_APP_API_ORIGIN,
  sessionExpirationDays: 30,
  boards: {
    requests: {
      columns: {
        received: "newRequests",
        contact: "newRequests",
        analysis: "inAnalysis",
        awaiting_specialist: "pending",
        awaiting_visit_payment: "pending",
        awaiting_visit: "pending",
        awaiting_meeting: "pending",
        awaiting_service_payment: "pending",
        awaiting_conclusion: "active",
        complete: "closed",
        closed: "closed",
        cancelled: "cancelled",
        rejected: "cancelled"
      }
    }
  }
};
