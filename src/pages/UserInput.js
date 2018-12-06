import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import PropTypes from 'prop-types'
import FormProvider from '../highOrderComponents/FormProvider'
import DuplicatedForm from '../component/DuplicatedForm'

class UserInput extends Component{

    static propTypes = {
        onSubmit:  PropTypes.func,
    }

    handleSubmit = () => {
        const {fields, onFieldClean} = this.props;
        if(this.props.onSubmit){
            this.props.onSubmit(fields)
        }
        onFieldClean();

    }

    content = (
        <div>
            <p>Add A user now !!!</p>
        </div>
    );
    render(){
        return(
            <div className="user-input">
                <DuplicatedForm {...this.props}/>
                <div className="user-field-button">
                    <Popover content={this.content}>
                        <Button type="primary" onClick={this.handleSubmit}>Add</Button>
                    </Popover>
                </div>
            </div>

        )
    }
}

UserInput = FormProvider({
    userName: '',
    age: '',
    gender: '',
    password: ''
})(UserInput)

export default UserInput;