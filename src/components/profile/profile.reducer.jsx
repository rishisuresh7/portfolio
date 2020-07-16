const initState = {
    name: 'Rishi Suresh.',
    rotateText: {
        primaryText: 'I build things',
        secondaryText: ['for the web.', 'for the future.']
    },
    animateText: true,
    alternateText: 'I build things for the world.',
    typeTime: 200,
    deleteTime: 100,
    about: `A software engineer based in Bangalore, India.
            I enjoy creating things that live on the internet, whether that be websites, applications,
            or anything in between. My goal is to always build products that provide performant experiences.
            Shortly before graduating from Visvesvaraya Technological University, I joined the R&D team at Cast Software where I work
            as a REST API developer in Golang.`,
    imageUrl: './assets/img/compressed-removebg.png',
    email: 'rishi9632@gmail.com',
    signature: 'Developed By Rishi Suresh.'

}

const userDetails = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default userDetails;