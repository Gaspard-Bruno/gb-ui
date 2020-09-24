import { useCallback, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStorage from "Hooks/useStorage";
import { actions, selectors } from "Redux/auth";

const { clearStorage } = useStorage();
const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginUser, logoutUser } = actions;
  const { getAuthUser, getLoading, getError } = selectors;

  const user = useSelector(state => getAuthUser(state), shallowEqual);
  const error = useSelector(state => getError(state));
  const loading = useSelector(state => getLoading(state), shallowEqual);
  // const loaded = useSelector(state => getLoaded(state), shallowEqual);

  const dispatchLoginUser = useCallback(
    (email, password, callback) => {
      loginUser(dispatch, { email, password, callback });
    },
    [dispatch, loginUser]
  );

  const dispatchLogoutUser = useCallback(
    (email, password, callback) => {
      logoutUser(dispatch, { email, password, callback });
    },
    [dispatch, logoutUser]
  );

  const redirectToDashboard = useCallback(() => history.push("/dashboard"), [
    history
  ]);

  const signInAndRedirectToDashboard = useCallback(
    async (email, pw) => {
      if (email && pw) {
        dispatchLoginUser(email, pw, redirectToDashboard);
      }
    },
    [dispatchLoginUser, redirectToDashboard]
  );

  const gotoSignInPage = useCallback(() => history.push("/"), [history]);

  useEffect(() => {
    if (!user) {
      gotoSignInPage();
      clearStorage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatchLogoutUser, gotoSignInPage, user]);

  return {
    user,
    error,
    loading,
    redirectToDashboard,
    signInAndRedirectToDashboard,
    dispatchLogoutUser,
    gotoSignInPage
  };
};

export default useAuth;
