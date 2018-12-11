import React, {Component} from 'react'
import { Button, Alert } from 'antd';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import axios from 'axios';


//const IP = 'localhost'
const IP = '54.65.96.178'
class Login extends Component{

    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    constructor(){
        super()
        this.state = {
            adminName: '',
            adminPassword: '',
            visible: false,
            message: '',
            messageType: ''
        }
    }

    handleFieldChange = (event) => {
        const fieldName = event.target.name
        this.setState({
            [fieldName]: event.target.value
        })
    }

    async login(adminName, adminPassword){

        let params = {adminName, adminPassword};
        return await new Promise((resolve, reject) => {
            axios.post('http://'+IP+':4000/demo/user/api/login',params ).then((result) => {
                resolve(result)
            }).catch(error => {
                reject(error)
            })

        })
    }

    handleSubmit = (e) => {
        const {adminName,  adminPassword} = this.state;
        this.login(adminName,  adminPassword).then((result) => {
            const status = result.status;
            const token = result.data.content.token;
            console.log('get token => ' + token);
            sessionStorage.setItem('Access-Token',token)
            this.props.setLoginInfo(true)
            this.props.history.push('/welcome');
        }).catch(error =>{
            console.log('login failed ' + error)
            this.setState({
                visible:true,
                message : 'Admin name or password is not correct !!!',
                messageType : 'error',
            })
            console.log('error happens !!!!!!1' + error);
            return;
        })


    }


    render(){
        return(
            <div className="login-wrapper">
            <div className="login-body">
                {
                    this.state.visible ? (
                        <Alert message={this.state.message} type={this.state.messageType} showIcon/> ) : null
                }
                <header className="login-header">
                    User Management
                </header>
                <section className="login-form">
                <div className = "user-field-input">
                    <input  name="adminName" value={this.state.adminName} onChange={this.handleFieldChange} placeholder="Enter admin name"/>
                </div>
                    <br/>
                <div className = "user-field-input">
                    <input  name="adminPassword" value={this.state.adminPassword} onChange={this.handleFieldChange} type='password' placeholder="Enter admin password"/>
                </div>
                    <br/>
                <Button type="primary" onClick={this.handleSubmit}>Login</Button>
                </section>
            </div>
            </div>
        )
    }
}


export default withRouter(Login);
