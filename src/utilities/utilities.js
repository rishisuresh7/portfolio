import config from '../config.json';
import {INIT_HEADER} from '../components/header/header.types.jsx';

export const initialize = (type) => {
    switch(type) {
        case INIT_HEADER:
            return {
                showSettings: false,
                projectLogo: config.bio.projectLogo
            }
        default:
            return {}
    }
}