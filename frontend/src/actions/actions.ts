export const setUser = (newState: object) => {
  return {
    type: "SET_USER",
    payload: newState,
  };
};
export const createClass = (newState: object) => {
  return {
    type: "CREATE_CLASS",
    payload: newState,
  };
};
