import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserMenu from '../menu/UserMenu'
import {Layout} from 'antd';
import {ROUTES} from "../router/routes.config";
import _ from "lodash";

const routes = _.clone(ROUTES);

export default class Main1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ""
        }
    }

    render() {
        const {Header, Content, Footer} = Layout;
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <UserMenu/>
                    </Header>
                    <Content style={{padding: '0 50px'}}>
                        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                            {
                                routes.map((route) =>
                                    <Route exact key={route.key} path={route.link} component={route.component}/>)
                            }
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Created by Daniel ©2018 11.</Footer>
                </Layout>
            </Router>


        )
    }
}