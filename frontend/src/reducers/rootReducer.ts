export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  user: object;
  schoolID: number;
  role: String;
  post: any[];
}

const initState = {
  classes: [],
  user: {},
  schoolID: 0,
  role: "Student",
  post: [{ username: 'rami', data: 'December:12:2020', messege: "lasjfksagfkkjdvfjhsad" }, { username: 'rami', data: 'December:12:2020', messege: "lasjfksagfkkjdvfjhsad" }]
};

//Principal
//Teacher
//Student

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
