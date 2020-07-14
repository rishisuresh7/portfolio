import {combineReducers} from 'redux';
import setBackgroundReducer from '../components/settings/settings.reducer.jsx';

const rootReducer =  combineReducers({
    style: setBackgroundReducer,
});

export default rootReducer;