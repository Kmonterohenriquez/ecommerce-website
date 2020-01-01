import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Licensing from './pages/Licensing/Licensing'

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Licensing} exact path='/Licensing' />
		
	</Switch>
);
