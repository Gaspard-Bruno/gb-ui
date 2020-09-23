import client from "./client";

const getService = id => {
  return client.get(`services/${id}`);
};
const getServices = id => {
  return client.get(`services`);
};

export default { getService, client, getServices };
