import { createSelector } from "reselect";

import { getAdminEntities } from 'redux/entities/selectors'

const selectAdminsState = state => state.admins;

export const makeGetAdmin = () => (
    createSelector(
        getAdminEntities,
        (_, adminId) => adminId,
        (entities, id) => entities[id]
    )
)
export const getAdminLoading = createSelector(selectAdminsState, state => {
  return state.adminLoading || false;
});
export const getAdminLoaded = createSelector(selectAdminsState, state => {
  return state.adminLoaded || false;
});
export const getAdminError = createSelector(selectAdminsState, state => {
  return state.adminError || null;
});

