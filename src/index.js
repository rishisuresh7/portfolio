import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store.jsx';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';
import register from './registerServiceWorker.js';

const portfolioJson = "https://raw.githubusercontent.com/rishisuresh7/rishisuresh7/master/portfolio.json";

ReactDom.render(
    <Provider store= {store}>
        <BrowserRouter>
            <App url={portfolioJson} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

register();