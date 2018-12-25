import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
  Row,
  Col,
  Glyphicon
}from 'react-bootstrap';
import Footer from '../footer';
import New from '../slider';
import '../style.css';

class Buy extends Component {
    
  render() {
      
    return (
        
      <div className='container-fluid' id="buy-page">
        <Row > 
          <Col md={12} className='buy-layer'>
            <Glyphicon glyph='glyphicon glyphicon-home'> / Buy</Glyphicon>
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9} /* className='inline' */ >
            <h1 className='heading'>How to place buy order?</h1>
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9}>
            <ul className='list'>
              <li>Please click on signup button</li>
              <li>Fill the registration form and finish the process</li>
              <li>Login your account by user email and password</li>
              <li>Add E-currency account in my E-account option</li>
              <li>Click on place buy order option</li>
              <li>Type buy amount then select E-currency and payment by</li>
              <li>Click on preview and finally confirm order</li>
              <li>Check your mail inbox or spam folder for order details</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9} /* className='inline' */ >
            <h1 className='heading'>How to confirm order?</h1>
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9}>
            <ul className='list'>
              <li>First make payment as per order form instruction</li>
              <li>Go to current order list and click on order No. option</li>
              <li>Fill the form with payment information and click on confirm payment button</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9} /* className='inline' */ >
            <h1 className='heading'>Why we deliver?</h1>
          </Col>
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={9}>
            <ul className='list'>
              <li>After received Payment we will deliver within 1-24 hours</li>
            </ul>
          </Col>
        </Row>

        <Row className='top'>
          <Col md={1}></Col>
          <Col md={10} /* className='inline' */ >
            <h1 className='heading'>What do our Customers say about us?</h1>
          </Col>
        </Row>

        <Row >
          <Col md={1}></Col>
          <Col md={10} /* className='inline' */ >
            <New />
          </Col>
        </Row>
          

         <Footer />

      </div>
    );
  }
}

export default Buy;
