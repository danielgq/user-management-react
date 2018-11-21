import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import PropTypes from 'prop-types'
export default class UserInput extends Component{

    static propTypes = {
        onSubmit:  PropTypes.func,
    }

    constructor(){
        super()
        this.state = {
            userName: '',
            age: '',
            gender: '',
            password: ''
        }
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

    handleFieldChange = (event) => {
        const fieldName = event.target.name
        this.setState({
            [fieldName]: event.target.value
        })
    }

    content = (
        <div>
            <p>Add A user now!!!!</p>
        </div>
    );
    render(){
        return(
            <div className = "user-input">
                <div className = "user-field">
                    <span className = "user-field-name">User Name</span>
                    <div className = "user-field-input">
                        <input  name="userName" value={this.state.userName} onChange={this.handleFieldChange} placeholder="Enter User Name"/>
                    </div>
                </div>
                <div className = "user-field">
                    <span className = "user-field-name">Age</span>
                    <div className = "user-field-input">
                        <input name="age"  value={this.state.age} onChange={this.handleFieldChange} placeholder="Enter Age"/>
                    </div>
                </div>
                <div className = "user-field">
                    <span className = "user-field-name">Gender</span>
                    <div className = "user-field-input">
                        <input name="gender" value={this.state.gender} onChange={this.handleFieldChange} placeholder="Enter Gender"/>
                    </div>
                </div>
                <div className = "user-field">
                    <span className = "user-field-name">Password</span>
                    <div className = "user-field-input">
                        <input name="password" value={this.state.password} onChange={this.handleFieldChange} placeholder="Enter Password"/>
                    </div>
                </div>

                <div className = "user-field-button">
                    <Popover content={this.content}>
                    <Button type="primary" onClick={this.handleSubmit}>Add</Button>
                    </Popover>
                </div>
            </div>

        )
    }
}