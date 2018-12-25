import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
    form,
    FormControl,Row , Col,Glyphicon,Button
  }from 'react-bootstrap';
import '../style.css';

class TabControl extends Component {
    render(){
        return(
            <div className='buy-tab'>
                <form>
                <Row className='top'>
                     <Col md={12}>
                        <span className='buy-tab-content'> Amount you want to buy(USD): </span>
                        <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                    </Col>
                </Row>

                <Row className='toptab'>
                     <Col md={5}>
                        <span className='buy-tab-content'> E-currency: </span>
                        <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                    </Col>

                    <Col md={2} xsHidden >
                        <center><Glyphicon className='tab-icon' glyph='glyphicon glyphicon-arrow-right'></Glyphicon></center>
                    </Col>

                    <Col md={5}>
                        <span className='buy-tab-content'> Payment: </span>
                        <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                    </Col>
                </Row>

                <Row className='toptab'>
                     <Col md={12} >
                        <span className='buy-tab-content'> Service Charges: </span>
                        <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                    </Col>
                </Row>

                <Row className='toptab'>
                     <Col md={12}>
                        <span className='buy-tab-content'> You have to send(USD): </span>
                        <FormControl id="formControlsText" type="text" label="Text" placeholder=""/>
                    </Col>
                </Row>

                <Row className='toptab'>
                     <Col md={12}>
                        <Button className='btn'>BUY</Button>
                    </Col>
                </Row>

                </form>
            </div>
        );
    }
}



export default TabControl ;