import React, { Component } from 'react'
import UserList from './UserList'
import UserInput from './UserInput'
import axios from 'axios';

export default class UserManagementManagement extends Component{

    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        this.getUserList()
    }

    getUserList(){

/*        $.get('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo/getuserlist', function (result) {
            let users = result.Items
            this.setState({users})
        }.bind(this));*/

        axios.get('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo/getuserlist').then((result)=>{
            let users = result.data.Items
            this.setState({users})
        }).catch((err)=>{
            console.log(err.status);
        })
    }

    saveUser(user){
        let params = {
            "userName": user.userName,
            "age": user.age,
            "gender": user.gender,
            "password": user.password
        }
        axios.post('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo/adduser',params).then((result) =>{

        }).catch((error) => {
            console.log('error!!!!' + error.toString());
        })

    }

    deleteUser(userName){
        let params = {
            "userName": userName
        }
        axios.delete('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo/deleteuser', {data: params}).then((result) =>
        {

        }).catch((error) => {
                console.log('error!!!!' + error.toString());
            }
        )
    }

    handlerSubmitUser(user){
        if(!user.userName.S){
            return alert('User Name is required!')
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
    }


    handlerDeleteUser(index){
        let users = this.state.users
        let user = users[index]
        users.splice(index,1)
        this.setState({users})
        this.deleteUser(user.userName.S)
    }

    render(){
        return(
            <div className="wrapper">
                <UserInput onSubmit = {this.handlerSubmitUser.bind(this)}/>
                <UserList users = {this.state.users} onDeleteUser = {this.handlerDeleteUser.bind(this)}/>
            </div>
        )
    }
}