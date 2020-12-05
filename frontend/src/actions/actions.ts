import { State } from "../reducers/rootReducer"

export const changeState = (newState: State) => {
    return {
        type: "ADD_NOTE",
        payload: newState,
    }
}