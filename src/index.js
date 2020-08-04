import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';



ReactDOM.render(
    // Provide all the routing tools
    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById('root')
);