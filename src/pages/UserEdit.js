import React, {Component} from 'react'
import {Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import FormProvider from '../highOrderComponents/FormProvider'
import DuplicatedForm from '../component/DuplicatedForm'

class UserEdit extends Component {

    static propTypes = {
        onEditUser: PropTypes.func
    }

    state = {
        visible: false,
        confirmLoading: false,
    }


    showModal = () => {
        const {user, setFormValues} = this.props
        setFormValues(user)
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        const {fields} = this.props;
        this.props.onEditUser(fields)
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
                    <div className="user-input">
                        <DuplicatedForm {...this.props} type = {'edit'}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

UserEdit = FormProvider()(UserEdit)

export default UserEdit;