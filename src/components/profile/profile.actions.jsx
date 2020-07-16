import {INIT_PROFILE} from './profile.types.js';
import * as utilities from '../../utilities/utilities.js';

export const initProfile = () => {
    return {
        type: INIT_PROFILE,
        payload: utilities.initialize(INIT_PROFILE)
    }
}