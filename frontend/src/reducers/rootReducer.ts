export type Actions = { type: string; payload: String[] };


export interface State {
    test: Array<String>
}

const initState = {
    test: ['test1', 'test2', 'test3']
}

const rootReducers = (state: State = initState, action: Actions) => {
    if (action.type === 'ADD_NOTE') {
        console.log('hi');
        return {
            ...state,
            test: action.payload
        }
    }
    return state
}
export default rootReducers