import {SHOW_SETTINGS} from './header.types.jsx';

const initState = {
    showSettings: false,
    projectLogo: 'RS'
}

const headerReducer = (state = initState, action) => {
    switch(action.type) {
        case SHOW_SETTINGS:
            return {
                ...state,
                showSettings: action.payload
            }
        default:
            return state
    } 
}

export default headerReducer;