import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
  Row ,Col,Glyphicon,Table
}from 'react-bootstrap';
import {
  Link
}from 'react-router-dom';
import '../style.css';
import Footer from '../footer';
import New from '../slider';

class Dashboard extends Component {
    
  render() {
      
    return (
        
      <div>
        <div className='container-fluid' id="buy-page">
          <Row > 
            <Col md={12} className='buy-layer'>
              <Glyphicon glyph='glyphicon glyphicon-home'> Dashboard</Glyphicon>
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
                <h2 class='dashboard-heading'> Account Summary </h2>
                <div className='top' id="adjust-table">  
                  <Table  bordered condensed responsive>
                    <tbody>
                        <tr>
                          <td className='maindash-class'>Username:</td>
                          <td>Sharry.aslam2@gamil.com</td> 
                        </tr>

                        <tr>
                          <td className='maindash-class'>Name:</td>
                          <td>Shariq Aslam</td>
                        </tr>

                        <tr>
                          <td className='maindash-class'>Country:</td>
                          <td >Pakistan</td>
                        </tr>

                        <tr>
                          <td className='maindash-class'>City:</td>
                          <td >Karachi</td>
                        </tr>

                        <tr>
                          <td className='maindash-class'>Mobile Number:</td>
                          <td >0342-2898214</td>
                        </tr>

                        <tr>
                          <td className='maindash-class' >Account Type:</td>
                          <td >Personal</td>
                        </tr>
                    </tbody>
                  </Table>
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

export default Dashboard;