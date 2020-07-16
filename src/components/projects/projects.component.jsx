import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Project from '../project/project.component.jsx';
import './projects.styles.scss';

const Projects = ({projects, projectsHeading}) => {

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const el = document.getElementById('projects');
            if ( window.pageYOffset + 400 > el.offsetTop && !el.hasAttribute('animated')) {
                const eles = document.getElementsByClassName('project');
                const eleh = document.getElementById("projects-title");
                eleh.classList.add('fadein');
                for(let i = 0; i < eles.length; i++)
                    eles[i].classList.add('fadein');
                el.setAttribute('animated', true);
            }
        });
    }, []);

    return (
        <div className="projects" id="projects">
            <div className="projects-title" id="projects-title">
                <h2>{projectsHeading}</h2>
            </div>
            {
                projects.map((data, index) =>
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

const mapStateToProps = state => ({
    projects: state.project.projects,
    projectsHeading: state.project.heading
})

export default connect(mapStateToProps)(Projects);