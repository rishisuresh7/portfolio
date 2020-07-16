import { SET_BACKGROUND, INIT_SETTINGS } from './settings.types.jsx';
import * as utilities from '../../utilities/utilities.js';

export const setBackground = (payload) => {
    return {
        type: SET_BACKGROUND,
        payload: payload
    }
}

export const initSettings = () => {
    return {
        type: INIT_SETTINGS,
        payload: utilities.initialize(INIT_SETTINGS)
    }
}