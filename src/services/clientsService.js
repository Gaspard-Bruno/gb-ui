import client from "./client";

const getClients = () => {
  return client.get("/clients");
};

const getClient = id => {
  return client.get(`clients/${id}`);
};

export default { getClients, getClient, client };
