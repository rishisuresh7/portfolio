import React from 'react';
import './experience-description.styles.scss';

const ExperienceDescription = (props) => {
    const {name, description} = props;
    return(
        <div className="description">
            <div className="descpription-heading">
                <h2><span className="role">{description.role}</span> @ <span className="company">{name}</span></h2>
                <span>{description.period}</span>
            </div>
            <div className="description-details">
                <ul>
                    {
                        description.responsibilities.map(item => {
                            return <li key = {item.id}><p>{item.text}</p></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ExperienceDescription;