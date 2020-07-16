import { INIT_CONNECT } from "./connect.types.jsx";

const initState = {
    connections: [],
}

const connections = (state = initState, action) => {
    switch(action.type) {
        case INIT_CONNECT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default connections;