export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  isLogged: boolean;
  user: object;
  role :String;
  post:any[];
  profile:any[];
}

const initState = {
  classes: ["#99ff66", "#99ff66", "#99ff66", "#99ff66", "#99ff66"],
  isLogged: false,
  user: {},
  role:"Teacher",
  post:[{username:'rami',data:'December:12:2020',messege:"lasjfksagfkkjdvfjhsad"},{username:'ameed',data:'December:15:2020',messege:"lasjfksagfkkjdvfjhsad"},{username:'Asem Basher',data:'December:1:2020',messege:"lasjfksagfkkjdvfjhsad"}],
  profile:[{username:'momenHanbli',Email:"momo123@gmail.com",numofsub:"7"}]
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
