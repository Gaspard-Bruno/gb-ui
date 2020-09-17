import client from "./client";

const getProviders = () => {
    return client.get("/providers");
};

const getProvider = (id) => {
    return client.get(`providers/${id}`)
};

export default { getProviders, getProvider, client };

