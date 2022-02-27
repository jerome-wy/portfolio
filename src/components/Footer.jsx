import React from 'react';
import { Link } from 'react-scroll';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { scaleDown as Menu } from 'react-burger-menu';

export default function Footer() {
	return (
		<div className='Footer' id='contact'>
			<h1 className='section-title'>contact</h1>
			<p>
				If you want to chat about a collaboration or if you just want to chat in
				general, feel free to reach out to me! <br />
			</p>

			<div className='buttons'>
				<a
					href='https://www.linkedin.com/in/jerome-wy/'
					target='_blank'
					alt='resume'>
					<SiLinkedin size={80} />
				</a>
				<a href='https://www.github.com/jerome-wy' target='_blank' alt='resume'>
					<SiGithub size={80} />
				</a>
			</div>
		</div>
	);
}
