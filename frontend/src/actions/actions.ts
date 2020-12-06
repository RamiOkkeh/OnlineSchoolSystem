import { State } from "../reducers/rootReducer";

export const changeState = (newState: any) => {
  return {
    type: "ADD_NOTE",
    payload: newState,
  };
};
