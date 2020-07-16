import {INIT_PROFILE} from './profile.types.js';

const userDetails = (state = {}, action) => {
    switch(action.type) {
        case INIT_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default userDetails;