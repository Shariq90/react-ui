import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {
    Row,
    Col,
    Glyphicon
  }from 'react-bootstrap';
import './style.css';

const heading = "National Holiday From Feb 15th 2018 - Feb 21st 2018";
class Footer extends Component {
    render() {
        return(
            <div  >
                <Row >
                    {/*        First  Column of Footer              */}
                    <Col md={4} id="footer-back" className="first-col">
                        <h2 className='footer-heading'>Latest News</h2>
                        <h2 className='news-heading'>{heading.length < 35 ? heading : heading.slice(0, 33) + '...'}</h2>
                        <p className='news-content'>We are in National Holiday From Feb 15th 2018- Feb 21st 2018, Some of c-gold  
                            and bank wire order will be pending due to unable to deal banking transaction.</p>
                    </Col>

                   {/*        Middle Column of Footer              */}
                    <Col md={4} id="footer-back" className="mid-col" >
                        <h2 className='footer-heading'>Links</h2>
                        <ul className='footer-icons'>
                            <li  >
                                 <Glyphicon glyph='glyphicon glyphicon-menu-right'><label> Buy </label></Glyphicon> 
                            </li>
                            <li >
                                 <Glyphicon glyph='glyphicon glyphicon-menu-right'><label> Sell </label></Glyphicon> 
                            </li>
                            <li >
                                 <Glyphicon glyph='glyphicon glyphicon-menu-right'><label> Exchange </label></Glyphicon> 
                            </li>
                            <li >
                                 <Glyphicon glyph='glyphicon glyphicon-menu-right'><label> Fees </label></Glyphicon> 
                            </li>
                            <li >
                                 <Glyphicon glyph='glyphicon glyphicon-menu-right'><label> FAQ </label></Glyphicon> 
                            </li>
                        </ul>
                    </Col>

                    {/*        Last Column of Footer              */}
                    <Col md={4} id="footer-back" className="last-col" >
                        <h2 className='footer-heading'>Contact Us</h2>
                        <span className='lastCol'> Travelex Currency Services Inc.
                        <br />
                        122 East 42nd Street
                        <br />
                        Suite 2800
                        <br />
                        New York, NY 10168
                        <br />
                        516-300-1622
                        <br />
                        877-414-6359
                        <br />
                        mail@ebuyexhange.com</span>
                    </Col>
                </Row>

                
                    <Row className='lower-layer'>
                        <Col md={12}>
                            <p> Copyright 2018 eBUYexchange Currency Services Inc. and its licensors. All rights reserved.</p>
                        </Col>
                    </Row>
                </div>
            
           
        );
    }
}

export default Footer;