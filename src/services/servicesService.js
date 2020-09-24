import client from "./client";

const getServices = () => {
  return client.get("/services");
};

const getService = id => {
  return client.get(`services/${id}`);
};
export default { getServices, getService, client };
