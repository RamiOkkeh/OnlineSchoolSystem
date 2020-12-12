export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  user: object;
  profile:any[];
  schoolID: number;
  schools: any[];
  role: String;
  subjects: any[];
  post: any[];
  subject:object;
}

const initState = {
  classes: [],
  user: {
    date:"12-dec-2020",
    semester:"first",
    totalprice:"125$"
  },
  schoolID: 0,
  schools: [],
  role: "Principal",
  subjects: [],
  profile:[],
  post: [
    {
      username: "rami",
      data: "December:12:2020",
      messege: "lasjfksagfkkjdvfjhsad",
    },
    {
      username: "ameed",
      data: "December:5:2020",
      messege: "lasjfksagfkkjdvfjhsad",
    },
    {
      username: "asem",
      data: "December:5:2020",
      messege: "lasjfksagfkkjdvfjhsad",
    },
  ],
  subject : {

  }
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
  if (action.type === "SCHOOLS") {
    if (Array.isArray(action.payload)) {
      state.schools = action.payload;
      return state;
    }
    state.schools.push(action.payload);
    return state;
  }
  if (action.type === "SUBJECTS") {
    if (Array.isArray(action.payload)) {
      state.schools = action.payload;
      return state;
    }
    state.schools.push(action.payload);
    return state;
  }
  return state;
};
export default rootReducers;
