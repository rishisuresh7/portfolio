import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {initTechStack} from './tech-stack.actions.jsx';
import Chip from '../chip/chip.component.jsx';
import './tech-stack.styles.scss';

const TechStack = ({techStack, initTechStack, global}) => {

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
        initTechStack(global);
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
                    iconUrl = {icon}
                />)
            }
        </div>
    </div>
}

const mapStateToProps = state => ({
    techStack: state.languages.techStack,
    global: state.global,
})

const mapDispatchToProps = dispatch => ({
    initTechStack: (payload) => dispatch(initTechStack(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TechStack);