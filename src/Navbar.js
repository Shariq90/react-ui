import React , {Component} from 'react';
import {
    Link
}from 'react-router-dom';
import {
    Nav , 
    NavItem,
    Navbar
}from 'react-bootstrap';
import './style.css';

class Navbars extends Component {
    render(){
        return(
            <Navbar default collapseOnSelect className="mainnav" fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span className="logonav" >eBUYexchange</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight className='navitem'>
                        <NavItem eventKey={1} >
                            <Link to='/'>Home</Link>
                        </NavItem>
                        <NavItem eventKey={3} >
                        <Link to='/Pages/Buy'>Buy</Link>
                        </NavItem>
                        <NavItem eventKey={4} >
                        <Link to='/Pages/Sell'>Sell</Link>
                        </NavItem>
                        <NavItem eventKey={5} >
                        <Link to='/Pages/Exchange'>Exchange</Link>
                        </NavItem>
                        <NavItem eventKey={6} >
                        <Link to='/Pages/FAQ'>FAQ</Link>
                        </NavItem>
                        <NavItem eventKey={7} >
                        <Link to='/Pages/Dashboard'>Dashboard</Link>
                        </NavItem>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbars ;