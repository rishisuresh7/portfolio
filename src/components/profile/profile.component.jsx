import React from 'react';
import './profile.styles.scss';
import myImage from '../../assets/img/compressed-removebg.png';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-items">
                <div className="profile-content-container">
                    <div className="profile-content">
                        <span>Hi, my name is</span>
                        <h1>Rishi Suresh.</h1>
                        <h2>I build things for the web.</h2>
                        <p>
                        A software engineer based in Bangalore, India.
                        I enjoy creating things that live on the internet, whether that be websites, applications,
                        or anything in between. My goal is to always build products that provide performant experiences.
                        Shortly after graduating from VT University, I joined the R&D team at Cast Software where I work
                        as a REST API developer in Golang.
                        </p>
                    </div>
                </div>
                <div className="profile-image-container">
                    <div className="profile-image-border">
                        <div className="profile-image">
                            <img src={myImage} alt="profile"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;