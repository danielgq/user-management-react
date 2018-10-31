import React, { Component } from 'react'

export default class UserInfo extends Component{

    handlerDeleteUser(){
        if(this.props.onDeleteUser){
            this.props.onDeleteUser(this.props.index)
        }
    }

    render(){
        return(
            <div className="user">
                <div className="user-user">
                   <span className="user-username">{this.props.user.userName.S} </span> |
                </div>
                <div className="user-user">
                    <span className="user-username">{this.props.user.age.S} </span> |
                </div>
                <div className="user-user">
                    <span className="user-username">{this.props.user.gender.S} </span> |
                </div>
                <div className="user-user">
                    <span className="user-username">{this.props.user.password.S} </span> |
                </div>
                <div className="user-delete">
                    <span onClick={this.handlerDeleteUser.bind(this)} >Delete</span>
                </div>
            </div>
        )
    }
}