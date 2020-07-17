import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setBackground, initSettings} from './settings.actions.jsx';
import './settings.styles.scss';

const Settings = ({currentBackground, styles, setBackground, initSettings}) => {

    useEffect(() => {
        initSettings();
    }, []);

    const mouseOver = (event) => {
       event.target.style.background = event.target.getAttribute('style-id');
    }

    const mouseLeave = (event) => {
        event.target.style.background = '';
    }

    const handleClick = (event) => {
        setBackground(event.target.getAttribute('style-id'));
        localStorage.setItem('background', event.target.getAttribute('style-id'));
    }

    const style = {
        background: currentBackground,
    }

    return (
        <div className="settings-container" id='settings' style={style}>
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
    setBackground: (background) => dispatch(setBackground(background)),
    initSettings: () => dispatch(initSettings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);