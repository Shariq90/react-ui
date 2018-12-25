import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {
  Tabs,
  Tab, Row ,Col,Image
}from 'react-bootstrap';
import TabControl from './tabs/buytab';
import SellTab from './tabs/selltab';
import Exchangetab from './tabs/exchangetab';
import HomeTable from './tabs/table';
import New from './slider';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className='container-fluid' id="Mainpage">
        <div className='top' >
          <Row >
            <Col md={1}></Col>
            <Col md={5} id='maintabs'>
              <Tabs defaultActiveKey={1} animation={false} >
                <Tab eventKey={1} title="BUY">
                  <TabControl />
                </Tab>
                <Tab eventKey={2} title="SELL">
                  <SellTab />
                </Tab>
                <Tab eventKey={3} title="EXCHANGE" >
                  <Exchangetab />
                </Tab>
              </Tabs>
            </Col> 

            <Col md={1}></Col>
            <Col md={4} className='sideintro'>
              <h1 className='sidetitle'>eBUYexhange – THE E-CURRENCY EXCHANGE EXPERTS</h1>
              <p className='sidecontent'> We provide best rates, buy, sell and exchange E-currency with trust</p>
            </Col>

          </Row>
        </div>
        <div className='aboutUs'>
          <Row >
            <Col md={1}></Col>
            <Col md={4}>
              <HomeTable />
            </Col>

            <Col md={6}>
              <h1 className='aboutheading'>About Us</h1>
              <p className='aboutcontent'>Our exchanger ebuyexchange.com is one of biggest and well known companies in this market, we are 
                certified exchanger of most major electronic currencies. We were regularly awarded in various 
                polls, made by different online magazines about finances, Our team counts tens of qualified workers
                 from different countries, among those are certified accountants, lawyers, former bank employees, 
                 specialists in security and other spheres, related to finances. We have partnership with variety 
                 financial structures and serious law companies, our branches and representatives are located all 
                 around the world, so we are performing your orders in shortest terms at any time of day or night.
                  We will be glad to provide you almost any legal financial service possible. Our staff is speaking 
                  many languages, and we will surely find common language with any customer!We are the Official & 
                  Authorize Exchanger /Merchant of C-Gold.com , EgoPay.com , PerfectMoney.com</p>
            </Col>
          </Row>
        </div>

        <div>
          <Row className='services'>
            <Col md={12}>
              <h1 className='services-heading'>Our Services</h1>
              <p className='services-content'>Here you can buy, sell and exchange E-currency. Our site provides fast and secure exchanges 
                with the lowest fees. Please Signup or Login to use our services</p>
            </Col>
          </Row>
          <Row className='service-box'>
            <Col md={1}></Col>
            <Col md={3}>
              <div class="box">
                <Image src='images/credit-card.png' responsive />
                <h2 className='box-heading'>BUY</h2>
                <p className='box-content'>You can buy from a variety of E-currencies, by paying us amount in USD using the selected transfer option</p>
              </div>
            </Col>

            <Col md={3}>
              <div class="box">
                <Image src = "images/paper-bill.png" responsive />
                <h2 className='box-heading'>SELL</h2>
                <p className='box-content'>You can sell from a variety of E-currencies, by paying us amount in USD using the selected transfer option</p>
              </div>
            </Col>

            <Col md={3}>
              <div class="box">
                <Image src='images/exchange.png' responsive />
                <h2 className='box-heading'>EXCHANGE</h2>
                <p className='box-content'>You can exchange E-currency, you will pay the amount in selected E-currency, and will receive equavalent amount of exchanged E-currency</p>
              </div>
            </Col>
          </Row>
        </div>

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

export default App;
