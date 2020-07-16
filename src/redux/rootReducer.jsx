import {combineReducers} from 'redux';
import setBackgroundReducer from '../components/settings/settings.reducer.jsx';
import userDetails from '../components/profile/profile.reducer.jsx';
import setExperience from '../components/experience/experience.reducer.jsx';

const rootReducer =  combineReducers({
    globalStyle: setBackgroundReducer,
    user: userDetails,
    experience: setExperience,
});

export default rootReducer;