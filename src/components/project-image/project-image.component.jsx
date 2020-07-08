import React from 'react';
import './project-image.styles.scss';

const ProjectImage = ({image}) => {
    return(
        <div className="project-image-container">
            <div className="project-image"
            style= {{
                backgroundImage: `url('${image}')`
            }}
            ></div>
        </div>
    )
}

export default ProjectImage;