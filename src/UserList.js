import React, { Component } from 'react'
import UserInfo from "./UserInfo";

export default class UserList  extends Component{

    static defaultProps = {
        users : []
    }

    handleDeleteUser = (index) => {
        if(this.props.onDeleteUser){
            this.props.onDeleteUser(index)
        }
    }

    render(){

        return(
            <div>
                {this.props.users.map((user,i) => <UserInfo user = {user} key = {i} index = {i} onDeleteUser = {this.handleDeleteUser}/> )}
            </div>

        )
    }
}