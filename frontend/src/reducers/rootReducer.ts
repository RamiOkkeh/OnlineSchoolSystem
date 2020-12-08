export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  user: object;
  schoolID: number;
}

const initState = {
  classes: [],
  user: {},
  schoolID: 0,
};

const rootReducers = (state: State = initState, action: Actions) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === "CREATE_CLASS") {
    if (Array.isArray(action.payload)) {
      state.classes = action.payload;
      return state;
    }
    state.classes.push(action.payload);
    return state;
  }
  return state;
};
export default rootReducers;
