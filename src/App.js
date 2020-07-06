import React from 'react';
import './App.scss';
import Header from './components/header/header.component.jsx';
import Profile from './components/profile/profile.component.jsx';
import Experience from './components/experience/experience.component.jsx';

const App = () =>{
    return (
        <div className='App'>
            <Header/>
            <Profile/>
            <Experience/>
        </div>
    )
}

export default App;