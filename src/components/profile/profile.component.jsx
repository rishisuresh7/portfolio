import React from 'react';
import './profile.styles.scss';

class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            text: '',
            index: 0,
            textToRotate: [],
            isDeleting: false,
            element: {},
            time: 200,
            delTime: 100,
        }
    }

    handleLoad = () => {
        const animateElement = document.getElementById('profile-items');
        animateElement.classList.add('profile-items-fadein');
    }

    handleTick = (i = 0) => {
        const { text, textToRotate, index, isDeleting, element, time, delTime } = this.state;
        const timeOut = isDeleting ? delTime : time;
        const displayText = isDeleting? text.substring(0, i--) : text.substring(0, i++);

        element.innerHTML = displayText ? displayText : '';
        this.setState({...this.state, text: textToRotate[index]});
        if (i && i === text.length  ) {
            this.setState({...this.state, isDeleting: true});
        } else if ( isDeleting && i === 0 ) {
            const dataIndex = (index + 1) % textToRotate.length;
            this.setState({...this.state, isDeleting: false, index: dataIndex});
        }

        setTimeout(() => {
            this.handleTick(i);
        }, timeOut);
    }

    componentDidMount() {
        const element = document.getElementById('data-animate');
        const toRotate = element && element.getAttribute('data-rotate');
        this.setState({...this.state, textToRotate: JSON.parse(toRotate), element: element}, () => {
            this.handleTick();
        });
    }

    render() {
        return (
            <div className="profile" id="profile">
                <div className="profile-items" id="profile-items">
                    <div className="profile-content-container">
                        <div className="profile-content">
                            <span>Hi, this is </span>
                            <h1>Rishi Suresh.</h1>
                            <h2>I build things&nbsp;<span id='data-animate' data-rotate='["for the web.", "for the future."]'>
                                </span><span className='animate-cursor'></span></h2>
                            <p>
                            A software engineer based in Bangalore, India.
                            I enjoy creating things that live on the internet, whether that be websites, applications,
                            or anything in between. My goal is to always build products that provide performant experiences.
                            Shortly before graduating from Visvesvaraya Technological University, I joined the R&D team at Cast Software where I work
                            as a REST API developer in Golang.
                            </p>
                        </div>
                    </div>
                    <div className="profile-image-container">
                        <div className="profile-image-border">
                            <div className="profile-image">
                                <img src='./assets/img/compressed-removebg.png' alt="profile" onLoad={this.handleLoad}/>
                            </div>
                        </div>
                    </div>
                    <div className="get-in-touch-container">
                        <a href="mailto:rishi9632@gmail.com" className="get-in-touch">Get In Touch</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;