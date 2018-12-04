import React, {Component} from 'react';
import './App.css';
import Main from './pages/Main.js'
import Login from './pages/Login.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false
        }
    }

    componentDidMount() {
        const login = sessionStorage.getItem('Access-Token');
        this.setState({login});
        console.log(1111111111111111111111111111111111)
    }

    setLoginInfo = (login) => {
        this.setState({login});
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.login ? <Main /> : <Router><Login  setLoginInfo={this.setLoginInfo}/></Router>
                }
            </div>
        );
    }
}

export default App;
