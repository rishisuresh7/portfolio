import React from 'react';
import './chip.styles.scss';

const Chip = ({iconUrl, name, iconClass, onClick, styles}) => {
    return(
        <div onClick = {onClick} style={styles}  className={`chip ${iconClass ? 'carousel': ''}`}>
            {iconClass ?
                <i className = {iconClass} ></i> :
                <React.Fragment>
                    <img src={iconUrl} alt="icon"/>
                    <span>{name}</span>
                </React.Fragment>
            }
        </div>
    ) 
}

export default Chip;