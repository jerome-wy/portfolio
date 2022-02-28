import React from 'react';
import { Link } from 'react-scroll';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { scaleRotate as Menu } from 'react-burger-menu';

export default function Header() {
	return (
		<div className='Header' id='header'>
			<Menu>
				<img
					src='https://i.imgur.com/SUG9IYs.png'
					alt='logo'
					className='menu-logo'
				/>

				<li>
					<Link to='about' spy={true} smooth={true} className='menu-item'>
						about
					</Link>
				</li>

				<li>
					<Link to='projects' spy={true} smooth={true} className='menu-item'>
						projects
					</Link>
				</li>

				<li>
					<Link to='skills' spy={true} smooth={true} className='menu-item'>
						skills
					</Link>
				</li>

				<li>
					<Link to='experience' spy={true} smooth={true} className='menu-item'>
						experience
					</Link>
				</li>

				<li>
					<Link to='contact' spy={true} smooth={true} className='menu-item'>
						contact
					</Link>
				</li>

				<br />

				<button className='resume-btn'>
					<a
						href='https://docs.google.com/document/d/1hitkqyvyU74KK7S1uMuS0Ca83f6HYGF-/edit'
						target='_blank'
						alt='resume'>
						resume
					</a>
				</button>

				<button className='resume-btn'>
					<a
						href='https://www.linkedin.com/in/jerome-wy/'
						target='_blank'
						alt='resume'>
						linkedIn
					</a>
				</button>

				<button className='resume-btn'>
					<a
						href='https://www.github.com/jerome-wy'
						target='_blank'
						alt='resume'>
						github
					</a>
				</button>
			</Menu>
		</div>
	);
}
