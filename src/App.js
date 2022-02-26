import './App.css';
import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	const [header, toggleHeader] = useState(true);
	return (
		<div className='App'>
			{/* {!header ? <Header /> : ''} */}
			<Switch>
				{/* <Route
					exact
					path='/'
					component={(props) => (
						<Home {...props} header={header} toggleHeader={toggleHeader} />
					)}
				/> */}
				{/* <Route path='/about' component={About} />
				<Route path='/experience' component={Experience} />
				<Route path='/projects' component={Projects} />
				<Route path='/skills' component={Skills} /> */}
			</Switch>
			<Home />
			<Header />
			<About />

			<Projects />
			<Skills />
			<Experience />
		</div>
	);
}

export default App;
