import CONFIG from "Config";

export default () => {
  const clearStorage = () => localStorage.clear();
  const getStorageItem = key => JSON.parse(localStorage.getItem(key));
  const setStorageItem = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));
  // * Auth Token
  const STORAGE_AUTH_TOKEN = getStorageItem("AUTH_TOKEN") || {};
  const { user, token, tokenDate } = STORAGE_AUTH_TOKEN;

  const setStorageAuthToken = value => {
    setStorageItem("AUTH_TOKEN", value);
  };

  // ! 30 Days expiration
  const AUTH_EXPIRY_HOURS = CONFIG.sessionExpirationDays * 24;

  const tokenExpired = () => {
    const currentDate = new Date().getTime();
    const TTL_MS = AUTH_EXPIRY_HOURS * 3600000;
    if (currentDate - TTL_MS > new Date(tokenDate).getTime()) {
      return true;
    }
    return false;
  };

  // * Axios Client
  const headers =
    token && !tokenExpired()
      ? {
          Authorization: token
        }
      : {};

  return {
    token,
    tokenDate,
    tokenExpired,
    setStorageAuthToken,
    clientHeaders: headers,
    user: tokenExpired() ? null : user,
    clearStorage
  };
};
