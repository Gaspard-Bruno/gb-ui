import client from "./client";

const getAppointments = (pageNumber) => {
  if (pageNumber) {
    return client.get(`/appointments?page=${pageNumber}`)
  }
  return client.get("/appointments");
};

export default { getAppointments, client };

