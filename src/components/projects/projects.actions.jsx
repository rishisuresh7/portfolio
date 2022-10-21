import { INIT_PROJECTS } from './projects.types.jsx';
import * as utilities from '../../utilities/utilities.js';

export const initProjects = (payload) => {
    return {
        type: INIT_PROJECTS,
        payload: utilities.initialize(INIT_PROJECTS, payload)
    }
}