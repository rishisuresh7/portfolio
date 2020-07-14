import { SET_BACKGROUND } from './settings.types.jsx'

const initState = {
    currentBackground: ''
}

const setBackgroundReducer = ( state = initState, action) => {
    switch(action.type) {
        case SET_BACKGROUND:
            return {
                ...state,
                currentBackground: action.payload
            }
        default:
            return state
    }
}

export default setBackgroundReducer;