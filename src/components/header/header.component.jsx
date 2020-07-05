import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';


const Header = () => {
    return (
        <div className="header">
           <div className="header-content">
            <div className="header-logo">
                    <span className="header-text">RS</span>
            </div>
            <div className="header-options">
                    <Link className = "header-option" to='/'>&nbsp;&nbsp;Home</Link>
                    <Link className = "header-option" to='/'>&nbsp;&nbsp;About</Link>
                    <Link className = "header-option" to='/'>&nbsp;&nbsp;Experience</Link>
                    <Link className = "header-option" to='/'>&nbsp;&nbsp;Contact</Link>
            </div>
           </div>
        </div>
    )
}

export default Header;