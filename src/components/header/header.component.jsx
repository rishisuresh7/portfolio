import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setShowSettings} from './header.actions.jsx';
import Settings from '../settings/settings.component.jsx';
import {initHeader} from './header.actions.jsx';
import './header.styles.scss';

const Header = ({setShowSettings, showSettings, logo, initHeader, showIcon, global}) => {

    useEffect(() => {
        initHeader(global);
        const elements = document.querySelectorAll('#animate-header');
        let t = 20;
        const addAnimation = (i = 0) => {
            if (i >= elements.length) {
                return
            } else {
                t += 20;
                elements[i].classList.add('fadein');
            }

            setTimeout(() => {
                addAnimation(++i);
            }, t)
        }

        addAnimation();
    }, [showIcon]);

    const handleClick = (event) => {
        event.preventDefault();
        const target = event.target.closest('.header-option');
        const scrollTo = document.getElementById(target.getAttribute('href'));
        window.scrollTo({
            top: scrollTo.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    const handleSettings = (event) => {
        event.preventDefault();
        setShowSettings(showSettings? false: true);
    }

    return (
        <div className="header" id="header" >
           <div className="header-content">
            <div className="header-logo" id="animate-header">
                    <span className="header-text">{logo}</span>
            </div>
            <div className="header-options">
                    <a className = "header-option" href="profile" onClick={handleClick} id="animate-header"><span><i className='fas fa-home'/><span>&nbsp;Home</span></span></a>
                    <a className = "header-option" href="experience" onClick={handleClick} id="animate-header"><span><i className='fas fa-laptop' /><span>&nbsp;Experience</span></span></a>
                    <a className = "header-option" href="projects" onClick={handleClick} id="animate-header"><span><i className="fas fa-tasks"/><span>&nbsp;Projects</span></span></a>
                    <a className = "header-option" href="techSkills" onClick={handleClick} id="animate-header"><span><i className="fab fa-node-js"/><span>&nbsp;Techs</span></span></a>
                    {
                        showIcon ?
                        <a className = "header-option icon" onClick={handleSettings} id="animate-header"><i className="fa fa-gear"></i></a> :
                        null
                    }
            </div>
           </div>
            {
                showSettings ? <Settings/> : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    showSettings: state.header.showSettings,
    logo: state.header.projectLogo,
    showIcon: state.header.showIcon,
    currentBackground: state.globalStyle.currentBackground,
    global: state.global,
})

const mapDispatchToProps = dispatch => ({
    setShowSettings: (payload) => dispatch(setShowSettings(payload)),
    initHeader: (payload) => dispatch(initHeader(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);