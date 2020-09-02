import client from "./client";

const postUserLogin = ({ email, password }) => {
  return client.post("backoffice/sign_in", {
    admin: {
      email,
      password
    }
  });
};

export default { postUserLogin, client };
