import React, { Component } from 'react'
import UserEdit from './UserEdit'
import { Popconfirm, Button } from 'antd';
import PropTypes from 'prop-types'

export default class UserInfo extends Component{
    static propTypes = {
        onDeleteUser: PropTypes.func,
        onEditUser: PropTypes.func,
        index:PropTypes.number,
    }

    handlerDeleteUser = () => {
        if(this.props.onDeleteUser){
            this.props.onDeleteUser(this.props.index)
        }
    }

    handleEditUser = (user) => {
        this.props.onEditUser(user,this.props.index)
    }

    content = (
        <div>
            <p>Be careful before deleting it!!!!</p>
        </div>
    );


    render(){
        return(
            <div >
                <table className="tableWrapper">
                    <tr>
                        <td  width="10%" >
                        <span className="user-username">{this.props.user.userName.S} </span>
                        </td>
                        <td  width="10%" >
                            <span className="user-username">{this.props.user.age.S} </span>
                        </td>
                        <td  width="10%" >
                            <span className="user-username">{this.props.user.gender.S} </span>
                        </td>
                        <td width="10%">
                            <span className="user-username">{this.props.user.password.S} </span>
                        </td>
                        <td width="10%">
                            <UserEdit user={this.props.user} onEditUser = {this.handleEditUser}/>
                        </td>
                        <td width="10%">
                            <Popconfirm title="Are you sure delete this user?" onConfirm={this.handlerDeleteUser}  okText="Yes" cancelText="No">
                            <Button type="danger" >Delete</Button>
                            </Popconfirm>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}