import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import RotateText from '../rotate-text/rotate.component.jsx';
import {initProfile} from './profile.actions.jsx';
import './profile.styles.scss';

const Profile = ({user: {name, animateText, alternateText, rotateText, typeTime, deleteTime, about, imageUrl}, global, initializeProfile}) => {

    useEffect(() => {
        initializeProfile(global);
    }, [])

    const handleLoad = () => {
        const animateElement = document.getElementById('profile-items');
        animateElement.classList.add('profile-items-fadein');
    }

    const url = 'https://github-readme-stats.vercel.app/api?username=rishisuresh7&hide_title=true&count_private=true&show_icons=true&hide_border=true&bg_color=ffffff00&text_color=008b8b&icon_color=008b8b&cache_seconds=1800'
    return (
        <div className="profile" id="profile">
            <div className="profile-items" id="profile-items">
                <div className="profile-content-container">
                    <div className="profile-content">
                        <span>Hi &#9995;, this is </span>
                        <h1>{name}.</h1>
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
                {/* <div className="get-in-touch-container">
                    <a href={`mailto:${email}`} className="get-in-touch">Get In Touch</a>
                </div> */}
                <div className="profile-stats-container">
                    <img className = 'profile-stats-summary' src = {url} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    global: state.global,
})

const mapDispatchToProps = dispatch => ({
    initializeProfile: (payload) => dispatch(initProfile(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);