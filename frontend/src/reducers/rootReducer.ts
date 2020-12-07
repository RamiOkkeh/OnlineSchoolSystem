export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  isLogged: boolean;
  user: object;
}

const initState = {
  classes: [],
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
  if (action.type === "CREATE_CLASS") {
    state.classes.push(action.payload);
    return state;
  }
  return state;
};
export default rootReducers;
