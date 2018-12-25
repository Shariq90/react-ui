import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
    Table
} from 'react-bootstrap';
import '../style.css';

class HomeTable extends Component{
    render(){
        return(
            <div>
                <Table striped bordered condensed hover responsive >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>We Accept</th>
                        <th>Reserves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Perfect Money</td>
                        <td>21495.63 USD</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>ADVcash</td>
                        <td>5017.04 USD</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>WebMoney</td>
                        <td>3156.35 USD</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Ripple</td>
                        <td>30718.54 USD</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>BitCoin</td>
                        <td>34713.83 USD</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>c-Gold</td>
                        <td>54647.42 USD</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>Epay</td>
                        <td>34120.87 USD</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td>Tether USDT</td>
                        <td>35378.22 USD</td>
                        </tr>
                        <tr>
                        <td>9</td>
                        <td>Litecoin</td>
                        <td>33417.44 USD</td>
                        </tr>
                        <tr>
                        <td>10</td>
                        <td>Ethereum</td>
                        <td>25120.47 USD</td>
                        </tr>

                        
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default HomeTable;