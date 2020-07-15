import React from 'react';
import {connect} from 'react-redux';
import {setBackground} from './settings.actions.jsx';
import './settings.styles.scss';

const Settings = ({currentBackground, styles, setBackground}) => {
    const mouseOver = (event) => {
       event.target.style.background = event.target.getAttribute('style-id');
    }

    const mouseLeave = (event) => {
        event.target.style.background = '';
    }

    const handleClick = (event) => {
        const elements = ["header", "root", "settings"];
        setBackground(event.target.getAttribute('style-id'))
        for(let i = 0; i < elements.length; i++) {
            document.getElementById(elements[i]).style.background = event.target.getAttribute('style-id');
        }
    }

    return (
        <div className="settings-container" id='settings'>
            <div className="items">
                {
                    styles.map(({name, style}, index) =>
                    <span
                    key = {index}
                    style-id = {style}
                    onMouseOver = {mouseOver}
                    onMouseLeave = {mouseLeave}
                    onClick = {handleClick}
                    >
                        {name}
                    </span>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentBackground: state.globalStyle.currentBackground,
    styles: state.globalStyle.styles
})

const mapDispatchToProps = dispatch => ({
    setBackground: (background) => dispatch(setBackground(background))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);