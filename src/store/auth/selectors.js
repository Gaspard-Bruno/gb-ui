import { createSelector } from "reselect";

const selectAuthState = state => state.auth;

const getAuthUser = createSelector(selectAuthState, state => {
  return state.user || null;
});
const getLoading = createSelector(selectAuthState, state => {
  return state.loading || false;
});
const getLoaded = createSelector(selectAuthState, state => {
  return state.loaded || false;
});
const getError = createSelector(selectAuthState, state => {
  return state.error || null;
});

export { getAuthUser, getLoading, getError, getLoaded };
