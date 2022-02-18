import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className='Home'>
			<div className='home-left-container'>
				<div className='home-logo-j'>j</div>
				<div className='home-logo-w'>w</div>
			</div>

			<div className='home-right-container'>
				<h1>jerome wy</h1>
				<h2>FULL STACK DEVELOPER</h2>

				<Link to='/about'>
					<button className='more-details-btn'>let's network!</button>
				</Link>
			</div>
		</div>
	);
}
