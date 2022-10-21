import React, { useEffect, useState, Fragment } from 'react';
import Helmet from 'react-helmet';
import Loading from "react-fullscreen-loading";
import { connect } from 'react-redux';
import Header from './components/header/header.component.jsx';
import Profile from './components/profile/profile.component.jsx';
import Experience from './components/experience-v3/experience.component.jsx';
import Projects from './components/projects/projects.component.jsx';
import Connect from './components/connect/connect.component.jsx';
import Mail from './components/mail/mail.component.jsx';
import TechStack from './components/tech-stack/tech-stack.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import { setShowSettings } from './components/header/header.actions.jsx';
import { setData } from './App.actions';
import './App.scss';

const App = ({ url, signature, email, setGlobalData, resetShowSettings, showSettings, title, icon }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, {cache: 'reload'})
            .then(r => r.json())
            .then(resp => {
                setGlobalData(resp);
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
    const handleClick = () => {
        if (showSettings)
            resetShowSettings(false);
    }

    return (
        <Fragment>
            {
                loading ?
                    <Loading loading={loading} background={background} loaderColor="#3498db" /> :
                    <Fragment>
                        <Helmet>
                            <title>{title}</title>
                        </Helmet>
                        <div className='App' id='app' style={{ background}} onClick={handleClick}>
                            <Header id="header" />
                            <Profile />
                            <Experience />
                            <Projects />
                            <TechStack />
                            <Mail email={email} />
                            <Connect />
                            <Footer name={signature} />
                        </div>
                    </Fragment>
            }
        </Fragment>
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
    resetShowSettings: (payload) => dispatch(setShowSettings(payload)),
    setGlobalData: (payload) => dispatch(setData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);