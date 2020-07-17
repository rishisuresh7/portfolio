import config from '../config.json';
import { INIT_HEADER } from '../components/header/header.types.jsx';
import { INIT_PROFILE } from '../components/profile/profile.types';
import { INIT_PROJECTS } from '../components/projects/projects.types.jsx';
import { INIT_SETTINGS } from '../components/settings/settings.types.jsx';
import { INIT_TECH_STACK } from '../components/tech-stack/tech-stack.types.jsx';
import { INIT_CONNECT } from '../components/connect/connect.types.jsx';
import { INIT_EXPERIENCE } from '../components/experience/experience.types.js';

export const initialize = (type) => {
    switch(type) {
        case INIT_HEADER:
            return initHeader(config.bio, config.styles);
        case INIT_PROFILE:
            return initProfile(config.bio);
        case INIT_PROJECTS:
            return initProjects(config.projectsInfo);
        case INIT_SETTINGS:
            return initSettings(config.styles);
        case INIT_TECH_STACK:
            return initTechStack(config.technologies);
        case INIT_CONNECT:
            return initConnect(config.connections);
        case INIT_EXPERIENCE:
            return initExperience(config.experience);
    }
}

const initHeader = (bio, styles) => {
    return {
        showIcon: styles && styles.settingsIcon ? styles.settingsIcon : false,
        showSettings: false,
        projectLogo: bio.projectLogo && bio.projectLogo ? bio.projectLogo : '',
        currentBackground: styles && styles.defaultBackground ? styles.defaultBackground : 'linear-gradient(to right, #000000, #434343)',
    }
}

const initProfile = (bio) => {
    return {
        title: bio && bio.pageTitle ? bio.pageTitle : '',
        name: bio && bio.name ? bio.name : '',
        rotateText: {
            primaryText: bio && bio.rotateText && bio.rotateText.primaryText ? bio.rotateText.primaryText: '',
            secondaryText: bio && bio.rotateText && bio.rotateText.secondaryText ? bio.rotateText.secondaryText : []
        },
        animateText: bio && bio.animateText ? bio.animateText : false,
        alternateText: bio && bio.alternateText ? bio.alternateText : '',
        typeTime: bio && bio.typeTime ? bio.typeTime : 200,
        deleteTime: bio && bio.deleteTime ? bio.deleteTime : 100,
        about: bio && bio.about ? bio.about : '' ,
        imageUrl: bio && bio.imageUrl ? bio.imageUrl : '',
        email: bio && bio.email ? bio.email : '',
        signature: bio && bio.signature ? bio.signature : ''
    }
}

const initProjects = (projects) => {
    let allProjects = [];
    if(projects && projects.projects && projects.projects.length) {
        allProjects = projects.projects.map(project => {
            return {
                name: project.name ? project.name : '',
                image: project.image ? project.image : '',
                description: project.description ? project.description : '',
                languages: project.languages ? project.languages : [],
                repoLink: project.repoLink ? project.repoLink : '',
                projectLink: project.projectLink ? project.projectLink : ''
            }
        });
    }

    return {
        projects: allProjects,
        heading: projects && projects.heading ? projects.heading : '',
    }
}

const initSettings = (settings) => {
    let allStyles = [];
    if (settings && settings.otherStyles && settings.otherStyles.length) {
        allStyles = settings.otherStyles.map(style => {
            return {
                name: style.name ? style.name : '',
                style: style.style ? style.style : ''
            }
        });
    }

    return {
        styles: allStyles
    }
}

const initTechStack = (technologies) => {
    let newTechStack = [];
    let i = 0 ;
    if (technologies && technologies.length) {
        newTechStack = technologies.map(tech => {
            return {
                id: i++,
                name: tech.name ? tech.name : '',
                icon: tech.icon ? tech.icon : ''
            }
        });
    }

    return {
        techStack: newTechStack
    }
}

const initConnect = (connections) => {
    let newConnections = [];
    let i = 0;
    if (connections && connections.length) {
        newConnections = connections.map(conn => {
            let linkType = 'fa fa-'
            linkType += conn.type ? conn.type : 'exclamation-triangle';
            if (conn.type && conn.type.toLowerCase().includes('mail')) {
                linkType = 'fa fa-envelope'
            }
            if (linkType.includes('instagram')) {
                linkType += ' large'
            }

            return {
                id: i++,
                link: conn.link ? conn.link : '',
                name: linkType
            }
        });
    }

    return {
        connections: newConnections
    }
}

const initExperience = (experience) => {
    let newItems = [];
    if(experience && experience.length) {
        newItems = experience.map(({companyName, jobDescription}, index) => {
            let newResponsibilities = [];
            if(jobDescription.responsibilities && jobDescription.responsibilities.length) {
                newResponsibilities = jobDescription.responsibilities.map((item, index) => {
                    return {
                        id: index,
                        text: item.responsibility
                    }
                })
            }

            let newDescription = {
                role: jobDescription && jobDescription.role ? jobDescription.role : '',
                period: jobDescription && jobDescription.period ? jobDescription.period : '',
                responsibilities: newResponsibilities
            };

            return {
                id: index + 1,
                name: companyName ? companyName: '',
                description: newDescription
            }
        })
    }

    return {
        items: newItems,
        selectedId: 1
    }
}