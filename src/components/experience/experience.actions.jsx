import { SET_SELECTED_IT } from './experience.types.js';

export const setSelectedId = (id) => {
    return {
        type: SET_SELECTED_IT,
        payload: id
    }
}