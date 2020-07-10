import React from 'react';
import './mail.styles.scss';

const Mail = () => {
    return (
        <div className="mail-component" id="mail-component">
            <div className="mail-container">
                <a href="mailto:rishi9632@gmail.com" target="_blank">rishi9632@gmail.com</a>
            </div>
            <div className="mail-line-container">
                <div className="mail-line"></div>
            </div>
        </div>
    )
}

export default Mail;