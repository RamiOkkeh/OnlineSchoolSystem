export const setUser = (newState: object) => {
  return {
    type: "SET_USER",
    payload: newState,
  };
};
