export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  isLogged: boolean;
  user: object;
}

const initState = {
  classes: ["#99ff66", "#99ff66", "#99ff66", "#99ff66", "#99ff66"],
  isLogged: false,
  user: {},
};

const rootReducers = (state: State = initState, action: Actions) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload,
    };
  }
  return state;
};
export default rootReducers;
