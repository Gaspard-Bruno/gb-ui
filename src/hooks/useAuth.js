// import { useCallback } from "react";
// import { shallowEqual, useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { actions, selectors } from "Redux/auth";

// const useAuth = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const { loginUser } = actions;
//   const { getAuthUser, getLoading, getError } = selectors;

//   const user = useSelector(state => getAuthUser(state), shallowEqual);
//   const error = useSelector(state => getError(state));
//   const loading = useSelector(state => getLoading(state), shallowEqual);
//   // const loaded = useSelector(state => getLoaded(state), shallowEqual);

//   const dispatchLoginUser = useCallback(
//     (email, password, callback) => {
//       loginUser(dispatch, { email, password, callback });
//     },
//     [dispatch, loginUser]
//   );

//   const signInAndRedirectToDashboard = useCallback(
//     async (email, pw) => {
//       if (email && pw) {
//         console.log("cenas fixes");
//         dispatchLoginUser(email, pw, () => history.push("/dashboard"));
//       }
//     },
//     [dispatchLoginUser, history]
//   );

//   return {
//     user,
//     error,
//     loading,
//     signInAndRedirectToDashboard
//   };
// };

// export default useAuth;
