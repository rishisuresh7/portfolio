import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ExperienceDescription from '../experience-description/experience-description.component.jsx';
import {setSelectedId, initExperience} from './experience.actions.jsx';
import './experience.styles.scss';

const Experience = ({initExperience, setSelectedId, experience :{ items, selectedId, heading }}) => {
    const handleClick = (event) => {
        event.preventDefault();
        setSelectedId(parseInt(event.target.value));
    }

    useEffect(() => {
        initExperience();
        document.addEventListener('scroll', () => {
            const experienceDiv = document.getElementById('experience-items');
            if ((window.pageYOffset > experienceDiv.offsetTop/2) && !experienceDiv.classList.contains('fadein')) {
                experienceDiv.classList.add('fadein');
            }
        });
    }, []);

    const renderExperience = () => {
        return(
            <div className="experience" id="experience">
                <div className="experience-items" id="experience-items">
                    <div className="experience-heading">
                        <h2>{heading}</h2>
                    </div>
                    <div className="experience-container">
                        <div className="experience-titles">
                            <ul className="experience-titles-container">
                                {
                                    items.map(item => <button
                                    key = {item.id}
                                    className={`experience-title ${ selectedId === item.id ? 'active' : ''}`}
                                    onClick={handleClick}
                                    value={item.id}
                                    >
                                    {item.name}
                                    </button>)
                                }
                            </ul>
                        </div>
                        <div className="experience-descriptions">
                            <div className="experience-description-container">
                                <ExperienceDescription
                                name = {selectedItem.name}
                                description={selectedItem.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const selectedItem = items.find(item => item.id === selectedId);
    return (
        selectedItem ? renderExperience() : null   
    );
}

const mapStateToProps = state => ({
    experience: state.experience,
})

const mapDispatchToProps = dispatch => ({
    setSelectedId: id => dispatch(setSelectedId(id)),
    initExperience: () => dispatch(initExperience())
})

export default connect(mapStateToProps, mapDispatchToProps)(Experience);