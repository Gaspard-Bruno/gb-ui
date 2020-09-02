import client from "./client";

const postUserLogin = ({ email, password }) => {
  return client
    .post("backoffice/sign_in", {
      admin: {
        email,
        password
      }
    })
    .then(d => {
      if (d.headers["Authorization"]) {
        client.defaults.headers.common["Authorization"] =
          d.headers["Authorization"];
      }
    });
};

export default { postUserLogin };
