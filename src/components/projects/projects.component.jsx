import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import CustomCard from '../card/card.component.jsx';
import Chip from '../chip/chip.component.jsx';
import { initProjects } from './projects.actions.jsx';
import './projects.styles.scss';

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        }
        this.items = [];
    }

    componentDidMount() {
        this.props.initializeProjects();
        document.addEventListener('scroll', () => {
            const el = document.getElementById('projects');
            if ( window.pageYOffset + 400 > el.offsetTop && !el.hasAttribute('animated')) {
                const eleh = document.getElementById("projects");
                eleh.classList.add('fadein');
                el.setAttribute('animated', true);
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.projects !== nextProps.projects) {
            this.items = nextProps.projects;
            this.setState({selected: Math.floor(this.items.length/2)})
        }
    }

    handleClick = (direction) => {
        const selected = this.state.selected;
        if (direction === 'right') {
            let newPos = selected === 0 ? this.items.length - 1 : selected - 1;
            this.setState({selected: newPos})
        } else {
            let newPos = selected === this.items.length - 1 ? 0 : selected + 1;
            this.setState({selected: newPos})
        }
    }

    render () {
        return (
            <div className="projects" id="projects">
                <div className="projects-title" id="projects-title">
                    <h2>{this.props.projectsHeading}</h2>
                </div>
                <div className="projects-carousel">
                    <div className="projects-carousel-button">
                        <Chip
                            iconClass= 'fa fa-angle-left'
                            onClick = {() => this.handleClick('left')}
                            styles={{
                                marginLeft: 10,
                            }}
                        />
                    </div>
                    <div className="projects-carousel-cards">
                    {
                        this.items.map((item, key) => {
                            const left = 50 + (0.3*(this.state.selected - key)* 50)
                            const index = (this.state.selected - key) > 0 ? -(this.state.selected - key) : (this.state.selected - key)
                            return <CustomCard
                            key = {key}
                            content = {{
                                title: item.name,
                                period: item.name,
                                description: item.description,
                                image: item.image,
                                technologies: item.languages,
                                selected: key === this.state.selected,
                                left,
                                index
                            }}
                            />
                        })
                    }
                    </div>
                    <div className="projects-carousel-button">
                        <Chip
                            iconClass= 'fa fa-angle-right'
                            onClick = {() => this.handleClick('right')}
                            styles={{
                                marginRight: 10,
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.project.projects,
    projectsHeading: state.project.heading
})

const mapDispatchToProps = dispatch => ({
    initializeProjects: () => dispatch(initProjects())
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);