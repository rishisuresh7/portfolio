import { SET_SELECTED_IT, INIT_EXPERIENCE } from './experience.types.js';

const initState = {
    items: [],
}

const setExperience = (state = initState, action) => {
    switch(action.type) {
        case SET_SELECTED_IT:
            return {
                ...state,
                selectedId: action.payload
            }
        case INIT_EXPERIENCE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default setExperience;