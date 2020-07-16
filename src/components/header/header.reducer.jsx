import {SHOW_SETTINGS, INIT_HEADER} from './header.types.jsx';

const headerReducer = (state = {}, action) => {
    switch(action.type) {
        case SHOW_SETTINGS:
            return {
                ...state,
                showSettings: action.payload
            }
        case INIT_HEADER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    } 
}

export default headerReducer;