import React from 'react';
import './footer.styles.scss';

const Footer = ({name}) => {
    return(
        <footer className="footer">
            <a href="https://github.com/rishisuresh7/portfolio" target="_blank">
                <span>{name}</span>
            </a>
        </footer>
    )
}

export default Footer;