import React from 'react';
import './experience.styles.scss';
import ExperienceDescription from '../experience-description/experience-description.component.jsx';

class Experience extends React.Component{
    constructor() {
        super();

        this.state = {
            items: [{
                    id: 1,
                    name: 'Cast Software',
                    isSelected: true,
                    description: {
                        role: 'Junior Software Engineer',
                        period: 'Feb 2019 - Present',
                        responsibilities: [{
                                id: 1,
                                text: 'Write modern, performant, maintainable code for a diverse array of client and internal projects'
                            },
                            {
                                id: 2,
                                text: `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,
                                TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify`
                            },
                            {
                                id: 3,
                                text: 'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
                            }
                        ]
                    },
                },
                {
                    id: 2,
                    name: 'Keitai Technologies',
                    isSelected: false,
                    description: {
                        role: 'WD Intern',
                        period: 'Jan 2019 - Feb 2019',
                        responsibilities: [{
                                id: 1,
                                text: 'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
                            },
                            {
                                id: 2,
                                text: 'Write modern, performant, maintainable code for a diverse array of client and internal projects'
                            },
                            {
                                id: 3,
                                text: `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,
                                TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify`
                            }
                        ]
                    },
                },
                {
                    id: 3,
                    name: 'Azure Skynet',
                    isSelected: false,
                    description: {
                        role: 'Summer Trainee',
                        period: 'Aug 2017 - Aug 2017',
                        responsibilities: [{
                                id: 1,
                                text: `Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript,
                                TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify`
                            },
                            {
                                id: 2,
                                text: 'Write modern, performant, maintainable code for a diverse array of client and internal projects'
                            },
                            {
                                id: 3,
                                text: 'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
                            }
                        ]
                    },
                }
            ],
            selectedId: 1,
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({...this.state, selectedId: parseInt(event.target.value) });
    }

    render() {
        const {items, selectedId} = this.state;
        const selectedItem = items.find(item => item.id === selectedId);
        return (
            <div className="experience">
                <div className="experience-items">
                    <div className="experience-heading">
                        <h2>Where I've Worked</h2>
                    </div>
                    <div className="experience-container">
                        <div className="experience-titles">
                            <ul className="experience-titles-container">
                                {
                                    items.map(item => <button
                                    key = {item.id}
                                    className={`experience-title ${ selectedId === item.id ? 'active' : ''}`}
                                    onClick={this.handleClick}
                                    value={item.id}
                                    >
                                    {item.name}
                                    </button>)
                                }
                            </ul>
                        </div>
                        <div className="experience-descriptions">
                            <div className="experience-description-container">
                                <ExperienceDescription
                                name = {selectedItem.name}
                                description={selectedItem.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;