import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setShowSettings} from './header.actions.jsx';
import Settings from '../settings/settings.component.jsx';
import {initHeader} from './header.actions.jsx';
import './header.styles.scss';

const Header = ({setShowSettings, showSettings, logo, initHeader, showIcon, currentBackground}) => {

    useEffect(() => {
        initHeader();
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
        const target = event.target;
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
        <div className="header" id="header" style={{background: currentBackground}}>
           <div className="header-content">
            <div className="header-logo" id="animate-header">
                    <span className="header-text">{logo}</span>
            </div>
            <div className="header-options">
                    <a className = "header-option" href="profile" onClick={handleClick} id="animate-header"><span>&nbsp;&nbsp;Home</span></a>
                    <a className = "header-option" href="experience" onClick={handleClick} id="animate-header"><span>&nbsp;&nbsp;Experience</span></a>
                    <a className = "header-option" href="projects" onClick={handleClick} id="animate-header"><span>&nbsp;&nbsp;Projects</span></a>
                    <a className = "header-option" href="techSkills" onClick={handleClick} id="animate-header"><span>Tech Stack</span></a>
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
})

const mapDispatchToProps = dispatch => ({
    setShowSettings: (payload) => dispatch(setShowSettings(payload)),
    initHeader: () => dispatch(initHeader())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);