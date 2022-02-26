import React from 'react';
import { Link } from 'react-scroll';
import { Animated } from 'react-animated-css';

export default function Home() {
	return (
		<div className='Home'>
			<div className='logo-div-container'>
				<div className='logo-container'>
					<Animated
						animationIn='slideInUp'
						isVisible={true}
						animationInDuration={1500}>
						<div className='logo j'>j</div>
					</Animated>

					<Animated
						animationIn='slideInDown'
						isVisible={true}
						animationInDuration={1500}>
						<div className='logo w'>w</div>
					</Animated>
				</div>
			</div>
			<div className='logo-title-container'>
				<li>software engineer</li>
				<li>full stack developer</li>
			</div>

			<div className='down-container'>
				<Link to='header' spy={true} smooth={true}>
					<button className='down'>get to know me!</button>
				</Link>
			</div>
		</div>
	);
}
