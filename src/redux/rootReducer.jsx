import {combineReducers} from 'redux';
import setBackgroundReducer from '../components/settings/settings.reducer.jsx';
import userDetails from '../components/profile/profile.reducer.jsx';
import setExperience from '../components/experience/experience.reducer.jsx';
import projectReducer from '../components/projects/projects.reducer.jsx';
import techStackReducer from '../components/tech-stack/tech-stack.reducer.jsx';

const rootReducer =  combineReducers({
    globalStyle: setBackgroundReducer,
    user: userDetails,
    experience: setExperience,
    project: projectReducer,
    languages: techStackReducer,
});

export default rootReducer;