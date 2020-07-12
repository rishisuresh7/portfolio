import React from 'react';
import './App.scss';
import Header from './components/header/header.component.jsx';
import Profile from './components/profile/profile.component.jsx';
import Experience from './components/experience/experience.component.jsx';
import Projects from './components/projects/projects.component.jsx';
import Connect from './components/connect/connect.component.jsx';
import Mail from './components/mail/mail.component.jsx';
import TechStack from './components/tech-stack/tech-stack.component.jsx';

const App = () =>{
    return (
        <div className='App'>
            <Header/>
            <Profile/>
            <Experience/>
            <Projects/>
            <Connect/>
            <Mail/>
            <TechStack/>
        </div>
    )
}

export default App;