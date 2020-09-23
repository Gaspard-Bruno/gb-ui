import { useState, useEffect, useCallback, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  actions as adminActions,
  selectors as adminSelectors
} from "redux/admin";

const useFetchAdmin = adminId => {
  // const dispatch = useDispatch();
  // const { getAdmin } = adminActions;
  const {
    getAdminLoading,
    getAdminError,
    getAdminLoaded,
    getAdmins
  } = adminSelectors;

  const error = useSelector(state => getAdminError(state));
  const loading = useSelector(state => getAdminLoading(state), shallowEqual);
  const loaded = useSelector(state => getAdminLoaded(state), shallowEqual);
  const admins = useSelector(state => getAdmins(state));
  const admin = useMemo(() => admins?.[adminId]?.attributes, [admins, adminId]);

  // const dispatchGetAdmin = useCallback((adminId) => {
  //     getAdmin(adminId, dispatch);
  // }, [dispatch, getAdmin])

  // console.log("prov", fetchId, admin)

  // useEffect(() => {
  //     if (!admin) {
  //       dispatchGetAdmin(adminId)
  //     }
  // }, [admin])

  return {
    admin,
    admins,
    error,
    loaded,
    loading
  };
};

export default useFetchAdmin;
