import { SET_SELECTED_IT, INIT_EXPERIENCE } from './experience.types.js';
import * as utilities from '../../utilities/utilities.js';

export const setSelectedId = (id) => {
    return {
        type: SET_SELECTED_IT,
        payload: id
    }
}

export const initExperience = (payload) => {
    return {
        type: INIT_EXPERIENCE,
        payload: utilities.initialize(INIT_EXPERIENCE, payload)
    }
}