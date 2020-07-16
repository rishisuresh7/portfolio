import { SET_SELECTED_IT } from './experience.types.js';
const initState = {
    items: [{
            id: 1,
            name: 'Cast Software',
            description: {
                role: 'Junior Software Engineer',
                period: 'Feb 2019 - Present',
                responsibilities: [
                    {
                        id: 1,
                        text: 'Develop scalable and independent microservices based on a multi tenant design.'
                    },
                    {
                        id: 2,
                        text: `Work with a variety of different languages, platforms and frameworks,
                                such as Golang, JavaScript, Docker and Neo4j.`
                    },
                    {
                        id: 3,
                        text: 'Consult with engineering team members to determine system loads and develop and improvise improvement plans.'
                    },
                    {
                        id: 4,
                        text: `Test troubleshooting methods, devise innovative solutions, and document resolutions for 
                                inclusion in knowledge base for usage by support team.`
                    }
                ]
            },
        },
        {
            id: 2,
            name: 'Keitai Technologies',
            description: {
                role: 'WD Intern',
                period: 'Jan 2019 - Feb 2019',
                responsibilities: [{
                        id: 1,
                        text: 'Work on different HTML pages designed for web, cross built for a web application.'
                    },
                    {
                        id: 2,
                        text: 'Design REST API calls to a microservice hosted on AWS to provide authentication on the web-app.'
                    },
                    {
                        id: 3,
                        text: `Gain a better knowledge on RESTful API's and error schemes, improve knowledge in JS and some frameworks.`
                    }
                ]
            },
        },
        {
            id: 3,
            name: 'Azure Skynet',
            description: {
                role: 'Summer Trainee',
                period: 'Aug 2017 - Aug 2017',
                responsibilities: [{
                        id: 1,
                        text: `Build proficiency in different networking tools such as nmap, zenmap, wireshark etc..`
                    },
                    {
                        id: 2,
                        text: 'Study the aspects of social engineering to understand in a better way, loopholes in security.'
                    },
                    {
                        id: 3,
                        text: `Re-iterate on networking models IPv4/IPv6 to understand networking protocols, 
                                NAT and other network transmission scenarios`
                    }
                ]
            },
        }
    ],
    selectedId: 1,
}

const setExperience = (state = initState, action) => {
    switch(action.type) {
        case SET_SELECTED_IT:
            return {
                ...state,
                selectedId: action.payload
            }
        default:
            return state
    }
}

export default setExperience;