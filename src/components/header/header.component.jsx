import React, {useEffect} from 'react';
import './header.styles.scss';


const Header = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('#animate-header');
        let t = 20;
        const addAnimation = (i = 0) => {
            if (i >= 4) {
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
    }, []);

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
            <div className="header-logo" id="animate-header">
                    <span className="header-text">RS</span>
            </div>
            <div className="header-options">
                    <a className = "header-option" href="profile" onClick={handleClick} id="animate-header"><span>&nbsp;&nbsp;Home</span></a>
                    <a className = "header-option" href="experience" onClick={handleClick} id="animate-header"><span>&nbsp;&nbsp;Experience</span></a>
                    <a className = "header-option" href="projects" onClick={handleClick} id="animate-header"><span>&nbsp;&nbsp;Projects</span></a>
            </div>
           </div>
        </div>
    )
}

export default Header;