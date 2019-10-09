import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './Login';
import Homepage from './HomePage.js'
//import LogIn from './Login';
import * as serviceWorker from './serviceWorker';
import HomePage from "./HomePage";
import Transfer from "./Transfer";
import Donation from "./Donation";
import Switch from '@material-ui/core/Switch';
import { BrowserRouter as Router, Route } from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={LogIn}/>
            <Route exact path="/home" component={HomePage}/>

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
