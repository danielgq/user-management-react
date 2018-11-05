import React, {Component} from 'react'
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';

export default class UserEdit extends Component {
    state = {
        userName: '',
        visible: false,
        confirmLoading: false,
    }

    showModal = () => {
        this.setState({
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
        }, 2000);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    handleFocusUserName = (event) => {
        this.setState({
            userName:''
        })
    }


    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    componentWillMount(){
        this.setState({userName: this.props.user.userName.S})
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
                                <input  value={this.state.userName} onChange={this.handleUserNameChange} onFocus={this.handleFocusUserName}/>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        );
    }
}