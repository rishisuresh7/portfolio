import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store.jsx';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';
import './index.css';

ReactDom.render(
    <Provider store= {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);