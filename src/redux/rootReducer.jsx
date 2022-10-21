import {combineReducers} from 'redux';
import setBackgroundReducer from '../components/settings/settings.reducer.jsx';
import userDetails from '../components/profile/profile.reducer.jsx';
import setExperience from '../components/experience/experience.reducer.jsx';
import projectReducer from '../components/projects/projects.reducer.jsx';
import techStackReducer from '../components/tech-stack/tech-stack.reducer.jsx';
import connections from '../components/connect/connect.reducer.jsx';
import headerReducer from '../components/header/header.reducer.jsx';
import appReducer from '../App.reducer';

const rootReducer =  combineReducers({
    global: appReducer,
    globalStyle: setBackgroundReducer,
    user: userDetails,
    experience: setExperience,
    project: projectReducer,
    languages: techStackReducer,
    connect: connections,
    header: headerReducer,
});

export default rootReducer;