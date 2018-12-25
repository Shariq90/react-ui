import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
  Row ,Col,Glyphicon
}from 'react-bootstrap';
import {
  Link
}from 'react-router-dom';
import '../style.css';
import Footer from '../footer';
import New from '../slider';
import BuyOrder from '../Order-history-table/Buy-Order';

class DashboardOrder extends Component {
    
  render() {
      
    return (
        
      <div>
        <div className='container-fluid' id="buy-page">
          <Row > 
            <Col md={12} className='buy-layer'>
              <Glyphicon glyph='glyphicon glyphicon-home'> Dashboard/Order Histroy</Glyphicon>
            </Col>
         </Row>
          <Row>
            <Col md={1}  ></Col>
            <Col md={3} className='left'> {/* for mobile padding-right */}
              <ul className='dashboard'>
                <li className='navitem' >
                  <Link to='/Pages/Dashboard'><span>Dashboard</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/buy'><span>Buy</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/sell'><span>Sell</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/exchange'><span>Exchange</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='#'><span>My Account</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/order-history'><span>Order Histroy</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/edit-profile'><span>Edit Profile</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/verify-account'><span>Verify Account</span></Link> 
                </li>
                <li className='navitem'>
                  <Link to='/Dashboard/change-password'><span>Change Password</span></Link>  
                </li>
                <li className='navitem'>
                  <Link to='#'><span>Sign Out</span></Link>  
                </li>
              </ul>
            </Col>

        
              
              <Col md={7} className='dashboard-result-box'>
                <h2 class='dashboard-heading'> Buy Order Statistics </h2>
                <div className='font-color'>
                    <div className='top' id="adjust-table">  
                    <BuyOrder />
                    </div>
                </div>

                <h2 class='dashboard-heading' id="order-histroy-table-top"> Sell Order Statistics </h2>
                <div className='font-color'>
                    <div className='top' id="adjust-table">  
                    <BuyOrder />
                    </div>
                </div>

                <h2 class='dashboard-heading' id="order-histroy-table-top"> Exchange Order Statistics </h2>
                <div className='font-color'>
                    <div className='top' id="adjust-table">  
                    <BuyOrder />
                    </div>
                </div>
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
      </div>
    );
  }
}

export default DashboardOrder;