import React from 'react';
import { Link } from 'react-scroll';
import { Animated } from 'react-animated-css';

export default function Home() {
	return (
		<div className='Home' id='home'>
			<div className='logo-div-container'>
				<div className='logo-container'>
					<Animated
						animationIn='fadeInDownBig'
						isVisible={true}
						animationInDuration={1500}>
						<img src='https://i.imgur.com/SUG9IYs.png' alt='logo' />
					</Animated>
				</div>
			</div>

			<div className='logo-container'>
				<div className='logo-title-container'>
					<Animated
						animationIn='fadeInUpBig'
						isVisible={true}
						animationInDuration={1500}>
						<h1>jerome wy</h1>
					</Animated>

					<Animated
						animationIn='fadeInUpBig'
						isVisible={true}
						animationInDuration={1600}>
						<li>software engineer</li>
					</Animated>

					<Animated
						animationIn='fadeInUpBig'
						isVisible={true}
						animationInDuration={1700}>
						<li>full stack developer</li>
					</Animated>

					<Animated
						animationIn='fadeInUpBig'
						isVisible={true}
						animationInDuration={1800}>
						<Link to='about' spy={true} smooth={true}>
							<button className='down'>nice to meet you!</button>
						</Link>
					</Animated>
				</div>
			</div>

			<div className='down-container'></div>
		</div>
	);
}
