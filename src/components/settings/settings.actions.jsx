import { SET_BACKGROUND } from './settings.types.jsx';

export const setBackground = (payload) => {
    return {
        type: SET_BACKGROUND,
        payload: payload
    }
}