import './App.css';
import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
	return (
		<div className='App'>
			
			<nav>
				{/* <Header /> */}
			</nav>
<Switch>
	<Route exact path='/' component={Home} />
	<Route exact path='/about' component={About} />
	<Route exact path='/experience' component={Experience} />
	<Route exact path='/projects' component={Projects} />
	<Route exact path='/skills' component={Skills} />
	
</Switch>

			
		</div>
	);
}

export default App;
