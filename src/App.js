import React from 'react';
import './App.sass';
import routes from './routes';
import Nav from './Components/Nav/Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			{routes}
		</div>
	);
}

export default App;
