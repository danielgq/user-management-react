import React, { Component } from 'react'
import UserList from './UserList'
import UserInput from './UserInput'
import axios from 'axios';
import { Alert } from 'antd';

export default class UserManagementManagement extends Component{

    constructor(){
        super()
        this.state = {
            users: [],
            visible: false,
            message : '',
            messageType : '',
        }
    }

    componentDidMount(){
        this.getUserList()
    }

    getUserList = () => {

/*        $.get('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/getuserlist', function (result) {
            let users = result.Items
            this.setState({users})
        }.bind(this));*/

        axios.get('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/getuserlist'/*,{timeout: 1000 * 60 * 1}*/).then((result)=>{
            let users = result.data.Items
            this.setState({users})
        }).catch((err)=>{
            console.log('error happens !!!!!!1' + err.status);
        })

/*        let users = [{"userName":{"S":"Jack1"},"password":{"S":"1qazxsw2"},"gender":{"S":"male"},"age":{"S":"44"}},{"userName":{"S":"Lucy"},"password":{"S":"1qazxsw2"},"gender":{"S":"female"},"age":{"S":"18"}},{"userName":{"S":"12312"},"password":{"S":"123"},"gender":{"S":"3123"},"age":{"S":"312"}}];
        this.setState({users})*/
    }

    saveUser = (user) => {
        let params = {
            "userName": user.userName,
            "age": user.age,
            "gender": user.gender,
            "password": user.password
        }
        axios.post('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/adduser',params).then((result) =>{
            console.log('success!!!');
        }).catch((error) => {
            console.log('error!!!!' + error.toString());
        })

    }

    deleteUser = (userName) => {
        let params = {
            "userName": userName
        }
        axios.delete('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/deleteuser', {data: params}).then((result) =>
        {
            console.log('success!!!');
        }).catch((error) => {
                console.log('error!!!!' + error.toString());
            }
        )
    }

    editUser = (user) => {
        let params = {
            "userName": user.userName,
            "age": user.age,
            "gender": user.gender,
            "password": user.password
        }
        axios.put('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/updateUser',params).then((result) =>{
            console.log('success!!!');
        }).catch((error) => {
            console.log('error!!!!' + error.toString());
        })
    }

    handlerSubmitUser = (user) => {
        if(!user.userName){
            this.setState({
                visible : true,
                message : 'User name is required! !',
                messageType : 'error'
            })
            return;
        }

        let formatedUser = {
            "userName": {
                "S": user.userName
            },
            "password": {
                "S": user.password
            },
            "gender": {
                "S": user.gender
            },
            "age": {
                "S": user.age,
            }
        }

        let users = this.state.users;
        users.push(formatedUser)
        this.setState({users})
        this.saveUser(user)
        this.setState({
            visible:true,
            message : 'Add a user successfully   !',
            messageType : 'success',
        })
    }


    handlerDeleteUser = (index) => {
        let users = this.state.users
        let user = users[index]
        users.splice(index,1)
        this.setState({users})
        this.deleteUser(user.userName.S)
        this.setState({
            visible:true,
            message : 'Delete a user successfully   !',
            messageType : 'success',
        })
    }

    handleEdituser = (user, index) => {
        let users = this.state.users
        let formatedUser = {
            "userName": {
                "S": user.userName
            },
            "password": {
                "S": user.password
            },
            "gender": {
                "S": user.gender
            },
            "age": {
                "S": user.age,
            }
        }
        users.splice(index,1,formatedUser)
        this.setState({users})
        this.editUser(user)
        this.setState({
            visible:true,
            message : 'Edit a user successfully   !',
            messageType : 'success',
        })
}

    render(){
        return(
            <div className="wrapper">
                {
                    this.state.visible ? <Alert message={this.state.message} type={this.state.messageType} showIcon/> : null
               }
                <UserInput onSubmit = {this.handlerSubmitUser}/>
                <UserList users = {this.state.users} onDeleteUser = {this.handlerDeleteUser} onEditUser = {this.handleEdituser}/>

            </div>
        )
    }
}