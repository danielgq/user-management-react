import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";
import { ROUTES } from "../router/routes.config";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const routes = _.clone(ROUTES);

export default class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
        };
    }


    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu
                theme="dark"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                {routes.map((route) =>
                    <Menu.Item key={route.key}>
                        <Link to={route.link}><Icon type={route.iconType} /><b>{route.text}</b></Link>
                    </Menu.Item>
                )}

            </Menu>
        );
    }
}
