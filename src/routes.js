import React from 'react';
import { Switch, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import Licensing from './pages/Licensing/Licensing';
import AllProducts from './pages/AllProdutcs/AllProducts';
import Suits from './pages/Suits';
import Shoes from './pages/Shoes';
import Shirts from './pages/Shirts';
import ItemDetails from './Components/ItemDetails/ItemDetails';

export default (
	<Switch>
		<Route component={Home} exact path='/' />
		<Route component={Licensing} exact path='/licensing' />
		<Route component={AllProducts} exact path='/all_products' />
		<Route component={Suits} exact path='/suits' />
		<Route component={Shoes} exact path='/shoes' />
		<Route component={Shirts} exact path='/shirts' />
		<Route component={ItemDetails} path='/item-details/:id'/>
	</Switch>
);
