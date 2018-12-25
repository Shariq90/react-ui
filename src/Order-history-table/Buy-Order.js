import React, { Component } from 'react';
/* import logo from './logo.svg'; */
import '../App.css';
import {
  Table
}from 'react-bootstrap';

class BuyOrder extends Component{
    render(){
        return(
            <div>
                <Table  bordered condensed hover responsive>
                    <thead id="order-history-column-heading">
                        <tr>
                        <th>ID</th>
                        <th>Sent From</th>
                        <th>Amount Send</th>
                        <th>Recive In</th>
                        <th>Amount Recieve</th>
                        <th>Status</th>
                        <th>Action</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1345</td>
                        <td>Bankwire</td>
                        <td>$300</td>
                        <td>Bitcoin</td>
                        <td>$280</td>
                        <td>Completed</td>
                        <td>None</td>
                        </tr>

                        <tr>
                        <td>1345</td>
                        <td>Bankwire</td>
                        <td>$300</td>
                        <td>Bitcoin</td>
                        <td>$280</td>
                        <td>Completed</td>
                        <td>None</td>
                        </tr>

                        <tr>
                        <td>1345</td>
                        <td >Bankwire</td>
                        <td>$300</td>
                        <td>Bitcoin</td>
                        <td>$280</td>
                        <td>Completed</td>
                        <td>None</td>
                        </tr>

                        <tr>
                        <td>1345</td>
                        <td >Bankwire</td>
                        <td>$300</td>
                        <td>Bitcoin</td>
                        <td>$280</td>
                        <td>Completed</td>
                        <td>None</td>
                        </tr>
                    </tbody>
                  </Table>
            </div>
        );
    }
}

export default BuyOrder;
