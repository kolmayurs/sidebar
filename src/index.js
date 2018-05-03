import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
	<Router>
	<div>
		<Route exact path='/' component={Sidebar}/>
		<Route path='/d/:gistId' component={App}/>
	</div>
	</Router>, document.getElementById('root'));

