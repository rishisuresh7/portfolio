import React from 'react';
import './chip.styles.scss';

const Chip = ({icon, name}) => {
    return(
        <div className="chip">
            <img src={icon} alt="icon"/>
            <span>{name}</span>
        </div>
    ) 
}

export default Chip;