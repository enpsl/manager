import React from 'react'
import menuConfig from './../../config/menu'
import {Menu} from "antd";
import {Link} from "react-router-dom";
import "./index.less"
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component {
    state ={};
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuConfig)
        this.setState({
            menuTreeNode
        });
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <Link to={item.key}>{item.title}</Link>
            </Menu.Item>
        })
    };
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Psl</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}