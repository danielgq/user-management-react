import React, {Component} from 'react'
import UserList from './UserList'
import UserInput from './UserInput'
import axios from 'axios';
import {Alert, Spin} from 'antd';
import Login from "./Login";
import {Redirect} from 'react-router-dom';


//const IP = 'localhost'
const IP = '54.65.96.178'
const apiGateWayPrefix = 'http://'+IP+':4000/demo/user/api?method=';

export default class UserManagementManagement extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            visible: false,
            message: '',
            messageType: '',
            needSpin: false
        }
    }

    componentDidMount() {
        const login = sessionStorage.getItem('Access-Token');
        console.log(login)
        axios.defaults.headers.common['Access-Token'] = login === null ? 123 : login;

        this.getUserList().then(result => {
            const status = result.status
            console.log(result)
            let users = result.data.content
            this.setState({users})
            const now = Date.now();
            sessionStorage.setItem('Access-Token', now);

        }).catch(err => {
            this.setState({
                visible: true,
                message: err.toString(),
                messageType: 'error',
                needSpin: true
            })
            sessionStorage.removeItem('Access-Token');
            setTimeout(() => {
                window.location.href = "http://"+IP+":3000/welcome";
            }, 5000);
            console.log('123123')
            console.log('error happens !!!!!!1' + err);
        })
    }


    async getUserList() {
        return await new Promise((resolve, reject) => {
                axios.post("http://"+IP+":4000/demo/user/api?method=getUsers").then((result) => {
                        resolve(result)
                    }
                ).catch((error) => {
                    reject(error);
                })
            }
        );
    }

    /*

//call aws directly
      /!*  axios.get('https://9qw4ir47zj.execute-api.ap-northeast-1.amazonaws.com/demo1/getuserlist'/!*,{timeout: 1000 * 60 * 1}*!/).then((result)=>{
            let users = result.data.Items
            this.setState({users})
        }).catch((err)=>{
            console.log('error happens !!!!!!1' + err.status);
        })*!/


      //test data
 /!*       let users = [{"userName":{"S":"Jack1"},"password":{"S":"1qazxsw2"},"gender":{"S":"male"},"age":{"S":"44"}},{"userName":{"S":"Lucy"},"password":{"S":"1qazxsw2"},"gender":{"S":"female"},"age":{"S":"18"}},{"userName":{"S":"12312"},"password":{"S":"123"},"gender":{"S":"3123"},"age":{"S":"312"}}];
        this.setState({users})*!/
    }*/

    async saveUser(user) {
        let params = {
            "userName": user.userName,
            "age": user.age,
            "gender": user.gender,
            "password": user.password
        }

        return await new Promise((resolve, reject) => {
                axios.post(apiGateWayPrefix + 'addUser', params).then((result) => {
                    resolve(result)
                    console.log('success!!!');
                }).catch((error) => {
                    reject(error)
                    console.log('error!!!!' + error.toString());
                })
            }
        );

    }

    deleteUser = (index) => {
        const login = sessionStorage.getItem('Access-Token');
        console.log(login)
        axios.defaults.headers.common['Access-Token'] = login === null ? 123 : login;

        let users = this.state.users
        let user = users[index]


        let params = {
            "userName": user.userName.S
        }
        axios.post(apiGateWayPrefix + 'deleteUser', {data: params}).then((result) => {
            console.log('success!!!');
            const now = Date.now();
            sessionStorage.setItem('Access-Token', now);
            users.splice(index, 1)
            this.setState({users})
        }).catch((err) => {
                this.setState({
                    visible: true,
                    message: err.toString(),
                    messageType: 'error',
                    needSpin: true
                })
                sessionStorage.removeItem('Access-Token');
                setTimeout(() => {
                    window.location.href = "http://"+IP+":3000/welcome";
                }, 5000);
                console.log('error happens !!!!!!1' + err);
            }
        )
    }

    editUser = (user) => {
        const login = sessionStorage.getItem('Access-Token');
        console.log(login)
        axios.defaults.headers.common['Access-Token'] = login === null ? 123 : login;

        let params = {
            "userName": user.userName,
            "age": user.age,
            "gender": user.gender,
            "password": user.password
        }
        axios.post(apiGateWayPrefix + 'editUser', params).then((result) => {
            console.log(' editUser success!!!');
            const now = Date.now();
            sessionStorage.setItem('Access-Token', now);
        }).catch((err) => {
                this.setState({
                    visible: true,
                    message: err.toString(),
                    messageType: 'error',
                    needSpin: true
                })
                sessionStorage.removeItem('Access-Token');
                setTimeout(() => {
                    window.location.href = "http://"+IP+":3000/welcome";
                }, 5000);
                console.log('error happens !!!!!!1' + err);

            }
        )
    }

    handlerSubmitUser = (user) => {
        if (!user.userName) {
            this.setState({
                visible: true,
                message: 'User name is required! !',
                messageType: 'error'
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

        //TODO
        const login = sessionStorage.getItem('Access-Token');
        console.log(login)
        axios.defaults.headers.common['Access-Token'] = login === null ? 123 : login;
        //
        this.saveUser(user).then(result => {
            const status = result.status
            const now = Date.now();
            sessionStorage.setItem('Access-Token', now);
            let users = this.state.users;
            users.push(formatedUser)
            this.setState({
                users,
                visible: true,
                message: 'Add a user successfully   !',
                messageType: 'success',
            })
            console.log('added a user !!!!!!1');
        }).catch(err => {
            this.setState({
                visible: true,
                message: err.toString(),
                messageType: 'error',
                needSpin: true
            })
            sessionStorage.removeItem('Access-Token');
            setTimeout(() => {
                window.location.href = "http://"+IP+":3000/welcome";
            }, 5000);
            console.log('error happens !!!!!!1' + err);
        })


    }


    handlerDeleteUser = (index) => {

        this.deleteUser(index)
        this.setState({
            visible: true,
            message: 'Delete a user successfully   !',
            messageType: 'success',
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
        users.splice(index, 1, formatedUser)
        this.editUser(user);
        this.setState({
            users,
            visible: true,
            message: 'Edit a user successfully   !',
            messageType: 'success',
        })
    }

    render() {
        return (
            <div className="wrapper">
                {
                    this.state.visible ? (
                        <Alert message={this.state.message} type={this.state.messageType} showIcon/> ) : null
                }
                {

                    this.state.needSpin ? (<Spin tip="Going to login page ..." size="large"/> ) : null
                }

                <UserInput onSubmit={this.handlerSubmitUser}/>
                <UserList users={this.state.users} onDeleteUser={this.handlerDeleteUser}
                          onEditUser={this.handleEdituser}/>

            </div>
        )
    }
}