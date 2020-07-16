const initState = {
    techStack: [
        {
            id: 1,
            name: 'Golang',
            icon: './assets/img/go-avatar.png'
        },
        {
            id: 2,
            name: 'Neo4j',
            icon: './assets/img/neo4j-avatar.png'
        },
        {
            id: 3,
            name: 'JavaScript',
            icon: './assets/img/js-avatar.png'
        },
        {
            id: 4,
            name: 'React.js',
            icon: './assets/img/react-avatar.png'
        },
        {
            id: 5,
            name: 'Redux',
            icon: './assets/img/redux-avatar.png'
        },
        {
            id: 6,
            name: 'Git',
            icon: './assets/img/git-avatar.png'
        },
        {
            id: 7,
            name: 'Docker',
            icon: './assets/img/docker-avatar.png'
        },
        {
            id: 8,
            name: 'Java',
            icon: './assets/img/java-avatar.png'
        },
        {
            id: 9,
            name: 'Python',
            icon: './assets/img/python-avatar.png'
        },
        {
            id: 10,
            name: 'Linux',
            icon: './assets/img/linux-avatar.png'
        },
        {
            id: 11,
            name: 'HTML',
            icon: './assets/img/html-avatar.png'
        },
        {
            id: 12,
            name: 'CSS/SCSS',
            icon: './assets/img/css-avatar.png'
        },
        {
            id: 13,
            name: 'Docker Compose',
            icon: './assets/img/docker-compose-avatar.png'
        },
        {
            id: 14,
            name: 'Jenkins',
            icon: './assets/img/jenkins-avatar.png'
        },
    ]
};

const techStackReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default techStackReducer;