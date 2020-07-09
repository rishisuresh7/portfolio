import React from 'react';
import './project-detail.styles.scss';

const ProjectDetail = ({isInverted, name, description, languages, repoLink, projectLink}) => {
    const inverted = isInverted ? 'inverted' : '';
    return (
        <div className="project-detail">
            <div className={`project-detail-title ${inverted}`}>
                <h2>{name}</h2>
            </div>
            <div className={`project-detail-description ${inverted}`}>
                <p>
                {description}
                </p>
            </div>
            <div className="project-detail-tech">
                <div className={`tech ${inverted}`}>
                    {
                        languages.map((lang, index) => <p key = {index}>{lang}</p>)
                    }
                </div>
                <div className={`links ${inverted}`}>
                    <a href={projectLink} target='_blank'><i className="fas fa-external-link-alt small"></i></a>
                    <a href={repoLink} target='_blank'><i className="fa fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;