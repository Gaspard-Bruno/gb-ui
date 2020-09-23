import client from "./client";

const getServices = () => {
    return client.get("/services");
}

const getService = (id) => {
    return client.get(`services/${id}`)
};
const getServices = id => {
  return client.get(`services`);
};

export default { getServices, getService, client };
