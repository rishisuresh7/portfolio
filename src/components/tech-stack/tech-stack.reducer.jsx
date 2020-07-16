import { INIT_TECH_STACK } from "./tech-stack.types.jsx";

const initState = {
    techStack: []
};

const techStackReducer = (state = initState, action) => {
    switch(action.type) {
        case INIT_TECH_STACK:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default techStackReducer;