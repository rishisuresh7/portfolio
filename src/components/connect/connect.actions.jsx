import { INIT_CONNECT } from "./connect.types.jsx"
import * as utilities from '../../utilities/utilities.js';

export const initConnect = (data) => {
    return {
        type: INIT_CONNECT,
        payload: utilities.initialize(INIT_CONNECT, data)
    }
}