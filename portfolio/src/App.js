import './App.css';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/experience' component={Experience} />
				<Route path='/projects' component={Projects} />
				<Route path='/skills' component={Skills} />
			</Switch>
		</div>
	);
}

export default App;
