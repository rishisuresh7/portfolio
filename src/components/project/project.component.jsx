import React, {useEffect} from 'react';
import './project.styles.scss';
import ProjectImage from '../project-image/project-image.component.jsx';
import ProjectDetail from '../project-detail/project-detail.component.jsx';

const Project = ({isInverted, data, image}) => {
    useEffect(() => {
        document.addEventListener('scroll', () => {
            const doc = document.documentElement;
            var t = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
            const el = document.getElementById('projects');
            if ( el.offsetHeight -600 <= t && !el.hasAttribute('animated')) {
                const eles = document.getElementsByClassName('project');
                for(let i = 0; i < eles.length; i++)
                    eles[i].classList.add('fadein');
                el.setAttribute('animated', true);
            }
        })
    }, []);

    return (
        <div className="project">
            {
                isInverted ? 
                <React.Fragment>
                    <ProjectImage image={image}/>
                    <ProjectDetail {...data}/>
                </React.Fragment> :
                <React.Fragment>
                    <ProjectDetail {...data} isInverted/>
                    <ProjectImage image={image}/>
                </React.Fragment>
            }
        </div>
    )
}

export default Project;