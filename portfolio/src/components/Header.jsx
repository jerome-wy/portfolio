import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='Header'>
			<ul>
				<li>
					<Link to='/about'>
						<button className='header-btn'>about</button>
					</Link>
				</li>

				<li>
					<Link to='/projects'>
						<button className='header-btn'>projects</button>
					</Link>
				</li>

				<li>
					<Link to='/skills'>
						<button className='header-btn'>skills</button>
					</Link>
				</li>

				<li>
					<Link to='/experience'>
						<button className='header-btn'>experience</button>
					</Link>
				</li>

				<li>
					<a
						href='https://docs.google.com/document/d/1hitkqyvyU74KK7S1uMuS0Ca83f6HYGF-/edit'
						target='_blank'>
						<button className='resume-btn'>resume</button>
					</a>
				</li>
			</ul>
		</div>
	);
}
