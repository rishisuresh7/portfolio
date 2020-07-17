import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import Header from './components/header/header.component.jsx';
import Profile from './components/profile/profile.component.jsx';
import Experience from './components/experience/experience.component.jsx';
import Projects from './components/projects/projects.component.jsx';
import Connect from './components/connect/connect.component.jsx';
import Mail from './components/mail/mail.component.jsx';
import TechStack from './components/tech-stack/tech-stack.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import {setShowSettings} from './components/header/header.actions.jsx';
import './App.scss';

const App = ({signature, email, currentBackground, resetShowSettings, showSettings, title, icon}) =>{

    const handleClick = () => {
        if(showSettings)
            resetShowSettings(false);
    }

    return (
        <React.Fragment>
            <Helmet>
                    <title>{title}</title>
            </Helmet>
            <div className='App' id='app' style={{background: currentBackground}} onClick={handleClick}>
                <Header id="header"/>
                <Profile/>
                <Experience/>
                <Projects/>
                <Connect/>
                <Mail email={email}/>
                <TechStack/>
                <Footer name={signature}/>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    signature: state.user.signature,
    email: state.user.email,
    currentBackground: state.globalStyle.currentBackground,
    showSettings: state.header.showSettings,
    title: state.user.title,
    icon: state.user.icon,
})

const mapDispatchToProps = dispatch => ({
    resetShowSettings: (payload) => dispatch(setShowSettings(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);