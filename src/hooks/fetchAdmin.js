import { useState, useEffect, useCallback, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { actions as adminActions, selectors as adminSelectors } from 'redux/admin'

const useFetchAdmin = (fetchId) => {
  const [adminId, setAdminId] = useState(fetchId || null)

  const dispatch = useDispatch()
  // const { getAdmin } = adminActions;
  const { getAdminLoading, getAdminError, getAdminLoaded }  = adminSelectors;

  const error = useSelector(state => getAdminError(state));
  const loading = useSelector(state => getAdminLoading(state), shallowEqual);
  const loaded = useSelector(state => getAdminLoaded(state), shallowEqual);  
  
  // const dispatchGetAdmin = useCallback((adminId) => {
  //     getAdmin(adminId, dispatch);
  // }, [dispatch, getAdmin])

  const makeAdmin = useMemo(adminSelectors.makeGetAdmin, [])
  const admin = useSelector((state) => makeAdmin(state, adminId))
  
  // console.log("prov", fetchId, admin)

  // useEffect(() => {
  //     if (!admin) {
  //       dispatchGetAdmin(adminId)
  //     }
  // }, [admin])

  return {
      admin,
      error,
      loading
    }
}

export default useFetchAdmin
