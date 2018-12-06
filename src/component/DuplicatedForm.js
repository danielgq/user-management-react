import React, {Component} from 'react'
import FormItem from './FormItem'

export default class DuplicatedForm extends Component {
    render() {
        const {fields: {userName, age, gender, password}, onFieldChange} = this.props;
        return (
            <div>

                <FormItem lable="User Name">
                    <div className="user-field-input">
                        <input name="userName" value={userName} placeholder="Enter User Name"  onChange={onFieldChange} readOnly={this.props.type === 'edit' ? true : false}/>
                    </div>
                </FormItem>
                <FormItem lable="Age">
                    <div className="user-field-input">
                        <input name="age" value={age} onChange={onFieldChange}
                               placeholder="Enter Age"/>
                    </div>
                </FormItem>
                <FormItem lable="Gender">
                    <div className="user-field-input">
                        <select name="gender" value={gender} onChange={onFieldChange}>
                            <option value="">Please Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </FormItem>
                <FormItem lable="password">
                    <div className="user-field-input">
                        <input name="password" value={password} onChange={onFieldChange}
                               placeholder="Enter Password"/>
                    </div>
                </FormItem>
            </div>
        )

    }

}