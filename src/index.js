import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserManagement from './pages/UserManagement';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Login from './pages/Login.js'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <App/>,
    //<Router><Login/></Router>,
    document.getElementById('root')
);


