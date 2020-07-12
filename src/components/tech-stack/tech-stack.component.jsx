import React, {useEffect} from 'react';
import './tech-stack.styles.scss';
import Chip from '../chip/chip.component.jsx';

const TechStack = () => {
    const techStack = [
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
    ];

    const  getRandomIndex = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const animate = (elements, i) => {
        for(let j = 0; j < elements.length; j++) {
            if(i === j) {
                elements[j].classList.add('animated');
            } else {
                elements[j].classList.remove('animated');
            }
        }

        setTimeout(() => {
            animate(elements, getRandomIndex(0, elements.length))
        }, 1000)

    }

    useEffect(() => {
        const element = document.getElementById('tech-stack');
        document.addEventListener('scroll', () => {
            if ( window.pageYOffset + 500 > element.offsetTop && !element.hasAttribute('animated')) {
                element.classList.add('fadein');
            }
        });
        animate(element.children, 6);
    }, [])

    return <div className="tech-stack-container" id="techSkills">
        <div className="tech-stack" id="tech-stack">
            {
                techStack.map(({name, icon, id}) =>
                <Chip
                    key = {id}
                    name = {name}
                    icon = {icon}
                />)
            }
        </div>
    </div>
}

export default TechStack;