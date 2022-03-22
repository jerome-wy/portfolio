import './App.css';
import React, { useState } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';

function App() {
	const [branding, setBranding] = useState(false);
	const [marketing, setMarketing] = useState(false);
	const [ecom, setEcom] = useState(false);
	const [retouching, setRetouching] = useState(false);
	const [clients, setClients] = useState(false);

	const handleClickBranding = () => {
		setBranding(!branding);
	};

	const handleClickMarketing = () => {
		setMarketing(!marketing);
	};

	const handleClickEcom = () => {
		setEcom(!ecom);
	};

	const handleClickRetouching = () => {
		setRetouching(!retouching);
	};

	const handleClickClients = () => {
		setClients(!clients);
	};

	const handleChangeBranding = () => {
		if (branding === true) {
			return '#9ea1a2';
		}
	};
	return (
		<div className='App'>
			<center>
				<img src='https://i.imgur.com/nqO3keQ.png' />
			</center>

			<center>
				<div className='white-box'> </div>
			</center>
			<h1 className=''>hello!</h1>

			<h1 className='hello' onClick={handleClickBranding}>
				branding
			</h1>
			{branding ? (
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<center>
						<button className='nav-btn'>let's create your aesthetic ></button>
					</center>
				</div>
			) : (
				''
			)}
			<h1 onClick={handleClickMarketing}>marketing</h1>

			{marketing ? (
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			) : (
				''
			)}

			<h1 onClick={handleClickEcom}>ecom</h1>

			{ecom ? (
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			) : (
				''
			)}

			<h1 onClick={handleClickRetouching}>retouching</h1>
			{retouching ? (
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			) : (
				''
			)}

			<h1 className='clients' onClick={handleClickClients}>clients</h1>
			{clients ? (
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			) : (
				''
			)}

			<div className='footer'></div>
		</div>
	);
}

export default App;
