export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  user: object;
  userDetails: object;
  profile: any[];
  schoolID: number;
  schools: any[];
  role: String;
  subjects: any[];
  waiting: object;
  post: any[];
  test: any[];
}

const initState = {
  classes: [],
  user: {},
  userDetails: {},
  schoolID: 0,
  schools: [],
  role: "Student",
  subjects: [],
  profile: [],
  waiting: {},
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
  test: [
    {
      subjectID: 1,
      subjectName: "math",
      studentID: 2,
      studentName: "Ameed Asmah",
      schooldID: 1,
      classroomID: 1,
      first: 60,
      second: 80,
      final: 85,
    },
    {
      subjectID: 2,
      subjectName: "Arabic",
      studentID: 2,
      studentName: "Ameed Asmah",
      schooldID: 1,
      classroomID: 1,
      first: 90,
      second: 80,
      final: 100,
    },
    {
      subjectID: 3,
      subjectName: "English",
      studentID: 2,
      studentName: "Ameed Asmah",
      schooldID: 1,
      classroomID: 1,
      first: 70,
      second: 60,
      final: 70,
    },
    {
      subjectID: 4,
      subjectName: "phyiscs",
      studentID: 2,
      studentName: "Ameed Asmah",
      schooldID: 1,
      classroomID: 1,
      first: 50,
      second: 80,
      final: 40,
    },
  ],
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
  if (action.type === "SET_USERDETAILS") {
    return {
      ...state,
      userDetails: action.payload,
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
      state.subjects = action.payload;
      return state;
    }
    state.subjects.push(action.payload);
    return state;
  }
  if (action.type === "WAITING") {
    return {
      ...state,
      waiting: action.payload,
    };
  }
  if (action.type === "SET_ROLE") {
    return {
      ...state,
      role: action.payload,
    };
  }
  return state;
};
export default rootReducers;
