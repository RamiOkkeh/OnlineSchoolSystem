export type Actions = { type: string; payload: any };

export interface State {
  classes: any[];
  isLogged: boolean;
  user: object;
  role :String;
}

const initState = {
  classes: ["#99ff66", "#99ff66", "#99ff66", "#99ff66", "#99ff66"],
  isLogged: false,
  user: {},
  role:"Principal"
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
