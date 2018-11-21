import React, {Component} from 'react'
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'

export default class UserEdit extends Component {

    static propTypes = {
        onEditUser: PropTypes.func
    }

    state = {
        userName: '',
        age: '',
        gender: '',
        password: '',
        visible: false,
        confirmLoading: false,
    }

    showModal = () => {
        this.setState({
            userName: this.props.user.userName.S,
            age: this.props.user.age.S,
            gender: this.props.user.gender.S,
            password: this.props.user.password.S,
            visible: true,
        });
    }

    handleOk = () => {
        this.props.onEditUser({
            userName: this.state.userName,
            age: this.state.age,
            gender: this.state.gender,
            password: this.state.password,
        })
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 1000);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }


    handleFieldChange = (event) => {
        const fieldName = event.target.name
        this.setState({
            [fieldName]: event.target.value
        })
    }


    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    render() {
        const {visible, confirmLoading, ModalText} = this.state;
        return (
            <div>
                <Button onClick={this.showModal}>
                   Edit
                </Button>
                <Modal title="Edit"
                       visible={visible}
                       onOk={this.handleOk}
                       confirmLoading={confirmLoading}
                       onCancel={this.handleCancel}
                >

                    <div className = "user-input">
                        <div className = "user-field">
                            <span className = "user-field-name">User Name</span>
                            <div className = "user-field-input">
                                <input name="userName"  value={this.state.userName}   readOnly={true}/>
                            </div>
                        </div>
                        <div className = "user-field">
                            <span className = "user-field-name">Age</span>
                            <div className = "user-field-input">
                                <input  name="age" placeholder={this.state.age} onChange={this.handleFieldChange} />
                            </div>
                        </div>

                        <div className = "user-field">
                            <span className = "user-field-name">Gender</span>
                            <div className = "user-field-input">
                                <input  name="gender" placeholder={this.state.gender} onChange={this.handleFieldChange} />
                            </div>
                        </div>

                        <div className = "user-field">
                            <span className = "user-field-name">Password</span>
                            <div className = "user-field-input">
                                <input  name="password" placeholder ={this.state.password} onChange={this.handleFieldChange} />
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        );
    }
}