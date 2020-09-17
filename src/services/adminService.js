import client from "./client";

const getAdmin = (id) => {
    return client.get(`admins/${id}`)
};

export default { getAdmin, client };

