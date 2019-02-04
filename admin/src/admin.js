import React from 'react'
import {Col, Row} from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import "./style/common.less"
import Home from "./pages/home";

export default class Admin extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    {/*头部区域*/}
                    <Header/>
                    {/*头部区域结束*/}
                    {/*内容区域*/}
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    {/*内容区域结束*/}
                    {/*尾部区域*/}
                    <Footer/>
                    {/*尾部区域结束*/}
                </Col>
            </Row>
        );
    }
}