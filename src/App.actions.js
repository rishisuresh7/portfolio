import { SET_DATA } from './App.types';

export const setData = (payload) => {
    return {
        type: SET_DATA,
        payload
    }
}