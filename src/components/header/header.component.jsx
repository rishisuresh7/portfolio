import React from 'react';
import './header.styles.scss';


const Header = () => {

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

    return (
        <div className="header">
           <div className="header-content">
            <div className="header-logo">
                    <span className="header-text">RS</span>
            </div>
            <div className="header-options">
                    <a className = "header-option" href="profile" onClick={handleClick}>&nbsp;&nbsp;Home</a>
                    <a className = "header-option" href="experience" onClick={handleClick}>&nbsp;&nbsp;Experience</a>
                    <a className = "header-option" href="projects" onClick={handleClick}>&nbsp;&nbsp;Projects</a>
            </div>
           </div>
        </div>
    )
}

export default Header;