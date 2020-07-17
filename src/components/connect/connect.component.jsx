import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {initConnect} from './connect.actions.jsx';
import './connect.styles.scss';

const Connect = ({connections, initConnections}) => {

    useEffect(() => {
        initConnections();
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
        </div>
    )
}

const mapStateToProps = state => ({
    connections: state.connect.connections
})

const mapDispatchToProps = dispatch => ({
    initConnections: () => dispatch(initConnect()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Connect);