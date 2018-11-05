import React, { Component } from 'react'

export default class UserInput extends Component{

    constructor(){
        super()
        this.state = {
            userName: '',
            age: '',
            gender: '',
            password: ''
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handlerAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = () => {
        if(this.props.onSubmit){
            this.props.onSubmit(this.state)
        }
        this.setState({
            userName: '',
            age: '',
            gender: '',
            password: ''
        })
    }

    render(){
        return(
            <div className = "user-input">
                <div className = "user-field">
                    <span className = "user-field-name">User Name</span>
                    <div className = "user-field-input">
                        <input  value={this.state.userName} onChange={this.handleUserNameChange}/>
                    </div>
                </div>
                <div className = "user-field">
                    <span className = "user-field-name">Age</span>
                    <div className = "user-field-input">
                        <input value={this.state.age} onChange={this.handlerAgeChange}/>
                    </div>
                </div>
                <div className = "user-field">
                    <span className = "user-field-name">Gender</span>
                    <div className = "user-field-input">
                        <input value={this.state.gender} onChange={this.handleGenderChange}/>
                    </div>
                </div>
                <div className = "user-field">
                    <span className = "user-field-name">Password</span>
                    <div className = "user-field-input">
                        <input value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                </div>

                <div className = "user-field-button">
                    <button onClick={this.handleSubmit}>Add</button>
                </div>
            </div>

        )
    }
}