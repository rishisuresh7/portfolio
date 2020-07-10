import React from 'react';
import './project.styles.scss';
import ProjectImage from '../project-image/project-image.component.jsx';
import ProjectDetail from '../project-detail/project-detail.component.jsx';

const Project = ({isInverted, data, image}) => {
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