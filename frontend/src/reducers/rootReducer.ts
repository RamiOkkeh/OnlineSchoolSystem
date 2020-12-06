export type Actions = { type: string; payload: String[] };

export interface State {
  classes: any[];
}

const initState = {
  classes: ["#99ff66", "#99ff66", "#99ff66", "#99ff66", "#99ff66"],
};

const rootReducers = (state: State = initState, action: Actions) => {
  return state;
};
export default rootReducers;
