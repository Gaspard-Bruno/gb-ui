const REDUCER = "entities";
export const ACTION_TYPES = {
  RESET: `${REDUCER}/RESET`
};

export const reset = dispatch => {
  dispatch({
    type: ACTION_TYPES.RESET
  });
};
