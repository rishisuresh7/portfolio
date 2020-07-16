import {SHOW_SETTINGS} from './header.types.jsx';

export const setShowSettings = payload => {
    return {
        type: SHOW_SETTINGS,
        payload: payload
    }
}