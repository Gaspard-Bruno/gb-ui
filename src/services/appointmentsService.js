import client from "./client";


const applyFilters = (filters) => {
  let query = `/appointments?`;
  Object.keys(filters).forEach(key => {
    if (typeof(filters[key]) === "object") {
      let aryQuery = ``
      filters[key].forEach(elem => {
        aryQuery += `${key}[]=${elem.toString()}&`
      })
      query += aryQuery;
    } else {
      query += `${key}=${filters[key].toString()}&`
    }
  })
  return query.slice(0, -1);
}

const getAppointments = (pageNumber, filters) => {
  console.log("fifififi", pageNumber, filters)
  if (filters["archived"] && pageNumber) {
    return client.get(`${applyFilters(filters)}&page=${pageNumber}`)
  }
  return client.get(applyFilters(filters));
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

