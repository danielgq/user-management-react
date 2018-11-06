import React, {Component} from 'react'
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';

export default class UserEdit extends Component {
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

    handleFocusField = (event) => {
        const fieldName = event.target.name
        this.setState({
            [fieldName]: ''
        })

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
                <Button type="primary" onClick={this.showModal}>
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
                                <input name="userName"  value={this.state.userName} onChange={this.handleFieldChange} onFocus={this.handleFocusField}/>
                            </div>
                        </div>
                        <div className = "user-field">
                            <span className = "user-field-name">Age</span>
                            <div className = "user-field-input">
                                <input  name="age" value={this.state.age} onChange={this.handleFieldChange} onFocus={this.handleFocusField}/>
                            </div>
                        </div>

                        <div className = "user-field">
                            <span className = "user-field-name">Gender</span>
                            <div className = "user-field-input">
                                <input  name="gender" value={this.state.gender} onChange={this.handleFieldChange} onFocus={this.handleFocusField}/>
                            </div>
                        </div>

                        <div className = "user-field">
                            <span className = "user-field-name">Password</span>
                            <div className = "user-field-input">
                                <input  name="password" value={this.state.password} onChange={this.handleFieldChange} onFocus={this.handleFocusField}/>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        );
    }
}