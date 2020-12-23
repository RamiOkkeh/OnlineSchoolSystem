export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  user: object;
  userDetails: object;
  profile: any[];
  schoolID: number;
  classroomID: number;
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
  classroomID: 0,
  schools: [],
  role: "Student",
  subjects: [],
  profile: [],
  waiting: {},
  post: [
    {
      username: "maha",
      data: "December:12:2020",
      messege: `Evninig Hackers :clap:
      hope all is going well with you :hugging_face:
      invist your hacking time very well so you can enjoy the rest of the day
      i trust you all are doing a wondrfull things now :heart:
      have a blessed evning and as we always say >>> ENJOY IT :tada:
      thumps up:+1: if your here and your hacking :wink:
      `,
    },
    {
      username: "mays",
      data: "December:5:2020",
      messege: `@channel
      Hello Palestinians :flag-ps: :green_heart:
      Remember >> “Invest in yourself.” :earth_africa:
      Toy problem for the day >> tree :palm_tree:
      Hend>> https://zoom.us/my/hend.isleem 
      Mays>> https://zoom.us/j/5619186718 
      :pushpin: NOTE "Push your code BEFORE 9:50"
      `,
    },
    {
      username: "hend",
      data: "December:5:2020",
      messege: `Heeeey @channel
      I'm sure you missed our word-y announcements :sunglasses::nerd_face:
      Today marks the "starting of the end"!
      Today is the first day of the last week of the project :sparkles::glitch_crab:
      Someone: What's for this week?
      Good question! You all know that we are done with adding features :hend: :hend:
      So this week is for:
      - No more features
      - Testing
      - Deployment
      - remember Documentation?
      - Enhancements if needed
      - 5 minutes demo video for your webiste/application
      - about us video
      The same Someone: "about us video" ? That's new :face_with_rolling_eyes::confused:
      Well yes, basically it's about introducing the team and selling your product! You have to be creative :sparkles:
      Ps: there is NO constraints on this video, you can literally do ANYTHING :fire::fire: we could post some examples for it later in a thread :wink:
      `,
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
  if (action.type === "SET_ClassroomID") {
    console.log(action.payload);
    return {
      ...state,
      classroomID: action.payload,
    };
  }
  return state;
};
export default rootReducers;
