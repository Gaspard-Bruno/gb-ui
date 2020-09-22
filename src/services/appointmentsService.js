import client from "./client";

const getAppointments = (pageNumber) => {
  if (pageNumber) {
    return client.get(`/appointments?page=${pageNumber}`)
  }
  return client.get("/appointments");
};

const updateAppointment = (newStatus, appointmentId) => {
  return client.put(`/appointments/${appointmentId}`),
  { data: { appointment: { status : newStatus }}};
}

export default { 
  getAppointments, 
  updateAppointment,
  client 
};

