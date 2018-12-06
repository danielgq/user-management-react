import React, {Component} from 'react'

export default class FormItem extends Component{

    render(){
        const {lable, children} = this.props;
        return(
            <div className = "user-field">
                <span className = "user-field-name">{lable}</span>
                {children}
            </div>
        )
    }
}