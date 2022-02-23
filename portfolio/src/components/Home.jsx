import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const { header, toggleHeader } = props;

	function showHeader() {
		if (header === true) {
			toggleHeader(false);
		}
	}

	return (
		<div className='Home'>
			<div className='home-title'>
				<h1>jerome wy</h1>
				<h2>software engineer + full stack developer</h2>
			</div>

			<div className='home-button'>
				<Link to='/about'>
					<button className='more-details-btn' onClick={showHeader}>
						let's network!
					</button>
				</Link>
			</div>
		</div>
	);
}
