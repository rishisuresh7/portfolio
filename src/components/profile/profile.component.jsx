import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import RotateText from '../rotate-text/rotate.component.jsx';
import {initProfile} from './profile.actions.jsx';
import './profile.styles.scss';

const Profile = ({user: {name, animateText, alternateText, rotateText, typeTime, deleteTime, about, imageUrl, email}, initializeProfile}) => {

    useEffect(() => {
        initializeProfile();
    }, [])

    const handleLoad = () => {
        const animateElement = document.getElementById('profile-items');
        animateElement.classList.add('profile-items-fadein');
    }

    return (
        <div className="profile" id="profile">
            <div className="profile-items" id="profile-items">
                <div className="profile-content-container">
                    <div className="profile-content">
                        <span>Hi, this is </span>
                        <h1>{name}</h1>
                        {
                            animateText ?
                            <RotateText toRotate={rotateText} time={typeTime} delTime={deleteTime}/> :
                            <h2>{alternateText}</h2>
                        }
                        <p>
                        {about}
                        </p>
                    </div>
                </div>
                <div className="profile-image-container">
                    <div className="profile-image-border">
                        <div className="profile-image">
                            <img src={imageUrl} alt="profile" onLoad={handleLoad} />
                        </div>
                    </div>
                </div>
                <div className="get-in-touch-container">
                    <a href={`mailto:${email}`} className="get-in-touch">Get In Touch</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    initializeProfile: () => dispatch(initProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);