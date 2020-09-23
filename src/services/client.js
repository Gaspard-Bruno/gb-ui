import axios from "axios";
import CONFIG from "Config";

const STORAGE_AUTH_TOKEN = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
const { token, tokenDate } = STORAGE_AUTH_TOKEN;
// ! 30 Days expiration
const AUTH_EXPIRY_HOURS = 30 * 24;
const tokenExpired = () => {
  const currentDate = new Date().getTime();
  const TTL_MS = AUTH_EXPIRY_HOURS * 3600000;
  if (currentDate - TTL_MS > new Date(tokenDate).getTime()) {
    localStorage.clear();
    return true;
  }
  return false;
};

const headers =
  token && !tokenExpired()
    ? {
        Authorization: token
      }
    : null;

const instance = axios.create({
  baseURL: CONFIG.apiOrigin,
  headers
});

//on successful response
instance.interceptors.response.use(
  res => {
    if (res.headers["authorization"]) {
      instance.defaults.headers.common["authorization"] =
        res.headers["authorization"];
      localStorage.setItem(
        "AUTH_TOKEN",
        JSON.stringify({
          token: res.headers["authorization"],
          tokenDate: new Date(),
          user: res.data
        })
      );
    }
    return res;
  },
  error => {
    console.log();
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
