import React from 'react';
import './settings.styles.scss';

const Settings = () => {
    const styles = [
        {
            name: 'Royal',
            style: 'linear-gradient(to right, #141e30, #243b55)'
        },
        {
            name: 'Sunset',
            style: 'linear-gradient(to right, #0b486b, #f56217)'
        },
        {
            name: 'Deep Space',
            style: 'linear-gradient(to right, #000000, #434343)'
        },
        {
            name: 'Dark Skies',
            style: 'linear-gradient(to right, #283e51, #4b79a1)'
        },
        {
            name: 'Netflix',
            style: 'linear-gradient(to right, #8e0e00, #1f1c18)'
        },
        {
            name: 'Lizard',
            style: 'linear-gradient(to right, #304352, #d7d2cc)'
        },
        {
            name: 'Curiousity Blue',
            style: 'linear-gradient(to right, #525252, #3d72b4)'
        },
        {
            name: 'Instagram',
            style: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)'
        },
        {
            name: 'Talking To Myself',
            style: 'linear-gradient(to right, #948e99, #2e1437)'
        },
        {
            name: 'Hersheys',
            style: 'linear-gradient(to right, #1e130c, #9a8478)'
        },
        {
            name: 'Between The Clouds',
            style: 'linear-gradient(to right, #73c8a9, #373b44)'
        }
    ];

    const mouseOver = (event) => {
       event.target.style.background = event.target.getAttribute('style-id');
    }

    const mouseLeave = (event) => {
        event.target.style.background = '';
    }

    return (
        <div className="settings-container">
            <div className="items">
                {
                    styles.map(({name, style}, index) =>
                    <span
                    key = {index}
                    style-id = {style}
                    onMouseOver = {mouseOver}
                    onMouseLeave = {mouseLeave}
                    >
                        {name}
                    </span>)
                }
            </div>
        </div>
    )
}

export default Settings;