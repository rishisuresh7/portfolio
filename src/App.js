import React from 'react';
import {connect} from 'react-redux';
import Header from './components/header/header.component.jsx';
import Profile from './components/profile/profile.component.jsx';
import Experience from './components/experience/experience.component.jsx';
import Projects from './components/projects/projects.component.jsx';
import Connect from './components/connect/connect.component.jsx';
import Mail from './components/mail/mail.component.jsx';
import TechStack from './components/tech-stack/tech-stack.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import './App.scss';

const App = ({signature}) =>{
    return (
        <div className='App' id='app'>
            <Header id="header"/>
            <Profile/>
            <Experience/>
            <Projects/>
            <Connect/>
            <Mail/>
            <TechStack/>
            <Footer name={signature}/>
        </div>
    )
}

const mapStateToProps = state => ({
    signature: state.user.signature
})

export default connect(mapStateToProps)(App);