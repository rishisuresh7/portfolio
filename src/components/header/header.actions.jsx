import {SHOW_SETTINGS, INIT_HEADER} from './header.types.jsx';
import * as utility from '../../utilities/utilities.js';

export const setShowSettings = payload => {
    return {
        type: SHOW_SETTINGS,
        payload: payload
    }
}

export const initHeader = () => {
    return {
        type: INIT_HEADER,
        payload: utility.initialize(INIT_HEADER)
    }
}