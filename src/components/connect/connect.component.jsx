import React, {useEffect} from 'react';
import './connect.styles.scss';

const Connect = () => {

    useEffect(() => {
        const connectElement = document.getElementById('connect-component');
        const mailElement = document.getElementById('mail-component');
        setTimeout(() => {
            connectElement.classList.add('display');
            mailElement.classList.add('display');
        }, 500);
    }, []);

    return(
        <div className="connect-component" id="connect-component">
            <div className="connect-container">
                <div className="connect-item">
                    <a href="https://www.linkedin.com/in/rishi-suresh/" target="_blank"><i className = "fa fa-linkedin"></i></a>
                </div>
                <div className="connect-item">
                    <a href="https://github.com/rishisuresh7" target="_blank"><i className = "fa fa-github"></i></a>
                </div>
                <div className="connect-item">
                    <a href="tel:+918792615476" target="_blank"><i className = "fas fa-mobile-alt large"></i></a>
                </div>
                <div className="connect-item">
                    <a href="mailto:rishi9632@gmail.com" target="_blank"><i className = "fa fa-envelope "></i></a>
                </div>
                <div className="connect-item">
                    <a href="https://www.instagram.com/rishisuresh7/" target="_blank"><i className = "fa fa-instagram large"></i></a>
                </div>
            </div>
            <div className="connect-line">
            </div>
        </div>
    )
}

export default Connect;