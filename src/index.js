import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./redux/store";
import App from './App';
import './index.css';



ReactDOM.render(
    // Allow all the components to access Store object -
    // Stores all the states (data)
    <Provider store={store}>
        {/* Provide all the routing tools */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);