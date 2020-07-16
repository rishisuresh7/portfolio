import {INIT_TECH_STACK} from './tech-stack.types.jsx';
import * as utilities from '../../utilities/utilities.js';

export const initTechStack = () => {
    return {
        type: INIT_TECH_STACK,
        payload: utilities.initialize(INIT_TECH_STACK)
    }
}