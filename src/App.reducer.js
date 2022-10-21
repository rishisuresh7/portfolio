import { SET_DATA } from "./App.types";

const appReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default appReducer;