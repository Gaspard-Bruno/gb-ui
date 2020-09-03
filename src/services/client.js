import axios from "axios";
import CONFIG from "Config";

const instance = axios.create({
  baseURL: CONFIG.apiOrigin
});

/*
instance.interceptors.request.use(
  req => {
    if (axios.defaults.headers.common["Authorization"]) return req;
    throw { message: "the token is not available" };
  },
  error => {
    return Promise.reject(error);
  }
);
*/

//on successful response
instance.interceptors.response.use(
  response => response,
  error => {
    const fallbackValue = [
      {
        userId: "Not authorized",
        id: "aerw15311sq",
        title: "Please try     again",
        completed: false
      }
    ];
    return Promise.reject(fallbackValue);
  }
);
/*
export const setAuthToken = token => {
  if (token) {
    //applying token
    instance.defaults.headers.common["Authorization"] = 'Bearer ' + token;
  } else {
    //deleting the token from header
    delete instance.defaults.headers.common["Authorization"];
  }
};
*/

export default instance;
