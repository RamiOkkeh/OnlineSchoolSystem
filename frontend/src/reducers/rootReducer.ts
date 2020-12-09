export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  isLogged: boolean;
  user: object;
  role :String;
  post:any[];
}

const initState = {
  classes: ["#99ff66", "#99ff66", "#99ff66", "#99ff66", "#99ff66"],
  isLogged: false,
  user: {},
  role:"Student",
  post:[{username:'rami',data:'December:12:2020',messege:"lasjfksagfkkjdvfjhsad"},{username:'rami',data:'December:12:2020',messege:"lasjfksagfkkjdvfjhsad"}]
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
  return state;
};
export default rootReducers;
