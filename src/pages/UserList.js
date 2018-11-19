import React, { Component } from 'react'
import UserInfo from "./UserInfo";
import { Divider } from 'antd';

export default class UserList  extends Component{

    static defaultProps = {
        users : []
    }

    handleDeleteUser = (index) => {
        if(this.props.onDeleteUser){
            this.props.onDeleteUser(index)
        }
    }

    handleEdituser = (user, index) => {
            this.props.onEditUser(user, index)
    }

    //
     columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    }, {
        title: 'Password',
        key: 'password',
        dataIndex: 'password',
    }, {
         title: 'Action',
         key: 'action',
         render: (text, record) => (
             <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
         ),
     }];


    //


    render(){

       return(
           //<Table columns={this.columns} dataSource={this.props.users}  />)
                    <div>
                       {this.props.users.map((user,i) => <UserInfo user = {user} key = {i} index = {i} onDeleteUser = {this.handleDeleteUser}
                       onEditUser = {this.handleEdituser}/> )}
                   </div>

               )


    }
}