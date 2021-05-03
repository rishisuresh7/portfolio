import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {initExperience} from '../experience/experience.actions.jsx';
import './experience.styles.scss';

const Experience = ({initExperience, experience}) => {

    useEffect(() => {
        initExperience();
        document.addEventListener('scroll', () => {
            const experienceDiv = document.getElementById('experience');
            if ((window.pageYOffset > experienceDiv.offsetTop/2) && !experienceDiv.classList.contains('fadein')) {
                experienceDiv.classList.add('fadein');
            }
        });
    }, []);

    return(
        <div className="experience-container" id="experience">
            <div className="experience-heading">
                <h2>{experience.heading}</h2>
            </div>
            <div className="experience-options">
                <div className="experience-option">
                    <h4><i className="fas fa-terminal"></i> BackEnd Software Development</h4>
                    <h5>@ CAST Software India Pvt. Ltd.</h5>
                    <p>
                        Develop scalable and independent microservices based on a multi tenant design. Work with a variety of different languages,
                        platforms and frameworks, such as Golang, JavaScript, Docker and Neo4j. Adjusted software parameters to boost performance
                        and incorporate new features for meeting increasing customer needs.
                    </p>
                </div>
                <div className="experience-option">
                    <h4><i className="fas fa-code-branch"></i> REST API Development</h4>
                    <h5>@ CAST Software India Pvt. Ltd.</h5>
                    <p>
                        Professional expertise in GO to develop REST API based micro-services. Gained knowledge on graph algorithms and
                        cypher query language in Neo4j to process millions of records on a day-to-day basis. Improved data retrieval times
                        by query tuning to perform tasks 4x faster.
                    </p>
                </div>
                <div className="experience-option">
                    <h4><i className="fab fa-docker"></i> Cloud Development</h4>
                    <h5>@ CAST Software India Pvt. Ltd.</h5>
                    <p>
                        Ability to manage multiple platform independent services using environment isolation and containerisation
                        with Docker and Docker-compose. Regressive strategies to improve personal and technical skills with great precision
                        by learning python and kubernetes.
                    </p>
                </div>
                <div className="experience-option">
                    <h4><i className="fab fa-jenkins" style={{fontWeight: 'bold'}}></i> Devops Development</h4>
                    <h5>@ CAST Software India Pvt. Ltd.</h5>
                    <p>
                        Created an Automation tool to perform ETL operations on a regular basis. Continuous Integration and deployment
                        using Jenkins with Git commit hooks. Consult with engineering team members to determine system loads and develop
                        and improvise improvement plans.
                    </p>
                </div>
                <div className="experience-option">
                    <h4><i className="fas fa-sitemap"></i> System Design</h4>
                    <h5>@ CAST Software India Pvt. Ltd.</h5>
                    <p>
                        Contributed in the development of independent interacting micro-services framework using a proxy service.
                        Consulted with engineering team members to determine system loads and develop improvement plans.
                        Maintained code coverages of more than 90% throughout the development cycle.
                    </p>
                </div>
                <div className="experience-option">
                    <h4><i className="fas fa-code"></i> FrontEnd Development</h4>
                    <h5>@ CAST Software India Pvt. Ltd.</h5>
                    <p>
                        Developed a few websites to incorporate new frameworks and technologies into the tech stack. In the constant process of learing,
                        adapted to software evolutions and improved the means of gaining knowledge. Open source contributions are in order.
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    experience: state.experience,
})

const mapDispatchToProps = dispatch => ({
    initExperience: () => dispatch(initExperience())
})

export default connect(mapStateToProps, mapDispatchToProps)(Experience);