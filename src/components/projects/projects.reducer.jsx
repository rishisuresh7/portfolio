import { INIT_PROJECTS } from './projects.types.jsx';

const initState = {
    projects: []
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case INIT_PROJECTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default projectReducer;