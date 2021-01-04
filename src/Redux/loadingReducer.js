export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "START_LOADING":
      return true;
    case "FINISH_LOADING":
      return false;
    default:
      return state;
  }
};

export const startLoading = () => {
  return { type: "START_LOADING" };
};

export const finishLoading = () => {
  return { type: "FINISH_LOADING" };
};
