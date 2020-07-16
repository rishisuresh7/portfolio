import config from '../config.json';
import { INIT_HEADER } from '../components/header/header.types.jsx';
import { INIT_PROFILE } from '../components/profile/profile.types';
import { INIT_PROJECTS } from '../components/projects/projects.types.jsx';
import { INIT_SETTINGS } from '../components/settings/settings.types.jsx';
import { INIT_TECH_STACK } from '../components/tech-stack/tech-stack.types.jsx';

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
    }
}

const initHeader = (bio, styles) => {
    return {
        showIcon: styles && styles.settingsIcon ? styles.settingsIcon : false,
        showSettings: false,
        projectLogo: bio.projectLogo && bio.projectLogo ? bio.projectLogo : ''
    }
}

const initProfile = (bio) => {
    return {
        name: bio.name && bio.name ? bio.name : '',
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
        currentBackground: settings && settings.defaultBackground ? settings.defaultBackground : 'linear-gradient(to right, #000000, #434343)',
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