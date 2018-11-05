import React, { Component } from 'react'
import UserEdit from './UserEdit'

export default class UserInfo extends Component{

    handlerDeleteUser = () => {
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
                <div >
                    <button className="ant-btn ant-btn-primary" onClick={this.handlerDeleteUser} >Delete</button>
                </div>
                <div >
                    <UserEdit user={this.props.user}/>
                </div>

            </div>
        )
    }
}