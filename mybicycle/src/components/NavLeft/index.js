import React from 'react';
import MeunConfig from './../../config/menuConfig'
import logo from './../../assets/logo.png';
import './index.less'
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;

export default class NavLeft extends React.Component{
    //生命周期
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MeunConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
                )
            }
        })
    }
    render(){
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1>My wife</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
};