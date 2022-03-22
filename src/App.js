import './App.css';
import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Jinger from './components/Jinger';

function App() {
	const [header, toggleHeader] = useState(true);
	return (
		<div className='App' id='outer-container'>
			<Header pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

			<div id='page-wrap'>
				<Home />
				<About />
				<Projects />
				<Skills />
				<Experience />
				<Footer />
			</div>
		</div>
	);
}

export default App;
