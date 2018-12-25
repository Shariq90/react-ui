import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
    Row ,Col,Glyphicon,FormControl,Button
  }from 'react-bootstrap';
  import {
    Link
  }from 'react-router-dom';
  import '../style.css';
  import Footer from '../footer';
import New from '../slider';

class DashboardEditProfile extends Component {
    render(){
        return(
            <div className='container-fluid' id="buy-page">
                <Row > 
                <Col md={12} className='buy-layer'>
                    <Glyphicon glyph='glyphicon glyphicon-home'> Dashboard/Edit Profile</Glyphicon>
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
                    <h2 class='dashboard-heading'> Edit Profile</h2>
                    <div className="font-color">  
                        <form>
                            <Row className='top'>
                                <Col md={12}>
                                    <span className='buy-tab-content'> Userame: </span>
                                    <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                                </Col>
                            </Row>

                            <Row className='toptab'>
                                <Col md={12} >
                                    <span className='buy-tab-content'> Name: </span>
                                    <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                                </Col>
                            </Row>

                            <Row className='toptab'>
                                <Col md={12}>
                                    <span className='buy-tab-content'> Country: </span>
                                    <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                                </Col>
                            </Row>

                            <Row className='toptab'>
                                <Col md={12}>
                                    <span className='buy-tab-content'> City: </span>
                                    <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                                </Col>
                            </Row>

                            <Row className='toptab'>
                                <Col md={12}>
                                    <span className='buy-tab-content'> Mobile Number: </span>
                                    <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                                </Col>
                            </Row>

                            <Row className='toptab'>
                                <Col md={12}>
                                    <span className='buy-tab-content'> Account type: </span>
                                    <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                                </Col>
                            </Row>

                            <Row className='toptab'>
                                <Col md={12}>
                                    <Button className='btn'>Save Changes</Button>
                                </Col>
                            </Row>

                        </form>
                    </div>
                </Col>
            </Row>

            <Row className='top'>
                <Col md={1}></Col>
                <Col md={10} /* className='inline' */ >
                <   h1 className='heading'>What do our Customers say about us?</h1>
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

export default DashboardEditProfile;