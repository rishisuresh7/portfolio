import React from 'react';
import './mail.styles.scss';

const Mail = ({email}) => {
    return (
        <div className="mail-component" id="mail-component">
            <div className="mail-container">
                <a href={`mailto:${email}`} target="_blank">{email}</a>
            </div>
            <div className="mail-line-container">
                <div className="mail-line"></div>
            </div>
        </div>
    )
}

export default Mail;