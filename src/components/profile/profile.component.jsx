import React from 'react';
import {connect} from 'react-redux';
import RotateText from '../rotate-text/rotate.component.jsx';
import './profile.styles.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    handleLoad = () => {
        const animateElement = document.getElementById('profile-items');
        animateElement.classList.add('profile-items-fadein');
    }

    render() {
        const {name, animateText, alternateText, rotateText, typeTime, deleteTime, about, imageUrl, email} = this.props.user;
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
                                <img src={imageUrl} alt="profile" onLoad={this.handleLoad}/>
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
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Profile);