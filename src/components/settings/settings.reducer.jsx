import { SET_BACKGROUND, INIT_SETTINGS } from './settings.types.jsx'

const initState = {
    styles: [],
    currentBackground: localStorage.getItem('background') ? localStorage.getItem('background') : 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
}

const setBackgroundReducer = ( state = initState, action) => {
    switch(action.type) {
        case SET_BACKGROUND:
            return {
                ...state,
                currentBackground: action.payload
            }
        case INIT_SETTINGS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default setBackgroundReducer;