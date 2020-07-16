import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './connect.styles.scss';

const Connect = ({connections}) => {

    useEffect(() => {
        const connectElement = document.getElementById('connect-component');
        const mailElement = document.getElementById('mail-component');
        setTimeout(() => {
            connectElement.classList.add('display');
            mailElement.classList.add('display');
        }, 500);
    }, []);

    return(
        <div className="connect-component" id="connect-component">
            <div className="connect-container">
                {
                    connections.map(({name, link, id}) =>
                        <div key = {id} className="connect-item">
                            <a href={link} target="_blank"><i className = {`fa ${name}`}></i></a>
                        </div>
                    )
                }
            </div>
            <div className="connect-line">
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    connections: state.connect.connections
})

export default connect(mapStateToProps)(Connect);