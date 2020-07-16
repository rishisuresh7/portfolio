const initState = {
    connections: [
        {
            id: 1,
            link: 'https://www.linkedin.com/in/rishi-suresh/',
            name: 'fa-linkedin' ,
        },
        {
            id: 2,
            link: 'https://github.com/rishisuresh7',
            name: 'fa-github' ,
        },
        {
            id: 3,
            link: 'tel:+918792615476',
            name: 'fa-phone' ,
        },
        {
            id: 4,
            link: 'mailto:rishi9632@gmail.com',
            name: 'fa-envelope' ,
        },
        {
            id: 5,
            link: 'https://www.instagram.com/rishisuresh7/',
            name: 'fa-instagram large' ,
        },
    ],
}

const connections = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default connections;