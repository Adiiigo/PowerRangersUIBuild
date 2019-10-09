import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LogIn from './Login';
import Homepage from './HomePage.js'
//import Login from './Login';
import * as serviceWorker from './serviceWorker';
import HomePage from "./HomePage";
import Transfer from "./Transfer";
import Donation from "./Donation";
import { BrowserRouter as Router, Route } from "react-router-dom";

// function App() {

//     return (
//         <div>
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/home" component={HomePage} />
//         </div>
//     );

// }


ReactDOM.render(<HomePage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
