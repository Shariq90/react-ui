import React , {Component} from 'react';
import {
    Router,
    Route
}from 'react-router-dom';
import App from './App';
import createBrowserHistrory from 'history/createBrowserHistory';
import Navbars from './Navbar';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell';
import Exchange from './Pages/Exchange';
import FAQ from './Pages/FAQ';
import Dashboard from './Pages/Dashboard';
import DashboardBuy from './Dashboard.js/buy';
import DashboardSell from './Dashboard.js/sell';
import DashboardExchange from './Dashboard.js/exchange';
import DashboardEditProfile from './Dashboard.js/edit-profile';
import DashboardChangePass from './Dashboard.js/change-password';
import DashboardVerify from './Dashboard.js/verify-account';
import DashboardOrder from './Dashboard.js/order-history';



const BrowserHistory = createBrowserHistrory();

class Routes extends Component {
    render(){
        return(
            <Router history={BrowserHistory}>
                <div>

                    <Navbars />

                    
                    
                    <Route  exact path='/' component={App} />
                    <Route path='/Pages/Buy' component={Buy} />
                    <Route path='/Pages/Sell' component={Sell} />
                    <Route path='/Pages/Exchange' component={Exchange} />
                    <Route path='/Pages/FAQ' component={FAQ} />
                    <Route path='/Pages/Dashboard' component={Dashboard} />


                    <Route path='/Dashboard/buy' component={DashboardBuy} />
                    <Route path='/Dashboard/sell' component={DashboardSell} />
                    <Route path='/Dashboard/exchange' component={DashboardExchange} />
                    <Route path='/Dashboard/edit-profile' component={DashboardEditProfile} />
                    <Route path='/Dashboard/change-password' component={DashboardChangePass} />
                    <Route path='/Dashboard/verify-account' component={DashboardVerify} />
                    <Route path='/Dashboard/order-history' component={DashboardOrder} />



                    
                </div>
            </Router>
        );
    }
    
    
}

export default Routes;
