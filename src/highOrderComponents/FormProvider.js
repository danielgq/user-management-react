import React, {Component} from 'react';

export default function CommonFormProvider(fields) {
    return function (Comp) {

        class FormComponent extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    fields
                }
            }

            handleFieldChange = (event) => {
                const fieldName = event.target.name;
                const {fields} = this.state;
                const newFields = {...fields, [fieldName] : event.target.value}
                this.setState({
                    fields: newFields
                })
            }

            setFormValues = (user) => {
                this.setState({
                    fields: {
                        userName: this.props.user.userName.S,
                        age: this.props.user.age.S,
                        gender: this.props.user.gender.S,
                        password: this.props.user.password.S,
                    }
                })
            }

            handleCleanFields = () =>{
                this.setState({
                    fields: {
                        userName: '',
                        age: '',
                        gender: '',
                        password: ''
                    }
                })
            }

            render() {
                const {fields} = this.state
                return <Comp {...this.props} fields = {fields} onFieldChange = {this.handleFieldChange} onFieldClean = {this.handleCleanFields}
                             setFormValues = {this.setFormValues}/>
            }
        }

        return FormComponent;
    }
}
