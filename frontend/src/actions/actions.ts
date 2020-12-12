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
export const schools = (newState: object) => {
  return {
    type: "SCHOOLS",
    payload: newState,
  };
};
export const subjects = (newState: object) => {
  return {
    type: "SUBJECTS",
    payload: newState,
  };
};