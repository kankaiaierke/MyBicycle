import React from 'react';
import { Row,Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

export default class Admin extends React.Component{
    render(){
       return (
           <Row className="container">
             <Col span="3">
                <NavLeft></NavLeft>
             </Col>
             <Col span="21" className="main">
                <Header></Header>
                <Row className="content">
                  Content
                </Row>
                <Footer></Footer>
             </Col>
           </Row>
       );
    }
};
