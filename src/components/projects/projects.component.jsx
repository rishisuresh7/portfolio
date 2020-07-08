import React from 'react';
import './projects.styles.scss';
import Project from '../project/project.component.jsx';

const Projects = () => {
    const dataObjects = [{
        name: 'Reuse Store - Back End',
        image: './assets/img/reuse_store_backend.png',
        description: `A Golang based  REST API mux server used as the backend service for Resue Store - Front End project.
        Implements JWT tokens for login and authentication, API security is provided using secret key mechanism. Uses MONGO
        as backend database to save store details`,
        languages: ['Golang', 'JWT', 'MongoDB', 'Docker'],
        repoLink: 'https://github.com/rishisuresh7/shopping',
        projectLink: 'https://github.com/rishisuresh7/shopping'
    },{
        name: 'Reuse Store - Front End',
        image: './assets/img/reuse_store.png',
        description: `A simple website(basic functionalities) based on React which uses Redux for state management
            and redux sagas to make API calls. Component based architecture with each component
            being used as a state store as and when required. Also includes hooks and uses stripe checkouts for payments.`,
        languages: ['React.js', 'Redux', 'Firebase', 'Stripe'],
        repoLink: 'https://github.com/rishisuresh7/shopping',
        projectLink: 'https://rishisuresh7.github.io/Shopping-react'
    },{
        name: 'Ajax FootBall',
        image: './assets/img/ajax_football.png',
        description: `A static website developed at university level using the concept of AJAX to
            search a database for football players/teams and return relevant details`,
        languages: ['HTML', 'CSS', 'PHP', 'MySQL', 'Ajax'],
        repoLink: 'https://github.com/rishisuresh7/FootBall',
        projectLink: 'https://github.com/rishisuresh7/FootBall'
    },]
    return (
        <div className="projects" id="projects">
            <div className="projects-title">
                <h2>Some Projects I've Worked</h2>
            </div>
            {
                dataObjects.map((data, index) =>
                    <Project
                    key = { index }
                    image = { data.image }
                    data = { data }
                    isInverted = { index % 2 === 0 }
                    />)
            }
        </div>
    )
}

export default Projects;