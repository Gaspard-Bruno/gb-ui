import client from "./client";

const getService = (id) => {
    return client.get(`services/${id}`)
};

export default { getService, client };

